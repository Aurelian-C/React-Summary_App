# `useReducer()` vs `useState()` for state management

### `useState()`

`useState()` is your ==main state management tool==. Typically, you start with `useState()` and often it's all you need. It's great for ==independent pieces of state and data==, it's great for simple state, you could say. It's great if state updates are easy and limited to a few kinds of updates. So, if you don't have a lot of different cases that will change a state, and especially ==if you don't have an object as a state== or anything like that. Now, if you do have an object as a state, or a more complex state, `useReducer()` might be interesting.

### `useReducer()`

If you do have an object as a state or a more complex state, `useReducer()` might be interesting because, in general, `useReducer()` is great if you need more power and with more power, I simply mean that you can ==write such a reducer function that can contain more complex state updating logic==, where you always are guaranteed to work with the latest state snapshot, and where you can move that potentially more complex logic out of your component function body into a separate reducer function.

You should especially consider `useReducer()` if you're dealing with related data, with state that is made up of related pieces of state. So when you, for example, have a scenario, as we had it with our form input state. And, in general, `useReducer()` can be helpful if you have more ==complex state updates, if you have different cases, different actions that can change a state==.

You should absolutely not always `useReducer()`, because often that will be overkill. If you have just a simple state that just switches between two different values for example, using `useReducer()` might be overkill.

## Summary

![120_useReducer_vs_useState](..\img\120_useReducer_vs_useState.jpg)

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)