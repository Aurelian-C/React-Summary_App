# Redux & Side Effects (and Asynchronous Code)

Your reducer functions must be **pure functions**, **side-effect free**, and **synchronous**.

A pure function for the same input it will always produce the same output, without any side effects that happen along the way, without any asynchronous code that blocks it. No code of that kind must be part of your reducer functions.

When working with Redux, when we dispatch some action that would involve a side effect (like HTTP request that should be sent), the question is where should we then put the side effect code? Where should we put our asynchronous code when working with Redux? Because the reducer functions is clearly the wrong place as we just learned.

The answer to this question is that we have two possible places where we can put our side effects:

- we can put our side effects directly into the component with `useEffect` and then we only dispatch an action once that side effect is done, so Redux doesn't know anything about that side effect,
- we write our own action creator functions that have inside of them side effects, so we don't use the automatically generated ones Redux Toolkit gives us, but instead we write our own action creators. It turns out that for those action creators Redux actually has a solution that allows us to perform side effects and run asynchronous tasks as part of this action creators, without changing the reducer function because that function must stay side effect free.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)