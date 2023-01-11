# Understanding state scheduling & batching

Up until now we know how React manages state but there's one thing which is important, which I mentioned before, but which I now wanna emphasize again, and that is _how React handles state updates_.

In your code, you might have a component and in that component, you might manage some state with the help of the `useState` hook, and therefore React manages that state for you. Now eventually, because a user clicked a button or whatever event happens, in that component we update that state. Now the previous state is _not instantly replaced by the new one after state updating function finishes execution_.

In our case below, the `DVD` state is not instantly replaced by `Book` state just because `setNewProduct` is done running. Instead, calling `setNewProduct`, and calling those state updating functions in general, _schedules a state update_ with the data `Book`. But that's now a scheduled state change, React is aware of it, React plans on processing it, but React doesn't process that schedule immediately.

![160_Understanding_state_scheduling](..\img\160_Understanding_state_scheduling.jpg)

> **Note**: ==State updates are _scheduled_ by React, they are _not processed immediately_==.

Now in reality most of the time scheduled state changes will be processed very fast, pretty much instantly, so in reality it might feel instant. If we click a button and that button removes a paragraph, to us as a human that happens instantly. But React reserves the right of actually postponing that state change, for example because a lot of other performance intensive tasks are going on at the same moment, potentially tasks that React considers to have a higher priority.

==React guarantees you that the _order of state changes_ for one in the same type of state is guaranteed==. So if we call `setNewProduct` with a `Carpet` value or whatever, then this state change would not be performed before the previous state change, so ==the order is kept but it's not necessarily executed immediately==. Because multiple updates can be scheduled at the same time, it is recommended that you use the **updater function** for updating your state if you depend on the previous state snapshot:

```react
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </>
  )
}
```

```react
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>+3</button>
    </>
  )
}

// This updater function is the safe way of ensuring that state changes are processed in order and for every state change where you depend on the previous state, you get the latest state.
```

Here, `n => n + 1` is called an **updater function.** When you pass it to a state setter:

1. React queues this function to be processed after all the other code in the event handler has run.
2. During the next render, React goes through the queue and gives you the final updated state.

```react
setNumber(n => n + 1);
setNumber(n => n + 1);
setNumber(n => n + 1);
```

Here’s how React works through these lines of code while executing the event handler:

1. `setNumber(n => n + 1)`: `n => n + 1` is a function. React adds it to a queue.
2. `setNumber(n => n + 1)`: `n => n + 1` is a function. React adds it to a queue.
3. `setNumber(n => n + 1)`: `n => n + 1` is a function. React adds it to a queue.

When you call `useState` during the next render, React goes through the queue. The previous `number` state was `0`, so that’s what React passes to the first updater function as the `n` argument. Then React takes the return value of your previous updater function and passes it to the next updater as `n`, and so on:

| queued update | `n`  | returns     |
| ------------- | ---- | ----------- |
| `n => n + 1`  | `0`  | `0 + 1 = 1` |
| `n => n + 1`  | `1`  | `1 + 1 = 2` |
| `n => n + 1`  | `2`  | `2 + 1 = 3` |

React stores `3` as the final result and returns it from `useState`.

### What happens if you update state after replacing it 

What about this event handler? What do you think `number` will be in the next render?

```react
<button onClick={() => {
  setNumber(number + 5);
  setNumber(n => n + 1);
}}>
```

Here’s what this event handler tells React to do:

1. `setNumber(number + 5)`: `number` is `0`, so `setNumber(0 + 5)`. React adds *“replace with `5`”* to its queue.
2. `setNumber(n => n + 1)`: `n => n + 1` is an updater function. React adds *that function* to its queue.

During the next render, React goes through the state queue:

| queued update      | `n`          | returns     |
| ------------------ | ------------ | ----------- |
| “replace with `5`” | `0` (unused) | `5`         |
| `n => n + 1`       | `5`          | `5 + 1 = 6` |

React stores `6` as the final result and returns it from `useState`.

> **Note**: ==You may have noticed that `setState(x)` actually works like `setState(n => x)`, but `n` is unused!==

### What happens if you replace state after updating it 

Let’s try one more example. What do you think `number` will be in the next render?

```react
<button onClick={() => {
  setNumber(number + 5);
  setNumber(n => n + 1);
  setNumber(42);
}}>
```

Here’s how React works through these lines of code while executing this event handler:

1. `setNumber(number + 5)`: `number` is `0`, so `setNumber(0 + 5)`. React adds *“replace with `5`”* to its queue.
2. `setNumber(n => n + 1)`: `n => n + 1` is an updater function. React adds *that function* to its queue.
3. `setNumber(42)`: React adds *“replace with `42`”* to its queue.

During the next render, React goes through the state queue:

| queued update       | `n`          | returns     |
| ------------------- | ------------ | ----------- |
| “replace with `5`”  | `0` (unused) | `5`         |
| `n => n + 1`        | `5`          | `5 + 1 = 6` |
| “replace with `42`” | `6` (unused) | `42`        |

Then React stores `42` as the final result and returns it from `useState`.

## Summary

- Setting state does not change the variable in the existing render, but it requests a new render.
- React processes state updates after event handlers have finished running. This is called batching.
- To update some state multiple times in one event, you can use `setNumber(n => n + 1)` updater function.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
1. [State as a Snapshot - beta.reactjs.org](https://beta.reactjs.org/learn/state-as-a-snapshot)
1. [Queueing a Series of State Updates - beta.reactjs.org](https://beta.reactjs.org/learn/queueing-a-series-of-state-updates)