# Using the `useReducer()` hook

`useReducer()`, just like `useState()`, always ==returns an array with exactly two values==. Therefore, you can use array destructuring as we did it with `useState()` to pull out these values and store them in separate variables.

Now, the two values you are getting are the ==latest **state** snapshot==, because it is a state management mechanism like `useState()`, but you also get ==a **function** that allows you to update that state snapshot==. So that's kind of the same as for `useState()`, though the _state updating function (`dispatchFn`)_ will work differently. Instead of just setting a new state value like you do with `useState()`, with `useReducer()` state updating function (`dispatchFn`) you will ==dispatch an action==, and that action will be consumed by the first argument you pass to `useReducer()`, a so-called reducer function (`reducerFn`).

So `reducerFn` is a function that takes two parameters (`prevState` & `action`). `prevState` parameter gets the latest state snapshot automatically, because ==`reducerFn` will be called by React==, and `action` parameter gets the action that was dispatched, because ==React will call `reducerFn` whenever a new action is dispatched==. So then it gets the last state snapshot managed by React and that gets the action that was dispatched, that triggered the reducer function execution.

==Now `reducerFn` then also should do one important thing, it should **return a new updated state**==. So `reducerFn` is a bit like the state updating function of the `useState()` hook, but an extended version of that, you could say, because of that action thing.

> **IMPORTANT!** Don't forget to return a new updated state. The reducer function (`reducerFn`) should do one important thing, it should return a new updated state.

In addition, you can also set some **initial state** and also an **initial function** that should run to set the initial state in case your initial state is a bit more complex, for example, the result of let's say HTTP requests or anything like that.

![117_Using_useReducer](..\img\117_Using_useReducer.jpg)

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