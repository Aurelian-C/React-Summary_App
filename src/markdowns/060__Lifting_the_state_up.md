# Lifting the state up

We learned about a very important concept of ==_moving data_ from a child to a parent component by utilizing props to **receive a function from the parent component, which we call in the child component**==. This concept is called ==**Lifting State Up**==.

![060_lifting_the_state_up](..\img\060_lifting_the_state_up.jpg)

Now, what is Lifting State Up about? Consider this basic Component Tree which is roughly what we have in this demo app, where we have an `<App/>` component which in turn renders and `<Expenses/>` and a `<NewExpense/>` component. Now, in this case, the `<NewExpense/>` component is a component which generates some data, some state.

Now it is ==quite common that you do generate or fetch data in a component, but that you might not need that data in that component==. Instead, we need that data in another component, in the `<Expenses/>` component. That's where this generated data is needed in the end, slightly transformed, packed into an object, but it is the data we fetch in `<NewExpense/>` component. So naturally we would like to hand that data over but that doesn't work like this, because we have ==no direct connection between two sibling components==. Instead, we ==can only communicate from parent to child and from child to parent==.

That's why in such cases like we have it here, we ==utilize the closest component, the **closest parent component** which has direct or indirect access to both involved components==, in this case, the `<App/>` component.

The `<App/>` component in our application has access to both the `<NewExpense/>` and the `<Expenses/>` component, because it renders both components in its returned JSX code, that's why we wanna utilize that, because we can now ==store our state in that closest involved component, so in that parent component which has access to both involved components, by lifting our state up==.

We are passing data up to some parent component, because we either need that data directly in the `<App/>` component, or as it's the case in our demo app, and as it is quite common, because we then wanna pass that data down to another component via props. You will hear the term ==**Lifting The State Up**== quite a bit when you were working with React and whenever you hear that, it is about ==moving data from a child component to some parent component, to either use it there or to then pass it down to some other child component==.

Now, it's not always that root `<App/>` component to which you wanna lift your state up. Instead, ==the goal is to lift it up just as high as necessary in your Component Tree, _until you have a component which has both access to the component that generate data, as well as the component that need that data_==. That might be the `<App/>` component, but that could also be another component.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
