# Preventing unnecessary re-evaluations with `React.memo()`

==In bigger apps you might want to **optimize children components re-evaluation**==. Therefore, you as a developer can tell React that it should only re-execute a child component under certain circumstances, and those circumstances would be that the props which, for example, `<DemoOutput show={false}/>` received changed. So React checks if the `show={false}` value changed, and only if that's the case, it will re-execute `<DemoOutput/>`. How can we tell React that it should behave like this? Well, we have to go to the component for which we wanna opt into that "Did the props changed?" check, and we simply wrap our component, for example `DemoOutput` in the export line, with `React.memo(DemoOutput)`.

```react
import React from 'react';

const MyParagraph = (props) => {
  return <p>{props.children}</p>;
};

const DemoOutput = (props) => {
  return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
};

export default React.memo(DemoOutput);
```

```react
import React, { useState } from 'react';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div>
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
    </div>
  );
}

export default App;
```

> **Note**: ==`React.memo()` only work for functional components==. For class-based components, `React.memo()` doesn't work.

## Skipping re-rendering when props are unchanged

==React normally re-renders a component whenever its parent re-renders. With `React.memo()` you can create a component that React will not re-render when its parent re-renders so long as its new props are the same as the old props==. Such a component is said to be _memoized_.

==`React.memo()` lets you skip re-rendering a component when its props are unchanged==. Wrap a component in `React.memo()` to get a _memoized_ version of that component. This memoized version of your component will usually not be re-rendered when its parent component is re-rendered as long as its props have not changed. But React may still re-render it: memoization is only a performance optimization, not a guarantee.

The `.memo()` method does not modify the wrapped component, but returns a new, memoized component instead. Any valid React component, including functions and [`forwardRef`](https://beta.reactjs.org/reference/react/forwardRef) components, is accepted. The `.memo()` method returns a new React component. It behaves the same as the component provided to `.memo()` method, except that React will not always re-render it when its parent is being re-rendered unless its props have changed.

> **Note**: A React component should always have [pure rendering logic.](https://beta.reactjs.org/learn/keeping-components-pure) This means that it must return the same output if its props, state, and context haven’t changed. By using `React.memo()`, you are telling React that your component complies with this requirement, so React doesn’t need to re-render as long as its props haven’t changed. When you use `React.memo()`, your component will still re-render if its own state changes or if a context that it’s using changes.
>
> Even when a component is _memoized_, it will still re-render when its own state or context that it’s using changes. Memoization only has to do with props that are passed to the component from its parent.

**You should only rely on `.memo()` method as a performance optimization.** If your code doesn’t work without it, find the underlying problem and fix it first. Then you may add `.memo()` to improve performance.

## How `.memo()` method actually work

==`React.memo()` allows us to optimize functional components. Now, what does `React.memo` do? `React.memo()` tells React that for `DemoOutput` component which it gets as a argument, React should look at the props that `DemoOutput` component gets and check the new value for all those props and compare them to the previous value those props got. And only if the value of a props changed, the `DemoOutput` component should be re-executed. And _if the parent component changed but the props values for the `DemoOutput` component did not change, `DemoOutput` component execution will be skipped_==.

> **Note**: ==If you wrap a component with `React.memo()`, if that wrapped component is not re-evaluated, its children components are also not re-evaluated==. For example, if `DemoOutput` is not re-executed, of course, its child component `MyParagraph` is also not re-executed.

## Should you add `.memo()` everywhere?

==With `React.memo()` you optimize functional components to avoids unnecessary components re-rendering==. Now, that might bring up a new question: why aren't we using that on all components if it allows us to optimize them? Because this optimization comes at a cost. The `.memo()` method tells React that whenever the `App` component changed, it should go to `DemoOutput` component and compare the new props values with the previous props values, so therefore React needs to do two things: it needs to store the previous props values and it needs to make that comparison. That comparison, of course, also has its own performance cost. It, therefore, greatly depends on the component you're applying `React.memo()` to whether it's worth it or not, because ==you're trading the performance cost of re-evaluating the component for the performance cost of comparing props, and it's impossible to say which cost is higher because it depends on the number of props you have and on the complexity of your component and the number of child components your component has==.

Optimizing with `.memo()` is only valuable when your component re-renders often with the same exact props, and its re-rendering logic is expensive. If there is no perceptible lag when your component re-renders, `.memo()` is unnecessary. Keep in mind that `.memo()` is completely useless if the props passed to your component are _always different,_ such as if you pass an object or a plain function defined during rendering. This is why you will often need [`useMemo`](https://beta.reactjs.org/reference/react/useMemo#skipping-re-rendering-of-components) and [`useCallback`](https://beta.reactjs.org/reference/react/useCallback#skipping-re-rendering-of-components) together with `.memo()`.

There is no benefit to wrapping a component in `memo` in other cases. There is no significant harm to doing that either, so some teams choose to not think about individual cases, and memoize as much as possible. The downside of this approach is that code becomes less readable. Also, not all memoization is effective: a single value that’s “always new” is enough to break memoization for an entire component.

## When to use `.memo()` method?

==`React.memo()` can be a great tool if you have a huge component tree with a lot of child components, and on a high level in the component tree you can avoid unnecessary re-render cycles for the entire branch of the component tree, because even children components of the parent component that is wrapped by `React.memo()` will not be re-executed. With the help of `React.memo()` you can **cut off entire branches of unnecessary re-evaluations**==. _Like the case above, by avoiding the re-evaluation of `DemoOutput` we're also automatically avoiding the re-evaluation of `MyParagraph`, even though we're not using `React.memo()` in the `MyParagraph` component_.

_If you, on the other hand, have a component where you know it's going to change, or its props values are going to change with pretty much every re-evaluation of the parent component anyways, then `React.memo()` doesn't make a lot of sense because if the result is that the component should re-render anyways, well, then you can also save that extra comparison of the props values. That's then just some overhead cost, which is not worth it_. And, of course, ultimately, as always, it depends on your app size. For small apps, for small component trees, and so on, for all of that, it might simply not worth it to add `React.memo()`, but for larger apps where you can **cut off entire branches of unnecessary re-evaluations**, it might very well be worth it. ==You just don't wanna wrap every component with `React.memo()`, instead you wanna **pick some key parts in your component tree which allows you to cut off an entire branch of child components**, that's way more effective than doing this on every child component==.

## `.memo()` and reference values

==A component that receives through props **reference values** (arrays, objects or functions) will be re-evaluated although you wrap that component with `React.memo()`==. This behavior is because that on every component re-evaluation the entire component function is re-executed, so if you store a reference value in a variable, a new reference value is created. And `React.memo()` compare that new reference value with the old reference value that you had in your previous re-evaluation, and as you know, two references values, although looks similar to us humans, they are not equal, and if they are not equal the component function will be re-evaluated. You will not have this problem when you pass through props primitive values:

```js
[1, 2, 3] = [1, 2, 3] // false
function a() {} === function b() {} // false
```

```react
function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div>
      <h1>Hi there!</h1>
      <DemoOutput show={false}/> //if you wrap this component with React.memo(), it will NOT be re-evaluated because you have as a props value a primite type
      <Button onClick={toggleParagraphHandler}/> //this component will be re-evaluated although you wrap it with React.memo() because receives as props a reference value
    </div>
  );
}
```

When you use `React.memo()`, your component re-renders whenever any props is not _shallowly equal_ to what it was previously. This means that React compares every props in your component with the previous value of that props using the [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) comparison:

```javascript
Object.is(3, 3); // true
Object.is({}, {}); // false
```

## Minimizing props changes

To get the most out of `.memo()` method, minimize the times that the props change. For example, if the props is an object, prevent the parent component from re-creating that object every time by using [`useMemo`](https://beta.reactjs.org/reference/react/useMemo).

A better way to minimize props changes is to make sure the component accepts the minimum necessary information in its props. For example, it could accept individual values instead of a whole object.

When you need to pass a function to memoized component, either declare it outside your component so that it never changes, or [`useCallback`](https://beta.reactjs.org/reference/react/useCallback#skipping-re-rendering-of-components) to cache its definition between re-renders.

## Troubleshooting: my component re-renders when a prop is an object, array, or function

React compares old and new props by shallow equality: that is, it considers whether each new props is reference-equal to the old props. If you create a new object or array each time the parent is re-rendered, even if the individual elements are each the same, React will still consider it to be changed. Similarly, if you create a new function when rendering the parent component, React will consider it to have changed even if the function has the same definition. Avoid this by minimizing props changes that you learn above.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
2. [`React.memo()` - beta.reactjs.org](https://beta.reactjs.org/reference/react/memo)
