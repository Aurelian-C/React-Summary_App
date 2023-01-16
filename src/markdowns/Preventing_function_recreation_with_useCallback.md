# Preventing function re-creation with `useCallback()`

We can make `React.memo()` work for prop values that are objects as well, we just need to tweak the way we create and store those objects a little bit. There is an extra hook provided by React that helps us with that and that is the `useCallback` hook.

==`useCallback` is a hook that allows us to basically store a function across component executions==, so it allows us to tell React that we wanna save a function and that this function should not be recreated with every execution. With that one in the same function object is stored, so one in the same place in memory, and therefore the comparison does work.

```react
import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';

function App() {
  const [value, setValue] = useState(false);
  const [secondValue, setSecondValue] = useState(false);

  const functionHandler = useCallback(() => {
    if (secondValue) setValue((prevValue) => !prevValue);
  }, [secondValue]);
    
  const secondValueHandler = () => {
    setSecondValue(true);
  };
 
  return (
    <div>
      <h1>Hi there!</h1>
      <Button onClick={functionHandler}></Button>
      <Button onClick={allowToggle}></Button>
    </div>
  );
}
```

> **Note**: `useCallback` is a hook, so you can only call it at the top level of your component or your own hooks.

## Usage

When you optimize rendering performance, you will sometimes need to cache the functions that you pass to child components. To cache a function between re-renders of your component, wrap its definition into the `useCallback` hook. Call `useCallback` at the top level of your component to cache a function definition between re-renders:

```react
import { useCallback } from 'react';

function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
}
```

You need to pass two things to `useCallback`:

1. A function definition that you want to cache between re-renders.
2. A list of dependencies including every value within your component that’s used inside your function.

### Parameters

#### `fn`

The function value that you want to cache. React will not throw away the cached function unless there is a specific reason to do that.

#### `dependencies`

The list of all reactive values referenced inside of the `fn` code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. React will compare each dependency with its previous value using the [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) comparison algorithm.

## Some considerations about `useCallback`

On the initial render, the returned function you’ll get from `useCallback` will be the function you passed. On the following renders, React will compare the dependencies with the dependencies you passed during the previous render. If none of the dependencies have changed (compared with `Object.is`, `useCallback` will return the same function as before. Otherwise, `useCallback` will return the function you passed on *this* render. In other words, `useCallback` caches a function between re-renders until its dependencies change.

By wrapping a function in `useCallback`, you ensure that it’s the _same_ function between the re-renders (until dependencies change). You don’t *have to* wrap a function in `useCallback` unless you do it for some specific reason.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
2. [`useCallback` - beta.reactjs.org](https://beta.reactjs.org/reference/react/useCallback)