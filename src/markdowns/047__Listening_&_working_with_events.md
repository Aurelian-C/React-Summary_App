# Listening to events & working with event handlers
How exactly we can react DOM events in React? ==On **all built-in HTML elements**, like `div`, `h2`, `buttons` and so on, we have **full access to all the native DOM events**, which we can listen to==.

==For all these default events, there is a `prop` equivalent in React==, which we can add to these built-in HTML elements to listen to these events. So instead of adding a listener as we would normally do it, for example `document.querySelector('button').addEventListener()`, which would be the imperative way of doing that, in React we add an event listener by going to the JSX element and there we add a special `prop`. But now it's not a `prop` which sets some value, but instead it's a `prop` which starts with `on`, because ==React exposes all the default events as `props` which start with `on`== (example: onClick, onScroll):

```react
const functionHandler = function() {
    // code here
};

<div onClick={functionHandler}></div>
<form onSubmit={functionHandler}></form>
```

==All these `on` props, all these event handler props (onClick, onSubmit, etc), want **a function passed as a value**, which then is _executed when that event occurs_==.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)