# React Fragments

Up until now, you learn that you ==can’t return more than one "root" JSX element==, or you also can’t store more than one "root" JSX element in a variable. The solution for that was to build a **custom wrapper component** and wrap with it all adjacent elements that you have in your JSX code.

```react
// Build a wrapper component
const Wrapper = props => {
  return props.children;
};

export default Wrapper;
```

```react
// Wrap JSX elements with the help of wrapper component
const CustomEl = props => {
  return (
    <Wrapper>
      <h1>Hi there!<h1/>
      <p>Lorem ipsum doloret...<p/>
    </Wrapper>
  );
};

export default CustomEl;
```

==With a custom wrapper component you could use a little trick to fulfill the requirement of JXS limitation, and not end up with `<div>` soup. Now, because it's so convenient, this wrapper component is actually not a component we need to build on our own, instead it comes with React. There, it's the Fragment component which you can access on `React.Fragment`==.

==Fragments allow us to **write cleaner code**, to end up with **less unnecessary HTML elements on the final page**==.

## Fragments

A common pattern in React is for a component to return multiple elements. _Fragments let you group a list of children **without adding extra nodes to the DOM**_.

==You can access the **Fragment component** with `React.Fragment`, or in some projects you can also use the **shortcut syntax `<></>`**. These two syntaxes (`React.Fragment` & shortcut syntax) **render empty wrappers**, which don't render any actual HTML element to the DOM==. It's just built into React, but I showed you our custom wrapper, so that you understand what these built-in wrappers do.

![React_Fragments](..\img\React_Fragments.jpg)

> Note: You can use the shorthand syntax `<></>` the same way you’d use any other element, except that it doesn’t support _keys_ or _attributes_.
>
> ```react
> render() {
>   return (
>     <>
>       <ChildA />
>       <ChildB />
>       <ChildC />
>     </>
>   );
> }
> ```
>
> Shortcut syntax depends on your project set-up, because your build workflow needs to support shortcut syntax, and that's the same as our custom wrapper component.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
