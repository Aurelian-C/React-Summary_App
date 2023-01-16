# Using the `useReducer()` hook

Components with many state updates spread across many event handlers can get overwhelming. For these cases, you can consolidate all the state update logic outside your component in a single function, called a _reducer._ ==Reducers are a different way to handle state==. You can migrate from `useState` to `useReducer` in three steps:

1. Move from _setting state_ to _dispatching actions_.
2. Write a _reducer function_.
3. Use the reducer from your component.

Managing state with reducers is slightly different from directly setting state. Instead of telling React “what to do” by setting state, you specify “what the user just did” by dispatching “actions” from your event handlers.

The object you pass to `dispatch` is called an “action”:

```react
dispatch({
    // "action" object:
    type: 'USER_INPUT',
    value: e.target.value
})
```

> **Note**: The "action" is a regular JavaScript object. You decide what to put in it, but generally it should contain the minimal information about _what happened_.

A reducer function is where you will put your state logic. It takes two arguments, the current state and the action object, and it returns the next state:

```react
function yourReducer(state, action) {
  // return next state for React to set
}
```

React will set the state to what you return from the reducer.

> #### Why are reducers called this way?
>
> Although reducers can “reduce” the amount of code inside your component, they are actually named after the [`reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) operation that you can perform on arrays.

The `useReducer` Hook takes two arguments:

1. A reducer function
2. An initial state

And it returns:

1. A stateful value
2. A dispatch function (to “dispatch” user actions to the reducer)

Component logic can be easier to read when you separate concerns like this. Now the event handlers only specify _what happened_ by dispatching actions, and the reducer function determines _how the state updates_ in response to them.

## Writing reducers well

Keep these two tips in mind when writing reducers:

- **Reducers must be pure**, so they shouldn’t mutate state. Similar to [state updater functions](https://beta.reactjs.org/learn/queueing-a-series-of-state-updates), reducers run during rendering! (Actions are queued until the next render.) This means that reducers [must be pure](https://beta.reactjs.org/learn/keeping-components-pure)—same inputs always result in the same output. They should not send requests, schedule timeouts, or perform any side effects (operations that impact things outside the component). They should update [objects](https://beta.reactjs.org/learn/updating-objects-in-state) and [arrays](https://beta.reactjs.org/learn/updating-arrays-in-state) without mutations.
- **Each action describes a single user interaction, even if that leads to multiple changes in the data.** For example, if a user presses “Reset” on a form with five fields managed by a reducer, it makes more sense to dispatch one `reset_form` action rather than five separate `set_field` actions. If you log every action in a reducer, that log should be clear enough for you to reconstruct what interactions or responses happened in what order. This helps with debugging!

`useReducer()`, just like `useState()`, always ==returns an array with exactly two values==. Therefore, you can use array destructuring as we did it with `useState()` to pull out these values and store them in separate variables.

Now, the two values you are getting are the ==latest **state** snapshot==, because it is a state management mechanism like `useState()`, but you also get ==a **function** that allows you to update that state snapshot==. So that's kind of the same as for `useState()`, though the _state updating function (`dispatchFn`)_ will work differently. Instead of just setting a new state value like you do with `useState()`, with `useReducer()` state updating function (`dispatchFn`) you will ==dispatch an action==, and that action will be consumed by the first argument you pass to `useReducer()`, a so-called reducer function (`reducerFn`).

So `reducerFn` is a function that takes two parameters (`prevState` & `action`). `prevState` parameter gets the latest state snapshot automatically, because ==`reducerFn` will be called by React==, and `action` parameter gets the action that was dispatched, because ==React will call `reducerFn` whenever a new action is dispatched==. So then it gets the last state snapshot managed by React and that gets the action that was dispatched, that triggered the reducer function execution.

==Now `reducerFn` then also should do one important thing, it should **return a new updated state**==. So `reducerFn` is a bit like the state updating function of the `useState()` hook, but an extended version of that, you could say, because of that action thing.

> **IMPORTANT!** Don't forget to return a new updated state. The reducer function (`reducerFn`) should do one important thing, it should return a new updated state.

In addition, you can also set some **initial state** and also an **initial function** that should run to set the initial state in case your initial state is a bit more complex, for example, the result of let's say HTTP requests or anything like that.

![Using_useReducer](..\img\Using_useReducer.jpg)

## The reducer function (`reducerFn`)

You ==add/write your `reducerFn` function _outside of the component function_==, because this `reducerFn` won't need anything from the component, it won't need any surrounding data to find in the component.

==The `reducerFn` shouldn't be write inside in your component because whenever the state changes and the component is re-evaluated, the `reducerFn` will be recreated on every component re-evaluation==, so why we write our `reducerFn` outside of the component function.

> **Note**: Only the `reducerFn` is write outside of your component function, not the `useReducer()` hook. The `useReducer()` is always used inside of your component function.

The `reducerFn` can be created outside of the scope of a component function because it doesn't need to interact with anything defined inside of the component function. All the data which will be required and used inside of `reducerFn` will be passed into the `reducerFn` when it's executed by React, automatically. So that's why we can define the `reducerFn` outside of the component function.

> **IMPORTANT!** Don't forget to return a new updated state. The reducer function (`reducerFn`) should do one important thing, it should return a new updated state.

## The dispatch action `dispatchFn`

It's totally up to you what this **dispatch action** is. It can be a ==string==, it could be a ==number==, but often will be an ==**object** which has some _field that holds some identifier_== (often the field is then named `type`), and then we also can add an extra payload to the action.

==Identifier allows you to _identify the dispatch action inside of your reducer function_, so that in the reducer function you can run different pieces of code depending on which _action type_ was dispatched==.

Below is an example with an action for `dispatchFn`. The `dispatchFn` has an action that is an object with a `type` field that describes what happened, and extra payload with `value` field that hold the value the user entered:

```react
dispatchFn({
    type: 'USER_INPUT', // is a convention to be all caps
    value: e.target.value
})
```

> **Note**: String that you pass as a value for the `type` key it doesn't have to be all caps. That's just a convention you see a lot. The string need to be a clearly understandable identifier.

## Examples

```react
import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
      // do something
      return // the new state
  }

  if (action.type === 'REMOVE') {
    // do something
    return // the new state
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item});
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
```

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
1. [Extracting State Logic into a Reducer - beta.reactjs.org](https://beta.reactjs.org/learn/extracting-state-logic-into-a-reducer)
