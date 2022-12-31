# How React really works

So how does React work? Lets not forget that React is a JavaScript library for building user interfaces. We also learned that React is all about components. We use components to build those user interfaces, and React embraces this component concept. _React uses components to effectively **compose** user interfaces_ and _it uses components to effectively **update** user interfaces_. 

There's one important note. We also saw this ReactDOM thing and in the end ==ReactDOM is your interface to the web==. _React.js itself does not know the web, it does know nothing about the browser in the end. React.js knows how to work with components but it doesn't care whether those components contain HTML elements or if they contain totally fictional elements, that does not matter to React.js. It's ReactDOM to which that matters in the end and which ultimately needs to bring real HTML elements to the screen._

React.js is just a library that manages components, that manages state and that manages different components states, and that finds out how components might need to change and which differences you might have from a previous state of a component compared to the current state. React.js hands all that information regarding what changed and what should be visible on the screen, off to the interface it's working with, no matter what screen that is, for example it hands it off to ReactDOM, because ReactDOM is then responsible for working with the real DOM, which is part of the browser. And therefore ==ReactDOM is responsible for bringing something onto the screen, which the user is then able to see==.

React.js only cares about:

- **components**;
- **`props`**, which is basically data you pass to components to make components configurable and to enable parent-child component communication;
- **state**, which is internal data inside of a component;
- **context**, which is component-wide data.

==Whenever `props`, state or context changes, components that use these concepts are updated by React, and React checks whether that component now wants to draw something new onto the screen, and if that should be the case, React will let ReactDOM know about that, so that ReactDOM is able to bring that new screen, that new component, that new output to the screen==.

![152_How_React_really_works](..\img\152_How_React_really_works.jpg)

If we have a closer look at that components real DOM communication, the question of course is, how exactly does this work? As I mentioned, ==React is concerned about components and what React in the end does is, it uses a concept called the **virtual DOM**. It determines how the component tree, which your app is building in the end (and every component itself, of course, has a subtree), how the component tree currently looks like and what it should look like, for example, after a state update. And that information is then handed off to ReactDOM, which now knows about the differences and which then knows how it should manipulate the real DOM to match that virtual DOM, that virtual snapshot React derived for your component trees==.

![152_How_React_really_works1](..\img\152_How_React_really_works1.jpg)

Related to that concept of virtual DOM, there's one important thing to note. Throughout this course I often said that React would re-run a component function, that it would re-evaluate a component. And indeed, as I mentioned before, ==whenever state, `props` or a context of a component changes, that component function is re-executed, that component is re-evaluated by React. But it is worth noting that **re-evaluating a component is not the same as re-rendering the DOM**. So just because a component function is re-executed by React does not mean that the respective part of the actual real DOM is re-rendered or re-evaluated. Instead we have to differentiate between our component part (our React part) and the real DOM==.

==Our components, as I just said, are re-evaluated whenever `props`, state or context changes, so React then executes that component function again. Now the real DOM on the other hand is only updated in the places where it needs to be changed based on that difference React derived between the previous state of a component and its tree and the current state after the state, `props` or context change. So the real DOM is not changed all the time, it's changed rarely and only when needed==. That's important for performance, because making a virtual comparison between the previous state and the current state, that's fairly cheap and easy to do, that happens only in memory. Reaching out to the real DOM that's rendered in the browser is pretty expensive from a performance perspective, because working with the real DOM just turns out to be a performance intensive task. That's why React has this structure of doing virtual comparisons with that virtual DOM and then only passing the changes between your last snapshot and the current snapshot to the real DOM. That's how React works, it does this virtual DOM diffing, finding out the difference between two snapshots.

![152_How_React_really_works2](..\img\152_How_React_really_works2.jpg)

To see a real example, it could look like this image below.

![152_How_React_really_works3](..\img\152_How_React_really_works3.jpg)

For the start we have the Previous Evaluation Result above, so when the component function run for the first time the result is Previous Evaluation Result above. Now some state changes and all of a sudden we wanna show a new `<p>This is new!</p>`, so that's our Current Evaluation Result. In this case, React would determine that the difference between both snapshots is this `<p>This is new!</p>`, and it would report this change to ReactDOM so that ReactDOM can update the real DOM and insert this `<p>This is new!</p>`. ReactDOM would not re-render the entire DOM, it would not touch this existing `<h1>` or `<div>` element. It would only insert the `<p>This is new!</p>` after the `<h1>` element, inside of the `<div>`.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)