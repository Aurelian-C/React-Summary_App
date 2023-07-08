# Redux vs Redux Toolkit

The more complex our projects become, the more complex it can get to use Redux correctly.

Let's identify a couple of potential problems we could be facing if our application would continue to grow. ==If we manage more and more state with Redux, one potential issue can be our **action types**==. In bigger applications with a lot of developers working on the app, and with a lot of different actions, it's super easy to imagine that you could ==mess up one of the action type identifiers==. You could even have clashing action type identifiers, so ==clashing identifier names==. So therefore having some way of defining those identifiers once and then reusing them would be nice.

==Another potential problem is the **amount of data which we manage in our reducer function**==. The more data we have, the more different pieces of state we have, the bigger our state objects get. That means when we update the state, ==we need to copy a lot of state, we still need to copy and keep all the other state properties==, and it also means that the reducer function gets longer and longer, and all of a sudden we might have an unmaintainable big Redux file.

==Another potential problem we could be facing is the **state immutability** which we have to respect.== We have to ensure that we always return a brand new state snapshot and that ==we don't accidentally change the existing state anywhere==. Especially if you have more complex data with nested objects and arrays, it's easy to mess this up and accidentally change some nested data even though you didn't want to.

There is a slightly easier way of using Redux: Redux Toolkit. You don't have to use Redux Toolkit, unlike Redux and React Redux which we installed before, you don't have to install and use Redux Toolkit, but if you use Redux Toolkit, certain things will get easier.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)