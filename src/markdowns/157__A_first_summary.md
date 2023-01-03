# A first summary

In React apps you work with components, typically with function components in modern React. ==Those components have one job in the end, and that is to render the JSX that they return to the screen==. This tells React what the output of that component should be.

In your React components you can work with state, props or context (though when we use props and context, all come down to state changes in the end) to make changes to a component and to make changes to the data that affects that component or that affects parts of your application.

Whenever you change state in a component, that component where the state changed is re-evaluated; this simply means that the component function is executed again, so all the code you have in that component runs again, and therefore you get a new JSX output. This might actually be exactly the same output as before component re-evaluation, but it could also look different. ==React simply takes **the result of the latest evaluation and compares it to the previous evaluation result**, and it does that for all affected components (children components). Then **it hands off any changes, any differences it identified, to ReactDOM**, because we are using ReactDOM to render our React app, and ReactDOM will take those changes and apply them to the real DOM in the browser, and really only those changes, nothing else==.

When React re-evaluates a component, it does not just re-evaluate only that component, but since it re-runs the entire function and therefore rebuilds all the JSX markup for the latest snapshot, it will also re-run all components that you have in that JSX markup, all the children components and their children's. To avoid unnecessary re-executions of child components, you can use `React.memo()` to only execute a child component function again if the props really changed, so if we got real new values in there. If we got no new values, React will don't re-execute that child component function.

Since re-evaluating a component means that the entire component function re-run again, that can have strange effects if you're not aware of the fact that this really means that everything in that function re-run again. Therefore, if you, for example, create functions in the component function and you pass those functions through props to your components, you will indeed get a new function object on every component re-evaluation, and even `React.memo()` will then not be able to help you because objects are reference values and comparing them with equal signs, which is what `React.memo()` does under the hood, will not work. For primitive values, you will therefore not have that problem.

That's where `useCallback` comes in and can help you, because with `useCallback`, you can tell React that it should store a function and not recreate it when the surrounding function runs again, as long as certain dependencies didn't change.

Now there are a couple of open questions though. For example, if the `App` function runs again, whenever the state changes, doesn't this mean that we all the time reinitialize our state, because we also execute `useState()` over and over again, then why is this not causing problems?

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)