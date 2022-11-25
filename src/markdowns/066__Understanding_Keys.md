# Understanding "Keys"

React has a special concept when it comes to rendering lists of data, a concept which exists to ensure that React is able to update and render such lists efficiently, without performance losses or bugs which may occur.

==The `key` prop is a prop you can add to any component, no matter if it's a custom component or if it's a built-in HTML element==, you can always add `key` prop. If you do add it, if you add the `key` to your component or HTML element, then you can ==help React identify the individual items==. For that you need to ==set a unique value per list item==.

Why should you add the special `key` prop to list JSX elements? It's required for React to ==correctly identify and update (if needed) the list of JSX elements==.

A warning is thrown in the browser console if you have two or more identic key: `Warning: Encountered two children with the same key, "goal1"`. ==Keys should be unique so that components maintain their identity across updates==. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.

==Whenever you're working with an **array of JSX elements** React wants a `key` on every element==.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)