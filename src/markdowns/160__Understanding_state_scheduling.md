# Understanding state scheduling & batching

Up until now we know how React manages state but there's one thing which is important, which I mentioned before, but which I now wanna emphasize again, and that is _how React handles state updates_.

In your code, you might have a component and in that component, you might manage some state with the help of the `useState` hook, and therefore React manages that state for you. Now eventually, because a user clicked a button or whatever event happens, in that component we update that state. Now the previous state is _not instantly replaced by the new one after state updating function finishes execution_.

In our case below, the `DVD` state is not instantly replaced by `Book` state just because `setNewProduct` is done running. Instead, calling `setNewProduct`, and calling those state updating functions in general, _schedules a state update_ with the data `Book`. But that's now a scheduled state change, React is aware of it, React plans on processing it, but React doesn't process that schedule immediately.

![160_Understanding_state_scheduling](..\img\160_Understanding_state_scheduling.jpg)

> **Note**: ==State updates are _scheduled_ by React, they are _not processed immediately_==.

Now in reality most of the time scheduled state changes will be processed very fast, pretty much instantly, so in reality it might feel instant. If we click a button and that button removes a paragraph, to us as a human that happens instantly. But React reserves the right of actually postponing that state change, for example because a lot of other performance intensive tasks are going on at the same moment, potentially tasks that React considers to have a higher priority.

==React guarantees you that the _order of state changes_ for one in the same type of state is guaranteed==. So if we call `setNewProduct` with a `Carpet` value or whatever, then this state change would not be performed before the previous state change, so ==the order is kept but it's not necessarily executed immediately==. Because multiple updates can be scheduled at the same time, it is recommended that you use the function form for updating your state if you depend on the previous state snapshot:

```react
const Component = () => {
    const [state, setState] = useState(0);
    setValue((previousState) => previousState + 1);
}

// This updating function form is the safe way of ensuring that state changes are processed in order and for every state change where you depend on the previous state, you get the latest state.
```

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)