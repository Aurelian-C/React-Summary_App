# Redux vs React Context

==Redux is a state management system for a cross-component or app-wide state. So it helps us manage state, data that changes and affects our application and what we display on the screen. It helps us manage such data across multiple components or even the complete app.==

We can split the definition of state into three main kinds of state:

- ==local state== is state that belongs to a single component. Typically we manage such local state inside of a component with `useState` or if it's more complex maybe with `useReducer`.
- ==cross-component state== is state that affects not just one component but multiple components. We can also implement cross-component state with `useState` or `useReducer`. We just need to pass props around so we need to build those "prop chains" or do "prop drilling" as it's also called, where we pass props across multiple components, where we also might pass functions as props across multiple components, so that these different components can work together and manage state together. That's not bad or anything like that, it's just a little bit more complex than local state.
- ==app-wide state== is state that does not just affect multiple components but basically all components of an application. We can also manage app-wide state with the `useState` or `useReducer` and then passing state values and updating functions around through props.

Now for cross-component and app-wide state passing around data and updating function through props can become cumbersome though. To solve this problem React Context come into play. React Context is a built in feature in React that makes managing cross-component or application wide state easier. So that's one way of simplifying cross-component and app-wide state management. Redux solves the same problem. So both React Context and Redux are there to help us manage such cross-component or app-wide states. That of course brings up an important question: why do we need Redux if we already have React Context for managing state that affects multiple components?

## React Context disadvantages

==React Context has a couple of potential disadvantages, and I say potential because they might not matter in the app you're building. And if they don't matter, you don't need Redux.== Just as a side note, because it's all is important, it's also not an either or decision. You can also use both Contexts and Redux in the same application.

### Complex setup / management

One potential disadvantage is that with React Context, you can have a very complex setup and managing state that can become quite complex, and that definitely depends on the kind of application you're building. For a lot of small or medium-sized applications that will very likely not be a problem. But if you're building a large application, an enterprise level application with a lot of components and a lot of things going on, then when using React Context you can end up with code like below where you have a lot of different pieces of Context, a lot of different states that affect multiple components or the entire app, and therefore a lot of different Context Provider components which you built for managing these states:

```react
<AuthContextProvider>
    <ThemeContextProvider>
        <UIInteractionContextProvider>
            <MultiStepFormContextProvider>
                <UserRegistration/>
            </MultiStepFormContextProvider>
        </UIInteractionContextProvider>
    </ThemeContextProvider>
</AuthContextProvider>
```

Of course you don't need to build a lot of different Context Providers though, you could just use one big Context and one Context Provider component for a managing the entire state and all the different kinds of state of your application. But that could lead in a large Context Provider component which manages a lot of different things, and therefore itself becomes quite difficult to maintain and manage because it's doing a lot of things.

### Performance

Another potential disadvantage could be performance. Context was build for low-frequency updates like changing a theme, or maybe also authentication, but it's not optimized for high-frequency state changes. So React Context is not really a great replacement for Redux in all scenarios, in all cases.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)