# Working with `ref`s

References, but the name in React is just `ref`, so the ==short form of **reference**==.

What do `ref`s do? `ref`s are actually quite powerful, but in their most basic form, they ==allow us to get **access to other DOM elements** and work with them==.

With `ref`s we can ==set up a connection between a HTML element, which is being rendered in the end, and our JavaScript code==. And for that, we first of all, need to create a `ref`, which we do with the help of another React hook (`useRef` Hook).

```react
import {useRef} from 'react';

const Component = () => {
  const someRef = useRef();
  const anotherRef = useRef();
    
  return (<form>
              <input ref={someRef}/>
              <input ref={anotherRef}/>
          </form>)
};
```

> **Note**: Like all React hooks, `useRef()` is only usable inside of Component Function.

Now, we can let React know that we wanna ==connect a `ref` to a HTML element==, by going to that element to which we wanna connect the `ref` and adding a special prop there, the `ref` prop. Just like the `key` prop, the `ref` prop is a built-in prop, which ==you can add to any _build-in_ HTML element== because, and that's important, you can connect any HTML element to one of your references; you will very often do that for inputs, because you wanna fetch input data, for example, but you can do with any element.

==The `ref` prop is supported on all built-in HTML elements, but you cannot use `ref` prop on you Custom Components!==

```react
// Correct 
<input ref={value} />

// Wrong
<Header ref={value} /> // Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
```

==`ref` value which is being generated always is an **object**==, which always has a `current` property key, and the ==`current` property key holds the actual value that `ref` is connected with, and what's being stored in `current` property key is the actual **DOM node**==. So not some theoretical value or anything like that, but the real DOM node, which you could now manipulate and do all kinds of things with.

> **Note**: _It is recommended that you don't manipulate that DOM node_. Your DOM should really only be manipulated by React. You're using React to let it do all the heavy lifting.
>
> ==Rarely use `ref`s to manipulate the DOM==. Only in exceptional cases use `ref`s to manipulate the DOM. You can manipulate the DOM without React, and you typically shouldn't do that, but for example if you just wanna reset a value entered by a user in an input element, it is something you can consider doing.

You will see `ref`s in a lot of React projects, because getting access to elements is quite convenient and as I said, they can even do a bit more than that, but we'll see them again throughout the course. This is just an introduction and this is all you need to know about `ref`s right now.

## `ref`s vs state

Now, in general, the question is whether is better, `ref`s or state? You can use either of the two. You will sometimes have use cases where you just want to quickly read a value, for example. If you only want to read a value and you never plan on changing anything, well, then you don't really need `useState()`, because just to `useState()` as a keylogger is not that great, it's a lot of unnecessary code and work. So ==if you just want to read a value, `ref`s are probably better==.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)