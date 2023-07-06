# Using an Action Creator Thunk

Up until now, we are using simples action creator. We get those action creators automatically by Redux Toolkit, and when we call them, Redux Toolkit automatically create the action objects which we dispatch.

![Redux11](../../img/Redux11.jpg)

We can also write our **own action creators** and we can write them to create so-called thunks. Now what is a thunk?

A thunk is simply a function that delays an action until later, until something else finished. We could write an action creator as a thunk, which does not immediately return the action object, but which instead returns another function which eventually returns the action. So that we can run some other code before we then dispatch the actual action object that we did want to create.

## How to build an Action Creator Thunk

We write our Actions Creator Thunks in the `.js` file where we manage the Redux state.

![Redux12](../../img/Redux12.jpg)

![Redux13](../../img/Redux13.jpg)



I `dispatch(sentCartData(cart))` and I'll execute the `sendCartData` function, and pass `cart` as an argument to it. Now this might look weird.

What we dispatched before always were action creators, so functions that return an action object with a `type` property and so on. Now in first image above, we are instead dispatching a function that returns another function. But the great thing when using Redux Toolkit, it is prepared for that. ==It doesn't only accept simple action objects with a `type` property; instead it also accept action creators that return functions. If Redux Toolkit sees that you're dispatching an action which is actually a function, instead of action object, Redux Toolkit will execute that function for you.== And with that function, it will give us the `dispatch` argument automatically. So that in that executed function we can dispatch again, because there's a such a common pattern that we wanna have action creators that can perform side effects, and that can then dispatch other actions, which eventually reached the reducers as part of a flow off side-effects, or as a flow of steps that should be taken.

Why would we wanna use this pattern? Well, it's simply ==an alternative to having this logic in your React component==. You can add this logic in your React components, but it's also not a bad idea to keep your React components lean, to not have too much logic in them. The `App` component is now leaner, it only dispatches one action, not multiple actions, and it doesn't care about sending the HTTP request, and all the hard work happens inside of our custom Action Creator function, in our Redux files.

## Another example

![Redux14](../../img/Redux14.jpg)

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)