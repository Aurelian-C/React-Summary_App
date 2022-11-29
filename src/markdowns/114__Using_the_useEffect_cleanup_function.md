# Using the `useEffect` Cleanup Function

==In the `useEffect()` function you can return only one specific thing, and that thing is a function. The function that you return from the `useEffect()` is called **Cleanup function**. This function that you return from `useEffect()` will **run as a cleanup process before `useEffect()` will be re-executed**. _The Cleanup function will not run when the useEffect() is **executed for the first time**_==.

The `useEffect()` will be executed again only if the dependencies changes, and if the `useEffect()` is re-executed, then the first thing that will be executed inside in the `useEffect()` function is that Cleanup function.

The Cleanup Function will also run whenever the component you're specifying the effect in unmounts from the DOM, so whenever the component is reused. So the Cleanup Function runs before every new side effect function execution and before the component is unmount (removed) from the DOM, and it doesn't run before the first side effect function execution.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)