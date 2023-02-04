# Using the React Context

## 1. Create the folder that contains the Context file

![Using_the_React_Context_API](..\img\Using_the_React_Context_API.jpg)

> **Note**: You can have _multiple Contexts for multiple global states_ and of course, you can also use just _one Context for a bigger state_, that's all up to you.

## 2. Create a Context

```react
import React from 'react';
const MyContext = React.createContext(defaultValue);
export default MyContext; // we don't need this object here though, instead we'll need it in the other components, do I'll export it as a default to make it available in other files.
```

==`React.createContext()` return an Context **object**.==

==`React.createContext()` takes a default Context as a `defaultValue` parameter, and `defaultValue` is just your app or component wide **state**==, so it's up to you what that wide state should be. It could be something simple like just a string, if your app wide or a component wide state is just some texts, so you could have some text as your default wide state. But often though that `defaultValue` will be an object.

```react
import React from 'react';
const MyContext = React.createContext('my state');
export default MyContext;

// or

import React from 'react';
const MyContext = React.createContext({
    isLoggedIn: false;
});
export default MyContext;
```

> **Note**: ==The `defaultValue` argument is **only used** when a component does not have a matching Provider above it in the tree==. This default value can be helpful for testing components in isolation without wrapping them. If you don’t provide the context, React will use the default value.
>
> Passing `undefined` as a `Context.Provider` "value" prop does not cause consuming components to use `defaultValue`.

Now what we get back from `React.createContext()` is something interesting though. ==`React.createContext()` will return an object that also contains components==. So we store that object in `MyContext`, and `MyContext` is named like a component, whilst `MyContext` itself is not a component, but it is an object that will contain a component.

`React.createContext()` creates a Context object. ==When React renders a component that subscribes to the Context object, it will read the _current Context value_ from the closest matching Provider above it in the tree==.

## Use a Context

To use Context in your app, you need to do two things:

### 1. `Context.Provider`

```react
import MyContext from './store/auth-context';

const Componenet = () => {
    <MyContext.Provider value={/* some value */}>
        // Other components
    </MyContext.Provider>
};

// Technically, you don't need a Provider component if you have a default value, but in reality, you will use Context to have a value which can change and that will only be possible with a Provider component.
```

==Every Context object comes with a Provider React component, that **allows consuming** components to subscribe to Context changes. You need to **provide the Context**, which basically tells React "Hey, here's my Context! _All components that are wrapped by it should have access to it_".==. Providing means that you wrap in JSX code all the components that should be able to tap into that Context, so that should be able to listen/subscribe to that Context. ==Any component that's not wrapped will not be able to listen/subscribe to the Context==.

The Provider component accepts a `value` prop to be passed to consuming components that are descendants of that Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree. ==All consumers that are descendants of a Provider will re-render whenever the Provider’s `value` prop changes==.

> **Note**: Technically, you don't need a Provider component if you have a default value, but in reality, you will use Context to have a value which can change and that will only be possible with a Provider component.

So as I said, `MyContext` itself wouldn't be a component, but in JSX Code we need a component though. With a `.` (dot) we can access a property on the `MyContext` object that contains a component, and that's the `<MyContext.Provider></MyContext.Provider>`. `<MyContext.Provider/>` is a component we can use in our JSX code, and we can wrap it around other components, and those other components and all their descendant components, so all their children and their children's children and so on, all those components will now have access to that `MyContext` Context.

By passing your object in the `value` prop, now you would be able to change that object, for example, through state and the `<App/>` component. And ==whenever it changes, the new value will be passed down to all consuming components==.

### 2. Consuming the Context

==Now, providing is always the first step. Besides providing, you then need to **consume** it==. You need to hook into that Context object that contains your wide state, or in other words, you need to listen to that Context to have access to that wide state. We have two ways of consuming: we can listen by using ==**React Context Consumer**== or by using a ==**React Hook (`useContext()` hook)**==. We'll typically use the React Hook.

`useContext()` hook does what the name implies, it allows us to use a Context, it allows us to tap into a Context and listen to it. `useContext()` return the wide-state of that Context that you point in the `useContext()` function.

```react
import { useContext } from 'react';
import MyContext from './store/auth-context';

const Component = () => {
    const ctx = useContext(MyContext);
};
```

> **Note**: Now by using use/consuming the context, ==the component that use the Context will be re-evaluated by React whenever the Context changes!==

The good thing is we can set up a **dynamic Context** where we don't just pass **data** to other components but also **functions**.

## Context passes through intermediate components

You can insert as many components as you like between the component that provides context and the one that uses it. This includes both built-in components like `<div>` and components you might build yourself.

How context works might remind you of [CSS property inheritance.](https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance) In CSS, you can specify `color: blue` for a `<div>`, and any DOM node inside of it, no matter how deep, will inherit that color unless some other DOM node in the middle overrides it with `color: green`. Similarly, in React, the only way to override some context coming from above is to wrap children into a context provider with a different value.

In CSS, different properties like `color` and `background-color` don’t override each other. You can set all `<div>`’s `color` to red without impacting `background-color`. Similarly, **different React contexts don’t override each other.** Each context that you make with `createContext()` is completely separate from other ones, and ties together components using and providing _that particular_ context. One component may use or provide many different contexts without a problem.

## Context vs props

In most cases, you will use props to pass data to components, because props are your mechanism to configure components and to make them reusable. Only if you have something which you would forward through a lot of components, and you're forwarding it to a component that _does something very specific_, for example, a navigation where you have a button that will always logout the user, in such cases you wanna consider Context.

_If you would use Context instead of props, every Component would do the same thing, it would be bound to the same Context, so it might be less reusable_.

You can of course always rely on "prop chains" if you prefer that, but Context allows you to write more concise code and it often makes managing such app-wide state simply a bit easier.

### Before you use context

Context is very tempting to use! However, this also means it’s too easy to overuse it. **Just because you need to pass some props several levels deep doesn’t mean you should put that information into context.**

Here’s a few alternatives you should consider before using context:

1. **Start by [passing props.](https://beta.reactjs.org/learn/passing-props-to-a-component)** If your components are not trivial, it’s not unusual to pass a dozen props down through a dozen components. It may feel like a slog, but it makes it very clear which components use which data! The person maintaining your code will be glad you’ve made the data flow explicit with props.
2. **Extract components and [pass JSX as `children`](https://beta.reactjs.org/learn/passing-props-to-a-component#passing-jsx-as-children) to them.** If you pass some data through many layers of intermediate components that don’t use that data (and only pass it further down), this often means that you forgot to extract some components along the way. For example, maybe you pass data props like `posts` to visual components that don’t use them directly, like `<Layout posts={posts} />`. Instead, make `Layout` take `children` as a prop, and render `<Layout><Posts posts={posts} /></Layout>`. This reduces the number of layers between the component specifying the data and the one that needs it.

If neither of these approaches works well for you, consider context.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
1. [Passing Data Deeply with Context - beta.reactjs.org](https://beta.reactjs.org/learn/passing-data-deeply-with-context)
