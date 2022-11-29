# What are "Side Effects" & introducing `useEffect()`

What is an Effect, also called a Side Effect? Well, let's not forget that our components in the React app, and our React app as a whole, and also especially the React library itself has ==**one main job**: to _render_ the UI, to _react_ to user inputs, to _re-render_ the UI== when it's needed (these are done with the help of states and events).

That is what we focused on this far, with state and events and all of that. ==The main job of React is to **bring something onto the screen**, and to make sure that the user may interact with that something==, and that what's shown on the screen may change based on certain events.

We wanna ==evaluate and render the JSX code== and the DOM. We wanna ==manage state and `props`== to make sure that every component has the data it needs, and that we reflect the user input correctly. We wanna ==react to user events==, and of course React is there to also ==re-evaluate our components== and their JSX code and manipulate the real DOM as needed. So that's all baked into React with the tools and features we learned thus far (`useState()`, `props`, etc).

## What is a "side effect"?

==Side effects are everything else that might be happening in your app and that thing is **not related to bring something onto the screen**==. A good example is sending a Http request, storing something in Browser Storage, Timers or Intervals which you set in your code. These are all tasks, but _these tasks are all not related to bringing something onto the screen_, at least not directly.

==Of course you might be sending a Http request, to then draw something onto the screen once you got the response, but _**sending the request itself and handling potential errors and so on, that's not something you need React for, that's not something React cares about, that's not what React is**_==. Therefore, it's not something that is related to drawing something onto the screen directly or anything like that. So _these are therefore tasks which must happen **outside** of the normal Component evaluation, so **outside of your normal Component function**_.

Therefore, we'll have a better tool than `useState()` for handling side effects, and that's the `useEffect()` Hook. The `useEffect()` Hook is simply another built-in hook, so another **function** you can run inside of your component function.

`useEffect()`, besides `useState()`, is the most important React hook you have.

![110_Side_effects](..\img\110_Side_effects.jpg)

> **Note**: _Re-evaluate_ or _re-render_ the component is the same thing as _re-execute_ the entire component. When the state is changed, NOT only the JSX markup is re-evaluated, _the entire component is re-evaluated_ (re-rendered or re-executed)! The state can be changed by various reasons: events (click, user inputs, page load etc), Http requests etc.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)