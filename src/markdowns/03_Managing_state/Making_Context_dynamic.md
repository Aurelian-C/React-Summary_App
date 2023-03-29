# Making Context dynamic: scaling up with `useState` or `useReducer`

Reducers let you consolidate a component’s state update logic. Context lets you pass information deep down to other components. You can combine reducers and context together to manage state of a complex screen.

You will learn:

- How to combine a reducer with context
- How to avoid passing state and dispatch through props
- How to keep context and state logic in a separate file

## Combining a reducer with context 

Let say that you have an app with a top-level component and the state is managed by a reducer inside of it. The reducer function contains all of the state update logic. A reducer helps keep the event handlers short and concise. However, as your app grows, you might run into another difficulty.

**The state, `dispatch` functions and reducer function are only available in the top-level component that contain them.** To let other components read the state and trigger the `dispatch` functions, you have to explicitly pass down the current state and the event handlers that change it as props. In a small app this works well, but if you have tens or hundreds of components in the middle, passing down all state and functions can be quite frustrating!

This is why, as an alternative to passing state and `dispatch` functions through props, you might want to put them into context. This way, any component below in the tree can read the state and `dispatch` functions without the repetitive "prop drilling".

Here is how you can combine a reducer with context:

1. **Create** the context.
2. **Put** state and dispatch into context.bb
3. **Use** context anywhere in the tree.

## Building & using a custom `Context.Provider` component

![Making_Context_dynamic](../../img/Making_Context_dynamic.jpg)