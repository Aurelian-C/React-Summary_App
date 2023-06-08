# Thinking in React

React can change how you think about the designs you look at and the apps you build. ==When you build a UI with React, you will first break it apart into pieces called **components**==. Then, you will ==describe the different **visual states** for each of your components==. Finally, you will ==connect your components together so that the data flows through them==.

## Start with the mockup

Imagine that you already have a JSON API and a mockup from a designer. To implement a UI in React, you will usually follow the same five steps:

1. Break the UI into a component hierarchy
2. Build a static version in React
3. Find the minimal but complete representation of UI state
4. Identify where your state should live
5. Add inverse data flow 

## Step 1: Break the UI into a component hierarchy

Start by drawing boxes around every component and subcomponent in the mockup and naming them. If you work with a designer, they may have already named these components in their design tool. Check in with them!

==Depending on your background, you can think about splitting up a design into components in different ways==:

- ==**Programming** — use the same techniques for deciding if you should create a new function or object. One such technique is the single responsibility principle, that is, a component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents==.
- **CSS** — consider what you would make class selectors for. (However, components are a bit less granular.)
- **Design** — consider how you would organize the design's layers.

==If your JSON is well-structured, you'll often find that it naturally maps to the component structure of your UI. That's because UI and data models often have the same information architecture== — that is, the same shape. Separate your UI into components, where ==each component matches one piece of your data model==.

When you finish to identify the components in the mockup, arrange them into a hierarchy. Components that appear within another component in the mockup should appear as a child in the hierarchy.

## Step 2: Build a static version in React

Now that you have your component hierarchy, it's time to implement your app. The most straightforward approach is to build a version that renders the UI from your data model without adding any interactivity… yet! ==It's often easier to build the static version first and then add interactivity separately==. Building a static version requires a lot of typing and no thinking, but adding interactivity requires a lot of thinking and not a lot of typing.

==To build a static version of your app that renders your data model, you’ll want to build components that reuse other components and pass data using props.==

> **Note**: Props are a way of passing data from parent to child. (If you’re familiar with the concept of [state](https://beta.reactjs.org/learn/state-a-components-memory), don’t use state at all to build this static version. State is reserved only for interactivity, that is, data that changes over time. Since this is a static version of the app, you don’t need it.)

You can either build “top down” by starting with building the components higher up in the hierarchy or “bottom up” by working from components lower down. In simpler examples, it’s usually easier to go top-down, and on larger projects, it’s easier to go bottom-up.

After building your components, you’ll have a library of reusable components that render your data model. Because this is a static app, the components will only return JSX. The component at the top of the hierarchy will take your data model as a prop. This is called *one-way data flow* because the data flows down from the top-level component to the ones at the bottom of the tree.

## Step 3: Find the minimal but complete representation of UI state

==To make the UI interactive, you need to let users change your underlying data model. You will use *state* for this.==

==Think of state as the **minimal set of changing data that your app needs to remember**==. The most important principle for structuring state is to keep it DRY (Don’t Repeat Yourself). ==Figure out the absolute minimal representation of the state your application needs and _compute everything else on-demand_==. For example, if you’re building a shopping list, you can store the items as an array in state. If you want to also display the number of items in the list, don’t store the number of items as another state value — instead, read the length of your array.

Which of the data that your application has are state? Identify the ones that are not:

- Does it **remain unchanged** over time? If so, it isn’t state.
- Is it **passed in from a parent** via props? If so, it isn’t state.
- **Can you compute it** based on existing state or props in your component? If so, it *definitely* isn’t state!

What’s left is probably state.

> **Note**: There are two types of “model” data in React: props and state. The two are very different:
>
> - ==Props are **like arguments you pass to a function**==. They let a parent component pass data to a child component and customize its appearance. For example, a `Form` can pass a `color` prop to a `Button`.
> - ==State is like a **component’s memory**==. It lets a component keep track of some information and change it in response to interactions. For example, a `Button` might keep track of `isHovered` state.
>
> Props and state are different, but they work together. A parent component will often keep some information in state (so that it can change it), and *pass it down* to child components as their props. It’s okay if the difference still feels fuzzy on the first read. It takes a bit of practice for it to really stick!

## Step 4: Identify where your state should live 

==After identifying your app’s minimal state data, you need to identify which component is responsible for changing this state, or *owns* the state==.

> **Remember**: React uses one-way data flow, passing data down the component hierarchy from parent to child component. It may not be immediately clear which component should own what state. This can be challenging if you’re new to this concept, but you can figure it out by following these steps!

For each piece of state in your application:

1. Identify *every* component that renders something based on that state.
2. Find their closest common parent component — a component above them all in the hierarchy.
3. Decide where the state should live:
   1. Often, you can put the state directly into their common parent.
   2. You can also put the state into some component above their common parent.
   3. If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common parent component.

## Step 5: Add inverse data flow 

Currently your app renders correctly with props and state flowing down the hierarchy. But to change the state according to user interaction, you will need to support data flowing the other way: the components deep in the hierarchy need to update the state in their parent components. For that, you need to ==pass the state updating functions from parent components down to the child components, so child components can change the parent's state==.

## References

1. [Thinking in React - beta.react.org](https://beta.reactjs.org/learn/thinking-in-react)