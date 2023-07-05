# Introduction to Redux Toolkit

==Redux Toolkit is available as a package on NPM for use with a module bundler: `npm install react-redux @reduxjs/toolkit`.== When you install Redux Toolkit you thereafter can also uninstall/erase Redux library itself from your `package.json` file because that is already included in Redux Toolkit.

## Reducer Functions in Redux Toolkit: Adding state slices with `createSlice` function

Redux Toolkit simplifies a couple of aspects of working with Redux. Let's start with the reducer function and indirectly with the actions.

At the top of the `.js` file that stores the Redux logic,  we can import the ==`createSlice` function from '@reduxjs/toolkit'==. There  is also a `createReducer` function which would also allow us to create a reducer function with certain enhancements, but `createSlice` is even more powerful than `createReducer`, and it will simplify a couple of aspects in one go.

==`createSlice` **returns a _slice of our global state_**. Each slice manage individual parts of the React store state,== in our case the slice which is responsible for working with our counter state. Now, what we do with `createSlice` is we are preparing **a slice of our global state**, and ==when we have different pieces of state which are not directly related, we could create multiple different slices==, potentially also in different files to make our code maintainable.

==`createSlice` want a JavaScript **object** as an argument.==

The object you pass to `createSlice` needs:

- ==a **`name` property** that will identify that piece of state==. The value you pass to `name` can be any name you want.
- ==an **`initialState` property**.==
- ==**a `reducers` property**==. `reducers` property will have as a value an object that map to all the **reducer methods** the created slice needs. Now ==in the `reducers` object, you can add methods with any names of your choice==, though those names will become important later. ==Every method will automatically receive as arguments the latest state and the action that was dispatched. These methods will be called automatically for you by Redux depending on which action was triggered.== With Redux Toolkit we don't need to write our own `if` checks anymore, instead we'll soon be able to identify these different reducers methods and dispatch actions that target these different reducers.

==In these reducer methods we can do something than we didn't could do before: in the reducer methods we are allowed to mutate the state.== So we can set `state.counter++`, for example, for incrementing it. Now mutating state was forbidden before and I emphasized that mutating state is forbidden. I also did emphasize it because in reducer methods create with `createSlice` mutating state seems to be allowed; but the important part is the word seems. **We still must not manipulate the existing state**, but the good thing is when we using the `createSlice` function provided by Redux Toolkit, we can't accidentally manipulate the existing state, because ==**Redux Toolkit internally uses another package, called Immer**. The Immer package will detect mutation code in your reducer methods, and Immer will automatically clone the existing state, create a new state object, keep all the state which we're not editing, and overwrite the state which we are editing _in an immutable way_. So with the help of Immer will have under the hood  immutable code, even though at the surface it doesn't look like it.== Therefore, we as a developer, have a much easier time working with Redux, because we don't have to create a copy manually and keep all the code we're not changing. Instead, we just change the code we wanna change and **internally it's translated into immutable code**.

When using Redux Toolkit we of course can still have reducer methods that listen to actions, that have an extra payload (extra data), because the reducer methods gets two arguments: the old state and the action.

> **Note**: We just don't need to accept both arguments in the other two reducers (`increment` and `decrement`), because we don't need to do anything with the action in there.

Is important to keep in mind that every value or object that you pass as an argument when you dispatch actions inside you React component, it will have a `payload` property when you need to read action argument inside your reducer methods, so the action argument will always have a `payload` property. The `payload` property will be an object that will have all the values that you have passed to dispatch function.

```react
// import { createReducer } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0, showCounter: true },
    reducers: {
        increment(state) {
            state.counter++; //seems we mutate state, but behind the scenes Immer will transform this code into immutable code
        },
        decrement(state) {
            state.counter--; //seems we mutate state, but behind the scenes Immer will transform this code into immutable code
        },
        increase(state, action) {
            state.counter = state.counter + action.payload; // payload is the name off the property which will hold any extra data you might be dispatching
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
})
```

Now that we created this slice, how do we now make our Redux store aware of that slice, how do we use the slice? And how do we then dispatch actions against this slice?

## Connection Redux Toolkit State

Now to use our slice, we first of all need to use the return value of calling `createSlice()` for register it with our Redux store. ==`createSlice` return an object which has, among other properties, a `.reducer` property. This property holds all the reducers methods for that specific slice.==

> **Note**: `counterSlice.reducer` is a big reducer with a couple of `if` statements that trigger those different reducer methods depending on the action `type`.

```react
import { createStore } from 'redux';

const store = createStore(counterSlice.reducer); // wrong
```

To `createStore` function we could pass our `counterSlice.reducer` By only passing the `counterSlice.reducer` as the first argument to `createStore`, we just couldn't dispatch actions right now, but in theory, we would be good to go like this. But if we have **a bigger applications with multiple state slices**, we would face a problem if we try to do it like above code, because ==`createStore` can have only one reducer passed to it==, and when we have multiple slices, we have multiple reducers, which we access with `.reducer` on the different slices.

With standard Redux, there is a `combineReducers` function which we could use for that, but we can also ditch Redux and instead ==import the `configureStore` function from '@reduxjs/toolkit'==, which will make that a bit easier.

==`configureStore`, like `createStore`, creates a Redux store, but it makes **merging multiple reducers into one reducer** easier thereafter.==

==To the `configureStore` we pass an **object**, not a reducer function. It's a configuration object expected by `configureStore`. A configuration object where we then set a `reducer` property, and that's an expected property by `configureStore`.==

> Note: No matter if we use `createStore` or `configureStore`, Redux wants **one main reducer function** which is responsible for the global state.

==With `configureStore`, the value for `reducer` can be a single reducer, but if we had multiple state slices in a bigger application, then the alternative as a single value for the `reducer` key is an object. In that object we can set up any keys of our choice, so any property names of our choice, and the values of those properties would then be different reducer methods.== So we would create a map of reducers you could say, and this map is then set as a value for the main reducer, and behind the scenes `configureStore` will merge all those reducers into one big reducer.

```react
import { configureStore } from ''@reduxjs/toolkit';

const store = configureStore({
    reducer: counterSlice.reducer, // can be a single reducer
    /*
    reducer: {
        counter: counterSlicer.reducer,
        other: otherSlice.reducer,
    }
    */
})
```

Now the question is, how do we dispatch actions? Because we don't have our own `if` checks, we don't know what the identifiers for our actions should be. We just have these method names in our reducer, but how do we now know what to dispatch?

## Dispatch actions with Redux Toolkit

==For dispatching actions, `createSlice` has got us covered. It automatically creates unique action identifiers for our different reducer methods. To get hold of these action identifiers, we can use our `counterSlice` variable and access `.actions`.==

==`counterSlice.actions` is an **object full of keys**, where the the key names (`counterSlice.actions.increment`, `counterSlice.actions.decrement`, and so on) match the reducer methods names we have in our `createSlice` function in the reducers area.==

==Now we can access those keys on `counterSlice.actions` object, and with that we don't access the reducer methods to find up actions key there, but instead we get methods created automatically by Redux Toolkit, which when we call them will **create action objects** automatically for us.== When we call, for example `counterSlice.actions.increment()`, it return an object of this shape: `{type: 'some auto-generated unique identifier'}`.

==Therefore these methods are called **action creators**, because they will **create action objects** for us, where these objects already have a `type` property with a unique identifier per action.== Automatically created behind the scenes, so **we don't have to worry about action identifiers, we don't have to create those action objects on our own**. We can tap into this actions key, into this `counterSlice.actions` object on our `createSlice`, and execute these action creator methods, which with their name match our reducer methods to dispatch actions, which will then ultimately trigger those different reducer methods.

That means that we, as a developer, don't have to worry about creating action objects on our own and about coming up with unique identifiers and about avoiding typos.

So that means that what we could do export at the bottom of the `.js` file, our counter actions:

```react
export counterActions = createSlice.actions;
```

By doing this export, we can then import this `counterAction` in the React components that we need the actions, and dispatch specific action from each React component.

```react
import { useDispatch } from 'react-redux'
import { counterActions } from './store/reduxStore.js'

export default function Component() {
    const dispatch = useDispatch();
    
    function handleIncrement() {
        dispatch(counterActions.increment()); // you don't just point to these methods, you need to execute them because when these methods are executed will creates a full action object with the type set to this automatically created unique action identifier. So we get a full action object automatically created for us behind the scenes.
        
        // dispatch(counterActions.increment); // WRONG!!! ONLY BY POINTING TO counterActions.increment, THE ACTION OBJECT WILL NOT BE CREATED BEHIND THE SCENES
    }
    
    return <button onClick={handleIncrement}>Increment</button>
}
```

The question is: what do we do when we need a payload?

==The only important thing to know when you pass a payload to your action method is how you then extract that value (payload), because **Redux Toolkit will automatically create action objects which dispatches**, where the `type` is some unique identifier generated by Redux Toolkit, and **any value you pass into the action method as an argument will be stored in an extra field named `payload`**. The `payload` field name is not up to you, that's the default Redux Toolkit uses.==

```react
import { useDispatch } from 'react-redux'
import { counterActions } from './store/reduxStore.js'

export default function Component() {
    const dispatch = useDispatch();
    
    function handleIncrease(e) {
        dispatch(counterActions.increase({ amount: e.target.value })); // { type: 'SOME_UNIQUE_IDENTIFIER', payload: {amount: 'value'}}
        
        /*
        dispatch(counterActions.increase(10)); // { type: 'SOME_UNIQUE_IDENTIFIER', payload: 10}
        */
    }
    
    return <button onClick={handleIncrease} value={5}>Increase</button>
}
```

## Summary

Now that we did transform our code by using Redux Toolkit instead of standard Redux, our code is shorter, it's more concise and it's easier to maintain. and it's also easier to now work with Redux if you have a more complex application.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
2. [Redux Toolkit - redux-toolkit.js.org](https://redux-toolkit.js.org/)
3. [Writing Reducers - redux-toolkit.js.org](https://redux-toolkit.js.org/usage/usage-guide#writing-reducers)
4. [Simplifying Slices with `createSlice` - redux-toolkit.js.org](https://redux-toolkit.js.org/usage/usage-guide#simplifying-slices-with-createslice)
5. [Simplifying Store Setup with `configureStore` - redux-toolkit.js.org](https://redux-toolkit.js.org/usage/usage-guide#simplifying-store-setup-with-configurestore)