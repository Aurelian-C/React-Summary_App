# Understanding "Keys"

React has a special concept when it comes to rendering lists of data, a concept which exists to ensure that React is able to update and render such lists efficiently, without performance losses or bugs which may occur.

==The `key` prop is a prop you can add to any component, no matter if it's a custom component or if it's a built-in HTML element==, you can always add `key` prop. If you do add it, if you add the `key` to your component or HTML element, then you can ==help React identify the individual items==. For that you need to ==set a unique value per list item==.

Why should you add the special `key` prop to list JSX elements? It's required for React to ==correctly identify and update (if needed) the list of JSX elements==. Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen `key` helps React infer what exactly has happened, and make the correct updates to the DOM tree. Rather than generating keys on the fly, you should include them in your data.

A warning is thrown in the browser console if you have two or more identic key: `Warning: Encountered two children with the same key, "goal1"`. ==Keys should be unique so that components maintain their identity across updates==. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.

==Whenever you're working with an **array of JSX elements** React wants a `key` on every element==.

## Why does React need keys? 

Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.

File names in a folder and JSX keys in an array serve a similar purpose. They let us uniquely identify an item between its siblings. A well-chosen key provides more information than the position within the array. Even if the *position* changes due to reordering, the `key` lets React identify the item throughout its lifetime.

>You might be tempted to use an item’s index in the array as its key. In fact, that’s what React will use if you don’t specify a `key` at all. But the order in which you render items will change over time if an item is inserted, deleted, or if the array gets reordered. Index as a key often leads to subtle and confusing bugs.
>
>Similarly, do not generate keys on the fly, e.g. with `key={Math.random()}`. This will cause keys to never match up between renders, leading to all your components and DOM being recreated every time. Not only is this slow, but it will also lose any user input inside the list items. Instead, use a stable ID based on the data.
>
>Note that your components won’t receive `key` as a prop. It’s only used as a hint by React itself. If your component needs an ID, you have to pass it as a separate prop: `<Profile key={id} userId={id} />`.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)