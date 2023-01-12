# How component functions are executed: render & commit

Keep in mind that ==your component is just a regular function==, the only special thing about that function is that it ==returns JSX markup==. Now, since it's a function, someone has to call it, and you might notice that we never called our component functions, instead ==we just used that functions like HTML elements== in the JSX markup.

Before your components are displayed on screen, they must be rendered by React. Understanding the steps in this process will help you think about how your code executes and explain its behavior.

> You will learn:
>
> - _What_ rendering means in React;
> - _When_ and _why_ React renders a component;
> - The _steps involved_ in displaying a component on screen;
> - Why rendering does _not always produce a DOM update_.

==The process of rendering a component to UI has three steps:==

1. ==**Triggering** a render;==
2. ==**Rendering** the component;==
3. ==**Committing** to the DOM.==

## Step 1: _Trigger_ a render

There are two reasons when a component trigger a render:

1. It’s the component’s **initial render.**
2. The component’s (or one of its ancestors) **state has been updated.**

### Initial render 

When your app starts, you need to trigger the initial render. Frameworks sometimes hide this code, but it’s done by calling [`createRoot`](https://beta.reactjs.org/apis/react-dom/client/createRoot) method with the target DOM node, and then calling its `render` method with your component:

```react
import ReactDOM from 'react-dom/client';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />);
```

### Re-renders when state updates

Once the component has been initially rendered, you can trigger further renders by updating its state with the [state setter function](https://beta.reactjs.org/reference/react/useState#setstate) provided by `useState` Hook. ==Updating your component’s state automatically trigger a render==.

## Step 2: React renders your components 

After you trigger a render, React calls your components to figure out what to display on screen. =="Rendering" is React _calling_ your components==.

- **On initial render,** React will call the root component.
- **For subsequent renders,** React will call the function component whose state update triggered the render.

==This process is **recursive**==: if the updated component returns some other component, React will render *that* component next, and if that component also returns something, it will render *that* component next, and so on. The process will continue until there are no more nested components and React knows exactly what should be displayed on screen.

## Step 3: React commits changes to the DOM 

After rendering (calling) your components, React will modify the DOM.

- **For the initial render,** React will use the [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) DOM API to put all the DOM nodes it has created on screen.
- **For re-renders,** React will apply the _minimal necessary operations (calculated while rendering!)_ to make the DOM match the latest rendering output.

==**React only changes the DOM nodes if there’s a difference between renders**==.

## Summary

Any screen update in a React app happens in three steps:

1. Trigger
2. Render
3. Commit

React does not touch the DOM if the rendering result is the same as last time.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
1. [Render and Commit - beta.reactjs.org](https://beta.reactjs.org/learn/render-and-commit)