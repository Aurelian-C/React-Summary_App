# Working with state

==Components often need to change what’s on the screen as a result of an interaction==. Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” should put a product in the shopping cart. ==Components need to “remember” things==: the current input value, the current image, the shopping cart. ==In React, this kind of component-specific memory is called **state**==.

==To make the UI interactive, you need to let users change your underlying data model. You will use state for this==.

## When a _regular variable_ isn’t enough

If you have a variable in your component function and that variable changes, React ignores it. It doesn't care about that, that code executes, sure, but ==the overall component function **doesn't execute again just because some regular variable changed**==. We need a way of telling React that something changed and that a certain component should be re-evaluated, and that's where React introduces a special concept called "state". To tell React that it should run a component function again, we need to import something from the React library.

If an event handler update a local variable that is in your custom component, React prevent that change from being visible on the screen because:

1. ==Local variables don’t persist between renders==. When React renders a component a second time, it renders it from scratch — it doesn’t consider any changes to the local variables;
2. ==Changes to local variables won’t trigger renders==. React doesn’t realize it needs to render the component again with the new data.

==To update a component with new data, two things need to happen:==

1. ==**Retain** the data between renders;==
2. ==**Trigger** React to render the component with new data (re-rendering).==

==The [`useState`](https://beta.reactjs.org/reference/react/useState) Hook provides those two things:==

1. ==A **state variable** to retain the data between renders;==
2. ==A **state setter function** to update the variable and trigger React to render the component again.==

> **Note**: If you have data which might change and where changes to that data should be reflected on the UI, then you need `useState` because a regular variables will not do the trick. _With `useState` however you can **set** and **change** values, and when they do change, React will re-execute the component in which the `useState` was registered and re-evaluate the JSX code_.
>
> Only the component where the `useState` was registered will be updated, not any other components.

## Updating data via state: adding a _state variable_

To add a state variable, import `useState` from React at the top of the file:

> **Note**: With `import React from 'react'` we import _the overall React object_. Now, with `import {useState} from 'react'` we want to import _a single pieces from the React library_.

```react
import React, {useState} from 'react';

// 1. Register a state
const [something, setSomething] = useState(initialValue)

// 2. Updating the state
setSomething(updatingValue)
```

> **Note**: The convention is to name this pair like `const [something, setSomething]`. You could name it anything you like, but conventions make things easier to understand across projects.

The `useState` that we import is a _function provided by the React_ library and ==this function allows us to **define values as state**, where changes to these values should reflect in the component function being called again, which is a key difference to a value stored in a regular variable==.

The `useState` always return an array that has exactly two items:

1. ==A **state variable** to retain the data between renders==. _With `useState` we basically create a special kind of variable, you could say, a variable where changes will lead a component function to be called again_;
2. ==A **state setter function** to update the variable and trigger React to render the component again==. We can call the state setter function to assign a new value to a state variable, so we'll not be assigning values with the equal sign, instead, we will be _assigning new values by calling a function_.

![049_updating_data_via_state](..\img\049_updating_data_via_state.jpg)

In React, `useState`, as well as any other function starting with ”`use`”, is called a Hook. All Hooks—functions starting with `use` — _can only be called at the top level of your components or [your own custom Hooks](https://beta.reactjs.org/learn/reusing-logic-with-custom-hooks)_.

> **Note**: You can’t call Hooks inside conditions, loops, or other nested functions.

### The state setter function

_The state variable is changed when you use the **state setter function** provided by `useState` Hook_. By calling state setter function, you're telling React that you wanna assign a new value to the state variable, but also tells React that the component in which the state variable was registered with `useState` should be re-executed.

Now, in addition, whenever state variable changes because a some event happen, it's only that specific instance where the component is being used where React will re-executed it. Only that specific instance is being re-executed and updated, and the other instances are not effected by that state change.

## State: a component's memory

When you call `useState`, you are telling React that you want that the component how is calling it to remember something. ==The only argument to `useState` is the **initial value** of your state variable==.

> **Note**: ==The initial value of a state is only considered when a component function is being _executed for the first time_==, for a given component instance. _If a component is re-executed because of state variable change, for example, React will not reinitialize the state variable with the initial value_. Instead, it will detect that the state variable had been initialized in the past, and it will just grab the latest state which is based on some state update, for example, and give us that state instead.

### How `useState` works behind the scenes

Every time your component renders, `useState` gives you an array containing two values:

1. The **state variable** with the value you stored.
2. The **state setter function** which can update the state variable and trigger React to render the component again.

Here’s how that happens in action:

```react
const [index, setIndex] = useState(0);
```

1. **Your component renders the first time.** Because you passed `0` to `useState` as the initial value for `index`, it will return `[0, setIndex]`. React remembers `0` is the latest state value.
2. **You update the state.** When a user clicks the button, it calls `setIndex(index + 1)`. `index` is `0`, so it’s `setIndex(1)`. This tells React to remember `index` is `1` now and triggers another render.
3. **Your component’s second render.** React still sees `useState(0)`, but because React *remembers* that you set `index` to `1`, it returns `[1, setIndex]` instead.
4. And so on!

## Giving a component multiple state variables 

You can have as many state variables of as many types as you like in one component, so you can call `useState()` more than once in a component function. You can have multiple states, multiple states slices or state pieces per component and ==all of the states inside of the same component will be _totally separated_ from each other. You can have separate states and _update and manage them **separately**_==.

Is absolutely okay to have multiple state per component, and you will see that quite a lot. It is a good idea to have multiple state variables if their state is unrelated, but if you find that you often change two state variables together, it might be better to combine them into a single one.

## State is isolated and private

==State is local to a component instance on the screen. In other words, **if you render the same component twice, each copy will have completely isolated state!** Changing one of them will not affect the other. Unlike props, **state is fully private to the component declaring it.**== The parent component can’t change it. This lets you add state to any component or remove it without impacting the rest of the components.

> **Note**: You want that two or more child components to keep their states in sync? The right way to do it in React is to *remove* state from child components and add it to their closest shared parent.

`useState` registers some state for the component function in which `useState` is being called, and I wanna be even more precise, _it registers it for a specific component instance_. For example, if you have a component function and you used four times, _every item (component) receives its own separate state, which is detached from the others components states_.

==That's really important: **it's one state per component instance basis**, so _we have separate states, even if we use a component more than once_==. This behavior is crucial, because it would be a rather undesired behavior if we change something in one item and all the other items are updated as well.

Now, in addition, ==whenever state changes because a some event happen, it's only that specific instance where the component is being used where React will re-execute it==. _Only that specific instance is being re-executed_, and the others instances are not effected by that state change, and this is important to keep in mind that _state is separated on a per component instance basis_.

## Props vs State

==There are two types of “model” data in React: props and state. The two are very different:==

- ==[**Props** are like arguments you pass](https://beta.reactjs.org/learn/passing-props-to-a-component) to a function. They let a parent component **pass data to a child component and customize its appearance**==. For example, a `Form` can pass a `color` prop to a `Button`.
- ==[**State** is like a component’s memory](https://beta.reactjs.org/learn/state-a-components-memory). It lets a component **keep track of some information and change it in response to interactions**==. For example, a `Button` might keep track of `isHovered` state.

==Props and state are different, but they work together. A parent component will often keep some information in state (so that it can change it), and *pass it down* to child components as their props==.

## Summary

==`useState` adds reactivity to our application. **Without** `useState` **our UI would never change**, but with `useState` and with listening to events, we can make sure that we can react to user actions/events and that  user actions/events can result in a visible change on our screen==.

- Use a state variable when a component needs to “remember” some information between renders.
- State variables are declared by calling the `useState` Hook.
- The `useState` Hook returns a pair of values: the current state and the function to update it.
- You can have more than one state variable. Internally, React matches them up by their order.
- State is private to the component. If you render it in two places, each copy gets its own state.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
2. [State: A Component's Memory - beta.reactjs.org](https://beta.reactjs.org/learn/state-a-components-memory)