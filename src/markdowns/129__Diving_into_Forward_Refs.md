# Diving into "Forward Refs"

==The `ref` prop is supported on all built-in HTML Components, but you cannot use `ref` prop on your Custom Components !!!==

```react
// Correct
<input ref={value} />

// Wrong:
<Header ref={value} />   // Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
```

==`React.forwardRef()` & `useImperativeHandle()` hook allows us to interact with a custom Input Components **imperatively**==, which means not by passing some state to a Component that then changes something in it, but, for example, by _calling a function that is **inside** of a Component_, which is something you won't need to do often and you shouldn't do often, because it's not the typical React pattern you want, but sometimes it is helpful.

`useImperativeHandle()` allows us to ==use a Component or functionalities from inside a Component imperatively==, which simply means not through the regular state props management, not by controlling the Component through state in the parent Component, but instead by directly calling or manipulating something in the Component. And again, that is something you rarely wanna use and therefore, you shouldn't use it very often in your projects as well. ==`useImperativeHandle()` should be used with `React.forwardRef()`==.

### 1. First step

We need to wrap our component with `React.forwardRef()`. `React.forwardRef()` is basically a function which we execute, to which we pass our Component function. So our Component function is now the first argument of `React.forwardRef()`, and `React.forwardRef()` returns a React Component, so Input still is a React Component, but ==a React Component that is capable of being bound to a `ref` set from outside==.

Now with that, Input (your Custom Component) is able to take a `ref` prop and it will expose a `ref`, and it is controllable or usable with refs. But ==the only thing you will be able to use is what you expose through `useImperativeHandle()`==.

### 2. Second step

`useImperativeHandle()` takes two two parameters. The first parameter is ==a `ref` that should be set from outside==. So if now the parent Component adds the `ref` prop and binds `ref` to something, essentially, `ref` inside the child Component will establish the connection between parent refs and child refs. The second parameter is a function, a function that should return an object, and that ==object will contain all the data you will be able to use from outside of your custom Component==.

```react
import React, { useRef, useImperativeHandle } from 'react';

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div>
        <label htmlFor={props.id}>{props.label}</label>
        <input ref={inputRef} type={props.type} id={props.id} onChange={props.onChange} />
    </div>
  );
});

export default Input;
```

With `React.forwardRef()` and `useImperativeHandle()` hook , you can ==_expose functionalities from a custom React Component to its parent Component_, to then use your custom Component in the parent Component through refs, and trigger certain functionalities with the help of refs==.

==The idea behind `React.forwardRef()` is that you can use your refs custom Input Component as you can use `ref` to a built-in input==. So this something you can do, not something you will need all the time and you should avoid it at all costs, I would almost say.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)