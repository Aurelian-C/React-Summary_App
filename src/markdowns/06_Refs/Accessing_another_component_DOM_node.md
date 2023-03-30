## Accessing another component’s DOM nodes: `React.forwardRef`

==The `ref` prop is supported on all built-in HTML elements, but by default you can't use `ref` prop on your custom components !!!==

```react
// Correct
<input ref={value} />

// Wrong:
<MyInput ref={value} />   // Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
```

==A custom component doesn’t expose its DOM nodes by default. You can opt into exposing a DOM node by using `React.forwardRef()` and passing the second `ref` argument down to a specific node==.

## Accessing another component’s DOM nodes

When you put a ref on a built-in component that outputs a HTML element like `<input />`, React will set that ref’s `current` property to the corresponding DOM node (such as the actual `<input />` in the browser).

However, if you try to put a ref on **your own** component, like `<MyInput />`, by default you will get `null`:

![Diving_into_Forward_Refs4](../../img/Diving_into_Forward_Refs4.jpg)

 To help you notice the issue, React also prints an error to the console:

![Diving_into_Forward_Refs3](../../img/Diving_into_Forward_Refs3.jpg)

This happens because by default ==React does not let a component access the DOM nodes of other components. Not even for its own children!== This is intentional. Refs are an escape hatch that should be used sparingly. Manually manipulating **another** component’s DOM nodes makes your code even more fragile.

Instead, ==custom components that _want_ to expose their DOM nodes have to **opt in** to that behavior. A component can specify that it “forwards” its ref to one of its children==. Here’s how `MyInput` can use the `forwardRef` API:

```react
import React from 'react';

const MyInput = React.forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});
```

This is how it works:

1. `<MyInput ref={inputRef} />` tells React to put the corresponding DOM node into `inputRef.current`. However, it’s up to the `MyInput` component to opt into that—by default, it doesn’t.
2. The `MyInput` component is declared using `forwardRef`. **This opts it into receiving the `inputRef` from above as the second `ref` argument** which is declared after `props`.
3. `MyInput` itself passes the `ref` it received to the `<input>` inside of it.

![Diving_into_Forward_Refs5](../../img/Diving_into_Forward_Refs5.jpg)

==In design systems, it is a common pattern for low-level components like buttons, inputs, and so on, to forward their refs to their DOM nodes. On the other hand, high-level components like forms, lists, or page sections usually won’t expose their DOM nodes to avoid accidental dependencies on the DOM structure==.

## Exposing a subset of the API with an imperative handle

==In the above example, `MyInput` exposes the original DOM input element. This lets the parent component to call, for example, `focus()` on it. However, this also lets the parent component do something else — for example, change its CSS styles. In uncommon cases, you may want to **restrict the exposed functionality**==. You can do that with `useImperativeHandle`:

![Diving_into_Forward_Refs6](../../img/Diving_into_Forward_Refs6.jpg)

Here, `realInputRef` inside `MyInput` holds the actual input DOM node. However, ==`useImperativeHandle` instructs React to provide **your own special object** as the value of a ref to the parent component. So `inputRef.current` inside the `Form` component will only have the `focus` method. In this case, **the ref “handle” is not the DOM node**, but the custom object you create inside `useImperativeHandle` call==.

### Another example

![Diving_into_Forward_Refs1](../../img/Diving_into_Forward_Refs1.jpg)

![Diving_into_Forward_Refs2](../../img/Diving_into_Forward_Refs2.jpg)

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
1. [Manipulating the DOM with Refs - beta.reactjs.org](https://beta.reactjs.org/learn/manipulating-the-dom-with-refs)
