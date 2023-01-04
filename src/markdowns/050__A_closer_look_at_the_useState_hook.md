# A closer look at the `useState` hook

```react
import React, {useState} from 'react';
```

==With `import React from 'react'` we import **the overall React object**. Now, with `import {useState} from 'react'` we want to import **a single pieces from the React library**. The `useState` that we import is a function. The `useState` is a function provided by the React library and this function allows us to **define values as state** where changes to these values should reflect in the component function being called again==, which is a key difference to a value stored in a regular variable.

> **Note**: We use `useState` only inside of a component function !!!

==`useState` is a so-called a React Hook==, there are other hooks as well. ==All these React hooks can be recognized by the fact that they **start with the word "use"** in their name, and all these hooks **must only be called inside of React component functions**==, they can't be called outside of a component function, and they all just shouldn't be called in any nested functions. They must be called directly inside a component functions.

Now, ==`useState` doesn't work just by calling it==. Instead, with `useState` you can set an ==initial state value==. _With `useState` we basically create a special kind of variable, you could say, a variable where changes will lead a component function to be called again_.

==`useState` returns an array where the first element is the variable itself, you could say, the value itself, and the second element in the array is a **state updating function**, _which we can then call to assign a new value to that variable_==. So we'll not be assigning values with the equal sign, instead, we will be _assigning new values by calling a function_:

```react
// 1. Register a state
const [value, setValue] = useState(initialValue)

// 2. Updating the state
setValue(updatingValue)
```

> **Note**: You will get two things from `useState`: the current state (`value`), and the function that lets you update it (`setValue`). You can give them any names, but the convention is to call them like `[something, setSomething]`.

If you have data which might change and where changes to that data should be reflected on the UI, then you need `useState` because a regular variables will not do the trick, ==with `useState` however you can **set** _and_ **change** values==, and ==when they do change, React will re-evaluate the component in which the `useState` was registered==.

> **Note**: Only the component where the `useState` was registered will be updated, not any other components.

==`useState` adds reactivity to our application. **Without** `useState` **our UI would never change**, but with `useState` and with listening to events, we can make sure that we can react to user input and that such input can result in a visible change on our screen==.

![049_updating_data_via_state](..\img\049_updating_data_via_state.jpg)

## Updating data via "State"

==**Re-evaluate** _or_ **re-render** the component is the same thing as **re-execute** the component function. When the state is changed, **NOT only the JSX markup is re-evaluated, the entire component function is re-evaluated (re-rendered or re-executed)** !!!==

_The state is changed when you use the **state updating function** provided by `useState` Hook_. By calling state updating function, you're telling React that you wanna assign a new value to the state, but also tells React that the component in which the state was registered with `useState` should be re-evaluated. And therefore React will go ahead and execute that component function again, and therefore also evaluate the JSX code again.

Now, in addition, whenever state changes because a some event happen, it's only that specific instance where the component is being used where React will re-evaluate it. Only that specific instance is being updated and therefore for being re-evaluated, and the other instances are not effected by that state change.

## A closer look at the `useState` hook

`useState` registers some state for the component function in which `useState` is being called, and I wanna be even more precise, _it registers it for a specific component instance_. For example, ==if you have a component function and you used four times, **every item (component) receives its own separate state, which is detached from the others components states**==.

_If you have one component function called `ExpenseItem`, but then you use that component function four times, when we create four `<ExpenseItem/>`, every time `ExpenseItem` is called, a new separate state is created for each component and managed independently for each other by React. So, if you change the state, for example in the first `<ExpenseItem/>`, the other ones are not affected because they have their own state_.

==That's really important: **it's one state per component instance basis**, so _we have separate states, even if we create a component more than once_. This behavior is crucial, because it would be a rather undesired behavior if we change something in one item and all the other items are updated as well==.

Now, in addition, ==whenever state changes because a some event happen, it's only that specific instance where the component is being used where React will re-evaluate it==. _Only that specific instance is being updated and therefore for being re-evaluated_, and the others instances are not effected by that state change, and this is important to keep in mind that _state is separated on a per component instance basis_.

==The initial value of a state is only considered when a component function is being _executed for the first time_==, for a given component instance. _If a component is re-executed because of state change, for example, React will not reinitialize the state with the initial value_. Instead, it will detect that the state had been initialized in the past, and it will just grab the latest state which is based on some state update, for example, and give us that state instead.

## State can be updated in many ways!

State can be updated in many ways! Thus far, we update our state _upon user events_ (e.g. upon a click). That's very common but not required for state updates! ==You can update states for whatever reason you may have==.

Later in the course, we'll see Http requests that complete (where we then want to update the state based on the Http response we got back), but you could also be updating state because a timer (set with `setTimeout()`) expired for example.

## Working with multiple states

You can call `useState()` more than once in a component function. You can have multiple states, multiple states slices or state pieces per component and ==all of the states inside of one at the same component will then all to be _totally separated_ from each other==.

Is absolutely okay to have multiple state per component, and you will see that quite a lot. ==You can have separate states and _update and manage them **separately**_==.

## Using one state instead (and what's better)

```react
// Case 1: Using multiple states
const [item1, setItem1] = useState('');
const [item2, setItem2] = useState('');
const [item3, setItem3] = useState('');

// Case 2: Using one state
onst [item, setItem] = useState({
    item1: '',
	item2: '',
	item3: '',
});
```

==The difference is when you updating object in the state nr. 2, you MUST UPDATING ALL OBJECT PROPERTIES, because **when you update your state React will not merge the new properties with properties in the old state, it will _simply replace the old state with the new one_**, and if your new one is a object with one key value pair, the old state will be replaced and therefore the other two key value pairs would be lost==. So if you go for one state approach and you manage such a object, it's all your responsibility to make sure that the other data does not get lost, and to do that you manually need to copy the other values which you're not updating in that place.

One way of doing this would be to use the spread operator and you copy in `item` constant and then you just override `item1`:

```react
setItem({
	...item,
	item1: 'value',
});
```

This would be an alternative to having the three individual state slices, like in case 1 above.

> **Note**: I tend to **prefer the individual state slices**, and I would say you also see that more often out there in the world, in other React projects, but ultimately both approaches are fine.

## Find the minimal but complete representation of UI state

To make the UI interactive, you need to let users change your underlying data model. You will use *state* for this.

Think of state as the minimal set of changing data that your app needs to remember. The most important principle for structuring state is to keep it DRY (Don’t Repeat Yourself). Figure out the absolute minimal representation of the state your application needs and compute everything else on-demand. For example, if you’re building a shopping list, you can store the items as an array in state. If you want to also display the number of items in the list, don’t store the number of items as another state value — instead, read the length of your array.

Which pieces of data are state? Identify the ones that are not:

- Does data **remain unchanged** over time? If so, it isn’t state.
- Is data **passed in from a parent** via props? If so, it isn’t state.
- **Can you compute data** based on existing state or props in your component? If so, it *definitely* isn’t state!

What’s left is probably state.

## Props vs State

There are two types of “model” data in React: props and state. The two are very different:

- [**Props** are like arguments you pass](https://beta.reactjs.org/learn/passing-props-to-a-component) to a function. They let a parent component pass data to a child component and customize its appearance. For example, a `Form` can pass a `color` prop to a `Button`.
- [**State** is like a component’s memory.](https://beta.reactjs.org/learn/state-a-components-memory) It lets a component keep track of some information and change it in response to interactions. For example, a `Button` might keep track of `isHovered` state.

Props and state are different, but they work together. A parent component will often keep some information in state (so that it can change it), and *pass it down* to child components as their props.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
1. [Thinking in React - beta.reactjs.org](https://beta.reactjs.org/learn/thinking-in-react#step-3-find-the-minimal-but-complete-representation-of-ui-state)