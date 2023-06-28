# Alternative 2: Using a custom Hook - create an abstract store hook that manage the wide-state data

## Understanding the global wide-state data: `globalState` variable

![Replace_Redux_with_custom_hooks](../../img/Replace_Redux_with_custom_hooks.jpg)

I want to have some state in the `useStore` custom hook and that state will actually be state that is stored in `globalState` variable. 

Is important to notice that ==`globalState` is **defined outside of the `useStore` custom hook, so it's global**. It's not recreated when we call `useStore` custom hook, it's not created separately for every component that consumes the `useStore` custom hook. Instead the `globalState` variable will be created _once_ when the "store.js" file is first imported, and thereafter any other file that imports from the "store.js" file, _all_ will use the same state that is stored in that `globalState` variable==.

> **IMPORTANT**: That's one important idea here: we'll share data between all files that import from "store.js" and that's not something we did before when we learn custom hooks. When we learned custom hooks the idea was the opposite: we could share logic but not data. Now we can ==**share _logic_ and _data_** by managing the data outside of the custom hook, because inside of the custom hook it would not be shared (global), it would be inclusive to each component==.
>
> If `globalState` is defined inside of our `useStore` custom hook each component would get it's own data (it's own `globalState`), but managing it outside of the custom hook every file that imports the "store.js" file or something from the "store.js" file gets the same shared data.

### The state updating function that updates the `globalState` variable

![Replace_Redux_with_custom_hooks0](../../img/Replace_Redux_with_custom_hooks0.jpg)

==I'm only interested in the state updating function (not and the current state snapshot) because whenever the `setState` function is called and the state is changed/updated, _the component that use the `useStore` custom hook will re-render_==. We'll need `setState` function to re-render our components when our state changes and that why I'm only interested in the `setState` function, not and the current state snapshot.

## The `listeners` array

Now I want to add the `setState` (state updating function) to the `listeners` array because _`listeners` should be an **array full of functions** which I can call to update all components that are using the `useStore` custom hook_. So with `listeners` variable I have a list of `setState` functions (listeners) for each individual component that is interested in update the `globalState` variable.

That means that ==every component that uses the `useStore` custom hook will get its own `setState` function which is then added to the shared `listeners` array==, so `listeners` array will grow over time the more components use the `useStore` custom hook.

![Replace_Redux_with_custom_hooks1](../../img/Replace_Redux_with_custom_hooks1.jpg)

### Add `setState` when a component is mount and remove `setState` when a component is unmounted

It would be great that if a component is unmounted we get rid of its listener (its `setState` stored in the `listeners` array). Therefore we can use the `useEffect` hook and its cleanup function.

![Replace_Redux_with_custom_hooks2](../../img/Replace_Redux_with_custom_hooks2.jpg)

As your learn, a `useEffect` function with a dependency that has an empty array means that the `useEffect` will only run for the component that uses the `useStore` custom hook when that component mounts, so I want to readjust the `listeners` array for the component when it mounts. We can also provide a cleanup function so that we remove the component listener (`setState` function) from the `listeners` array when the component unmounts.

> **Note**: With an empty array as a dependency, `useEffect` will only run when a component is mount, and when the component is unmount (removed) `useEffect` will run the cleanup function.

Now we're adding a `setState` function to our `listeners` array for a component that uses the `useStore` custom hook when that component mounts and removing `setState` from `listeners` when that component unmounts.

## Change the `globalState`: dispatch actions in our components

Now we need to be able to **change our state** and for that we should be able to kind of **dispatch actions** in our components. For that we need to create a `dispatch` function with an `actionIdentifier` parameter because we'll define the concrete actions in a different place, and with the help of `actionIdentifier` parameter we will find each specific action.

Global `actions` variable should be an object where we have keys which match with `actionIdentifier` parameter, and where the value of that key is a concrete function: `actions[actionIdentifier]()`.

![Replace_Redux_with_custom_hooks3](../../img/Replace_Redux_with_custom_hooks3.jpg)

> **Note**: Keep in mind that what we add to `listeners` array is just `setState` functions. So in the `for` loop by ==calling `listener(globalState)` is the same like calling `setState(globalState)`==. What this does is that it updates the React state and once the state is changed/updated React will re-render the component that is using the `useStore` custom hook.

Now I know we're still in a relatively abstract world but we're now having the `useStore` custom hook with its abstract `dispatch` function, and within this custom hook we're able to register listeners for each component that uses our `useStore` custom hook.

==Now the `useStore` custom hook should also return something and that something is an array with exactly two elements: the `globalState` variable and `dispatch` function==. If that looks familiar to you, then this is exactly what the built-in `useReducer` function always returned; it always returns a state and a dispatch function. `useReducer` is just not suited for managing state across components, which is why we have to build our own version kind of.

![Replace_Redux_with_custom_hooks4](../../img/Replace_Redux_with_custom_hooks4.jpg)

This custom hook is nice, but it's still very generic. For example, right now, we got no way to change the global `actions` variable. We can call it, but we can't set it. So there is another thing I will export from the "store.js" file, besides the `useStore` custom hook, and that's the `initStore` function.

The `initStore` function will receives some actions via `userActions` parameter, actions which are defined by you as the developer, and also an `initialState`, because right now `globalState` is always an empty state and maybe you want to have some initial state.

![Replace_Redux_with_custom_hooks5](../../img/Replace_Redux_with_custom_hooks5.jpg)

So now we have our `globalState` and we have `userActions`. Now we need some place where we can create a concrete store based on the "store.js" file setup.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
2. [use-global-hook - npmjs.com](https://www.npmjs.com/package/use-global-hook)