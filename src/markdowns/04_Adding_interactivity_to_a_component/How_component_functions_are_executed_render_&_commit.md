# How component functions are executed: render & commit

Keep in mind that ==your component is just a regular function==, the only special thing about that function is that it ==returns JSX markup==. Now, since it's a function, someone has to call it, and you might notice that you never called your component functions, instead ==you just used them like HTML elements== in your JSX markup.

==Before your components are displayed on screen, they must be rendered by React==. Understanding the steps in this process will help you think about how your code executes and explain its behavior.

You will learn:

- _What_ rendering means in React;
- _When_ and _why_ React renders a component;
- The _steps involved_ in displaying a component on screen;
- Why rendering does _not always produce a DOM update_.

==The process of rendering a component to UI has three steps:==

1. ==**Triggering** a render;==
2. ==**Rendering** the component;==
3. ==**Committing** to the DOM.==

## Step 1: _Trigger_ a render

There are two reasons when a component trigger a render:

1. It’s the component’s ==**initial render**==.
2. The component’s (or one of its ancestors) ==**state has been updated**==.

### 1. Initial render 

==When your app starts, you need to trigger the initial render==. Frameworks sometimes hide this code, but it’s done by calling [`createRoot`](https://beta.reactjs.org/apis/react-dom/client/createRoot) method with the target DOM node, and then calling its `render` method with your component:

```react
import ReactDOM from 'react-dom/client';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />);
```

Try commenting out the `root.render()` call and see the component disappear!

### 2. Re-renders when state updates

Once the component has been initially rendered, ==**you can trigger further renders by updating its state with the [state setter function](https://beta.reactjs.org/reference/react/useState#setstate)** provided by `useState` Hook. Updating your component’s state automatically trigger a render==.

## Step 2: React _renders_ your components

==After you trigger a render, React calls your components to figure out what to display on screen. **"Rendering" is React _calling_ your components**==.

- ==**On initial render,** React will call the root component==.
- ==**For subsequent renders,** React will call the function component whose state update triggered the render==.

==This process is **recursive**==: if the updated component returns some other component, React will render *that* component next, and if that component also returns something, it will render *that* component next, and so on. The process will continue until there are no more nested components and React knows exactly what should be displayed on screen.

>**IMPORTANT**: Rendering must always be a [pure calculation](https://beta.reactjs.org/learn/keeping-components-pure):
>
>- **Same inputs, same output.** Given the same inputs, a component should always return the same JSX.
>- **It minds its own business.** It should not change any objects or variables that existed before rendering.

#### Optimizing performance

The default behavior of rendering all components nested within the updated component is not optimal for performance if the updated component is very high in the tree. If you run into a performance issue, there are several opt-in ways to solve it described in the [Performance](https://reactjs.org/docs/optimizing-performance.html) section. ==**Don’t optimize prematurely!**==

## Step 3: React _commits_ changes to the DOM

==After rendering (calling) your components, React will modify the DOM==.

- ==**For the initial render,** React will use the [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) DOM API to put all the DOM nodes it has created on screen==.
- ==**For re-renders,** React will apply the _minimal necessary operations (calculated while rendering!)_ to make the DOM match the latest rendering output==.

==**React only changes the DOM nodes if there’s a difference between renders**==. For example, here is a component that re-renders with different props passed from its parent every second. Notice how you can add some text into the `<input>`, updating its `value`, but the text doesn’t disappear when the component re-renders:

```react
export default function Clock({ time }) {
  return (
    <>
      <h1>{time}</h1>
      <input />
    </>
  );
}
```

This works because during this last step, React only updates the content of `<h1>` with the new `time`. It sees that the `<input>` appears in the JSX in the same place as last time, so React doesn’t touch the `<input>` — or its `value`!

## Summary

Any screen update in a React app happens in three steps:

1. Trigger
2. Render
3. Commit

==React does not touch the DOM _if_ the rendering result is the same as last time==.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
1. [Render and Commit - beta.reactjs.org](https://beta.reactjs.org/learn/render-and-commit)