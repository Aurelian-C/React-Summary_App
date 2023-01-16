# Optimizing with `useMemo()`

`useMemo` hook basically allows you to memoize (memoize means to store), any kind of data which you want to store, just like `useCallback` does it for functions.

==`useMemo` is a React hook that lets you cache the result of a calculation between re-renders==.

> **Note**: Caching return values like this is also known as [*memoization*,](https://en.wikipedia.org/wiki/Memoization) which is why this hook is called `useMemo`.

## Usage

Call `useMemo` at the top level of your component to cache a calculation between re-renders:

```react
import { useMemo } from 'react';

function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(
    () => filterTodos(todos, tab),
    [todos, tab]
  );
}
```

> **Note**: `useMemo` is a hook, so you can only call it **at the top level of your component** or your own hooks.

You need to pass two things to `useMemo`:

1. A ==calculation function== that takes no arguments, like `() =>`, and _returns what you wanted to calculate_.
2. A ==list of dependencies== including every value within your component that’s used inside your calculation.

### Parameters 

#### `calculationFn`

The function calculating the value that you want to cache. It should be pure, should take no arguments, and should return a value of any type. React will call your function during the initial render. On subsequent renders, React will return the same value again if the `dependencies` have not changed since the last render. Otherwise, it will call `calculationFn`, return its result, and store it in case it can be reused later.

#### `dependencies`

The list of all reactive values referenced inside of the `calculationFn` code. Reactive values include props, state, and all the variables and functions declared directly inside your component body.

### Returns 

On the initial render, `useMemo` returns the result of calling `calculationFn` with no arguments. During subsequent renders, it will either return an already stored value from the last render (if the dependencies haven’t changed), or call `calculationFn` again, and return the result that `calculationFn` has returned.

## Skipping expensive recalculations

To cache a calculation between re-renders, wrap it in a `useMemo` call at the top level of your component:

```react
import { useMemo } from 'react';

function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}
```

On the initial render, the value you’ll get from `useMemo` will be the result of calling your calculation.

On every subsequent render, React will compare the dependencies with the dependencies you passed during the last render. If none of the dependencies have changed (compared with [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)), `useMemo` will return the value you already calculated before. Otherwise, React will re-run your calculation and return the new value.

In other words, `useMemo` caches a calculation result between re-renders until its dependencies change.

## Some consideration about `useMemo`

Now, I will say you will use `useMemo` far less often than you use `useCallback` because memoizing functions is much more useful and you need that more often than memoizing data. You essentially wanna memoize data if it would be performance-intensive to recalculate something based on it. Otherwise, it might not really be worth it because you always have to keep in mind that if you store data with `useMemo`, of course, it occupies some memory and, of course, this storing functionality also takes up some performance, so this is not something you wanna use on every value you're using.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
2. [`useMemo` - beta.reactjs.org](https://beta.reactjs.org/reference/react/useMemo)