# Queueing a series of state updates: state scheduling & batching

==Setting a state variable will requests a new re-render, but does not change it in the already running code. But sometimes you might want to **perform multiple operations on the value _before request the next render_**==. To do this, it helps to understand how React batches state updates. State updates are _scheduled_ by React, they are _not processed immediately_.

You can do this by passing an *updater function* when setting state. This lets you queue multiple state updates.

You will learn:

- What "batching" is and how React uses it to process multiple state updates
- How to apply several updates to the same state variable in a row

## React batches state updates

You might expect that clicking the “+3” button will increment the counter three times because it calls `setNumber(number + 1)` three times:

![State_as_a_snapshot2](../../img/State_as_a_snapshot2.jpg)

However, as you might know, ==each **render’s state values are fixed**==, so the value of `number` inside the first render’s event handler is always `0`, no matter how many times you call `setNumber(number + 1)`.

==**React waits until _all_ code in the event handlers has run before processing your state updates**. This is why the re-render only happens *after* all these `setNumber()` calls==.

==React lets you update multiple state variables — even from multiple components — without triggering too many [re-renders](https://beta.reactjs.org/learn/render-and-commit#re-renders-when-state-updates)==. But this also means that the UI won’t be updated until *after* your event handler, and any code in it, completes. This behavior, also known as **batching,** makes your React app run much faster. It also avoids dealing with confusing “half-finished” renders where only some of the variables have been updated.

**React does not batch across _multiple_ intentional events like clicks** — each click is handled separately. Rest assured that React only does batching when it’s generally safe to do. This ensures that, for example, if the first button click disables a form, the second click would not submit it again.

## Updating the same state variable multiple times _before the next render_

It is an uncommon use case, but ==if you would like to update the same state variable multiple times **before the next render**, instead of passing the *next state value* like `setNumber(number + 1)`, you can pass as argument an **updater function** that _calculates the next state based on the previous one in the queue_, like `setNumber(n => n + 1)`. It is a way to tell React to “do something with the state value” instead of just replacing it==.

![Queueing_a_series_of_state_updates](../../img/Queueing_a_series_of_state_updates.jpg)

Here, `n => n + 1` is called an **updater function.** When you pass it to a state setter:

1. React queues this function to be processed after all the other code in the event handler has run.
2. ==During the next render, React goes through the queue and _gives you the final updated state_==.

Here’s how React works through these lines of code while executing the event handler:

1. `setNumber(n => n + 1)` : `n => n + 1` is a function. React adds it to a queue.
2. `setNumber(n => n + 1)` : `n => n + 1` is a function. React adds it to a queue.
3. `setNumber(n => n + 1)` : `n => n + 1` is a function. React adds it to a queue.

==When you call `useState` during the next render, React goes through the queue.== The previous `number` state was `0`, so that’s what React passes to the first updater function as the `n` argument. Then React takes the return value of your previous updater function and passes it to the next updater as `n`, and so on:

| queued update | `n`  | returns     |
| ------------- | ---- | ----------- |
| `n => n + 1`  | `0`  | `0 + 1 = 1` |
| `n => n + 1`  | `1`  | `1 + 1 = 2` |
| `n => n + 1`  | `2`  | `2 + 1 = 3` |

React stores `3` as the final result and returns it from `useState`. This is why clicking “+3” in the above example correctly increments the value by 3.

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

To summarize, here’s how you can think of what you’re passing to the `setNumber` state setter:

- **An updater function** (e.g. `n => n + 1`) gets added to the queue.
- **Any other value** (e.g. number `5`) adds “replace with `5`” to the queue, ignoring what’s already queued.

==After the event handler completes, React will trigger a re-render. During the re-render, React will process the queue. Updater functions run during rendering, so **updater functions must be pure** and only *return* the result. Don’t try to set state from inside of them or run other side effects==.

### Naming conventions 

It’s common to name the updater function argument by the first letters of the corresponding state variable:

```react
setEnabled(e => !e);
setLastName(ln => ln.reverse());
setFriendCount(fc => fc * 2);
```

If you prefer more verbose code, another common convention is to repeat the full state variable name, like `setEnabled(enabled => !enabled)`, or to use a prefix like `setEnabled(prevEnabled => !prevEnabled)`.

## Summary

- Setting state does not change the variable in the existing render, but it requests a new render.
- React processes state updates after event handlers have finished running. This is called batching.
- To update some state multiple times in one event, you can use `setNumber(n => n + 1)` updater function.

## References

1. [Queueing a Series of State Updates - beta.reactjs.org](https://beta.reactjs.org/learn/queueing-a-series-of-state-updates)