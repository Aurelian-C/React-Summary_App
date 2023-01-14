# "Lifting The Data/State Up" to share data/state between components

In this lecture we gonna learn a concept called ==**Lifting The Data/State Up**==. This concept is about ==moving _data/state_ from a child component to a parent component==.

## Lifting the _data_ up

==You "lift the data up" by utilizing props in the child component to **receive a function from its parent component**==, and when you will call this prop function in your child component, you will pass as a argument the data that you wanna lift up to the parent component.

![060_lifting_the_state_up](..\img\060_lifting_the_state_up.jpg)

Consider this basic Component Tree which is roughly what we have in this demo app, where we have an `<App/>` component which in turn renders and `<Expenses/>` and a `<NewExpense/>` component. Now, in this case, the `<NewExpense/>` component is a component which generates some data.

```react
const App = () => {
    const expenses = [];
    const liftDataUp = (newExpense) => {
        return expenses.push(newExpense)
    }
    
    return (
      <>
        <Expenses expenses={expenses}/> //data in needed here
        <NewExpense onLiftNewExpense={liftDataUp}/> //data in generated here
      </>
    )
}

const newExpense = (props) => {
    const inputRef = useRef();	
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const expenseName = inputRef.current.value //data is generated here, but we need that data on <Expenses/> component
        props.onLiftNewExpense(expenseName) //with this prop function you lift the data that is generated in this component to its parent component
    }
    
    return <form onSubmit={handleSubmit}>
    	<input type='text' ref={inputRef}/>
        <button type='submit'>Add New Expense</button>
    </form>
}
```

Now it is ==quite common that you do generate or fetch data in a component, but that you might not need that data in that component==. Instead, we need that data in another component, in the `<Expenses/>` component. So naturally we would like to hand that data over but that doesn't work like this, because we have ==**no direct connection between two sibling components**==. Instead, we ==**can only communicate from parent to child and from child to parent**==. That's why in such cases like we have it here, we ==utilize the **closest parent component** which has direct or indirect access to both involved components==, in our case, the `<App/>` component.

The `<App/>` component in our application has access to both `<NewExpense/>` and `<Expenses/>` components, because it renders both components in its returned JSX markup. We can ==store our data in the closest parent component which has access to both involved components, by lifting our data up==.

We are passing data up to some parent component, because we either need that data directly in the `<App/>` component, or as it's the case in our demo app, and as it is quite common, because we then wanna pass that data down to another component via props. You will hear the term ==**Lifting The Data Up**== quite a bit when you were working with React and whenever you hear that, it is about ==moving data from a child component to some parent component, to either use it there or to then pass it down to some other child component==.

Now, it's not always that root `<App/>` component to which you wanna lift your data up. Instead, ==the goal is to lift data just as high as necessary in your Component Tree, _until you have a component which has both access to the component that generate data, as well as the component that need that data_==. That might be the `<App/>` component, but that could also be another component.

## Lifting the _state_ up

==Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props==. This is known as _lifting state up_, and it’s one of the most common things you will do writing React code.

For more information, visit [Sharing State Between Components - beta.reactjs.org](https://beta.reactjs.org/learn/sharing-state-between-components)

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
