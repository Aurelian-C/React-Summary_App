# "Lifting The State Up" to share data between components

Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as *lifting state up,* and it’s one of the most common things you will do writing React code.

>You will learn:
>
>- How to share state between components by lifting it up
>- What are controlled and uncontrolled components

We learned about a very important concept of ==_moving data_ from a child to a parent component by utilizing props to **receive a function from the parent component, which we call in the child component**==. This concept is called ==**Lifting State Up**==.

![060_lifting_the_state_up](..\img\060_lifting_the_state_up.jpg)

Now, what is Lifting State Up about? Consider this basic Component Tree which is roughly what we have in this demo app, where we have an `<App/>` component which in turn renders and `<Expenses/>` and a `<NewExpense/>` component. Now, in this case, the `<NewExpense/>` component is a component which generates some data, some state.

Now it is ==quite common that you do generate or fetch data in a component, but that you might not need that data in that component==. Instead, we need that data in another component, in the `<Expenses/>` component. That's where this generated data is needed in the end, slightly transformed, packed into an object, but it is the data we fetch in `<NewExpense/>` component. So naturally we would like to hand that data over but that doesn't work like this, because we have ==no direct connection between two sibling components==. Instead, we ==can only communicate from parent to child and from child to parent==.

That's why in such cases like we have it here, we ==utilize the **closest parent component** which has direct or indirect access to both involved components==, in this case, the `<App/>` component.

The `<App/>` component in our application has access to both the `<NewExpense/>` and the `<Expenses/>` component, because it renders both components in its returned JSX markup, that's why we wanna utilize that, because we can now ==store our state in that closest involved component, so in that parent component which has access to both involved components, by lifting our state up==.

We are passing data up to some parent component, because we either need that data directly in the `<App/>` component, or as it's the case in our demo app, and as it is quite common, because we then wanna pass that data down to another component via props. You will hear the term ==**Lifting The State Up**== quite a bit when you were working with React and whenever you hear that, it is about ==moving data from a child component to some parent component, to either use it there or to then pass it down to some other child component==.

Now, it's not always that root `<App/>` component to which you wanna lift your state up. Instead, ==the goal is to lift it up just as high as necessary in your Component Tree, _until you have a component which has both access to the component that generate data, as well as the component that need that data_==. That might be the `<App/>` component, but that could also be another component.

## A single source of truth for each state 

==In a React application, many components will have their own state==. Some state may "live" close to the leaf components (components at the bottom of the tree) like inputs. Other state may "live" closer to the top of the app.

==For each unique piece of state, you will choose the component that "owns" it. This principle is also known as having a **[“single source of truth”.](https://en.wikipedia.org/wiki/Single_source_of_truth)** It doesn’t mean that all state lives in one place — but that for *each* piece of state, there is a *specific* component that holds that piece of information. Instead of duplicating shared state between components, you will *lift it up* to their common shared parent, and *pass it down* to the children that need it==.

Your app will change as you work on it. It is common that you will move state down or back up while you’re still figuring out where each piece of the state "lives". This is all part of the process!

## Summary

- When you want to coordinate two components, move their state to their common parent.
- Then pass the information down through props from their common parent.
- Finally, pass the event handlers down so that the children can change the parent’s state.
- It’s useful to consider components as “controlled” (driven by props) or “uncontrolled” (driven by state).

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
1. [Sharing State Between Components - beta.reactjs.org](https://beta.reactjs.org/learn/sharing-state-between-components)
