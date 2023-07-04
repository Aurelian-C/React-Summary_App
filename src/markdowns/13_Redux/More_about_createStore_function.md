# More about `.createStore()` function

`.createStore()` function ==creates a Redux [store](https://redux.js.org/api/store) that holds the complete state tree of your app==. There should only be ==a single store in your app==.

## Arguments: `createStore(reducer, [preloadedState], [enhancer])`

1. `reducer` *(function)*: ==A [**reducing function**](https://redux.js.org/understanding/thinking-in-redux/glossary#reducer) that **returns the next [state tree](https://redux.js.org/understanding/thinking-in-redux/glossary#state)**==, given the current state tree and an [action](https://redux.js.org/understanding/thinking-in-redux/glossary#action) to handle.
2. `preloadedState` *(any)*: ==The **initial state**==. You may optionally specify it to hydrate the state from the server in universal apps, or to restore a previously serialized user session. If you produced `reducer` with [`combineReducers`](https://redux.js.org/api/combinereducers), this must be a plain object with the same shape as the keys passed to it. Otherwise, you are free to pass anything that your `reducer` can understand.
3. `enhancer` *(function)*: ==The **store enhancer**==. You may optionally specify it to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc. The only store enhancer that ships with Redux is [`applyMiddleware()`](https://redux.js.org/api/applymiddleware).

## Returns

==A Redux [`Store`](https://redux.js.org/api/store): An object that holds the complete state of your app==. The only way to change its state is by [dispatching actions](https://redux.js.org/api/store#dispatchaction). You may also [subscribe](https://redux.js.org/api/store#subscribelistener) to the changes to its state to update the UI.

## Tips

- ==Don't create more than **one store** in an application!== Instead, use [`combineReducers`](https://redux.js.org/api/combinereducers) to create a single root reducer out of many.
- ==Redux state is normally plain JS objects and arrays==.
- ==If your state is a plain object, make sure you never mutate it!== Immutable updates require making copies of each level of data, typically using the object spread operator ( `return { ...state, ...newData }` ).
- For universal apps that run on the server, create a store instance with every request so that they are isolated. Dispatch a few data fetching actions to a store instance and wait for them to complete before rendering the app on the server.
- ==When a store is created, Redux dispatches a dummy action to your reducer to populate the store with the initial state. You are not meant to handle the dummy action directly.== Just remember that your reducer should return some kind of initial state if the state given to it as the first argument is `undefined`, and you're all set.
- To apply multiple store enhancers, you may use [`compose()`](https://redux.js.org/api/compose).

## References

1. [`.createStore()` - redux.js.org](https://redux.js.org/api/createstore)

