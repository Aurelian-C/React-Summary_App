# Preserving and resetting state

==State is isolated between components. React keeps track of which state belongs to which component based on their place in the UI tree==. You can control when to preserve state and when to reset it between re-renders.

You will learn:

- How React “sees” component structures
- When React chooses to preserve or reset the state
- How to force React to reset component’s state
- How keys and types affect whether the state is preserved

## The UI tree

Browsers use many tree structures to model UI. The [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction) represents HTML elements, the [CSSOM](https://developer.mozilla.org/docs/Web/API/CSS_Object_Model) does the same for CSS.

==React also uses tree structures to manage and model the UI you make. React makes **UI trees** from your JSX==, then React DOM updates the browser DOM elements to match that UI tree.

![React_UI_tree](../../img/React_UI_tree.jpg)

## State is tied to a position in the tree

==When you give a component state, you might think the state "lives" inside the component. But the state is actually held inside React. React associates each piece of state it's holding with the correct component by where that component sits in the UI tree==.

Here, there is only one `<Input />` JSX tag, but it’s rendered at two different positions:

![Preserving_and_resetting_state](../../img/Preserving_and_resetting_state.jpg)

These are two separate inputs because each is rendered at its own position in the tree. You don’t usually have to think about these positions to use React, but it can be useful to understand how it works.

==In React, each component on the screen has fully isolated state==. For example, if you render two `<Input>` components side by side, each of them will get its own, independent, `name` state. For example, when one `name` is updated, only the state for that component is updated.

==**React will keep the state around for as long as you render the _same component_ at the _same position_**.==

==**When React removes a component, it destroys its state**. When you add that component again to the DOM, its state is initialized from scratch. **React preserves a component’s state for as long as it’s being rendered at its position in the UI tree.** If it gets removed, or a different component gets rendered at the same position, React discards its state. **Same component at the same position preserves state. Different components at the same position reset state**==.

## Same component at the same position preserves state

In this example, there are two different `<Counter />` tags. 

![Preserving_and_resetting_state1](../../img/Preserving_and_resetting_state1.jpg)

==When you tick or clear the checkbox, the counter state does not get reset. Whether `isFancy` is `true` or `false`, you always have a `<Counter />` as the first child of the `div` returned from the root `App` component==:

![Preserving_and_resetting_state2](../../img/Preserving_and_resetting_state2.jpg)

==It’s the **same component** at the **same position**==, so from React’s perspective, it’s the same counter.

> **IMPORTANT**: Remember that ==it’s the position in the UI tree — not in the JSX markup — that matters to React!==

## Different components at the same position reset state

In this example, ticking the checkbox will replace `<Counter>` with a `<p>`:

![Preserving_and_resetting_state3](../../img/Preserving_and_resetting_state3.jpg)

Here, you switch between *different* component types at the same position. Initially, the first child of the `<div>` contained a `Counter`. But when you swapped in a `p`, React removed the `Counter` from the UI tree and destroyed its state.

==When you render a different component in the same position, it resets the state of its entire subtree==.

#### Another example

![Preserving_and_resetting_state4](../../img/Preserving_and_resetting_state4.jpg)

Although you render a `Counter`, the first child of the `div` changes from a `div` to a `section`. When the child `div` was removed from the DOM, the whole tree below it (including the `Counter` and its state) was destroyed as well.

As a rule of thumb, ==if you want to preserve the state between re-renders, the structure of your tree needs to “match up” from one render to another. If the structure is different, the state gets destroyed because React destroys state when it removes a component from the tree==.

## Resetting state at the same position

By default, React preserves state of a component while it stays at the same position. Usually, this is exactly what you want, so it makes sense as the default behavior. But sometimes, you may want to reset a component’s state.

Consider this app that lets two players keep track of their scores during each turn:

![Preserving_and_resetting_state5](../../img/Preserving_and_resetting_state5.jpg)

Currently, when you change the player, the score is preserved. The two `Counter`s appear in the same position, so React sees them as *the same* `Counter` whose `person` prop has changed. But conceptually, in this app they should be two separate counters. They might appear in the same place in the UI, but one is a counter for Taylor, and another is a counter for Sarah.

==There are two ways to reset state when switching between them:==

### 1. Render components in different positions

If you want these two `Counter`s to be independent, you can render them in two different positions. This solution is convenient when you only have a few independent components rendered in the same place.

![Preserving_and_resetting_state6](../../img/Preserving_and_resetting_state6.jpg)

### 2. Resetting state with a `key`

There is also another, more generic, way to reset a component’s state.

![Preserving_and_resetting_state7](../../img/Preserving_and_resetting_state7.jpg)

Switching between Taylor and Sarah does not preserve the state. This is because **you gave them different `key`s**:

```react
{isPlayerA ? <Counter key="Taylor" person="Taylor" /> : <Counter key="Sarah" person="Sarah" />}
```

==You might have seen `key`s when [rendering lists.](https://beta.reactjs.org/learn/rendering-lists#keeping-list-items-in-order-with-key) Keys aren’t just for lists! **You can use keys to make React distinguish between any components**==. By default, React uses order within the parent (“first counter”, “second counter”) to discern between components. But keys let you tell React that this is not just a _first_ counter, or a _second_ counter, but a specific counter — for example, _Taylor’s_ counter. This way, React will know _Taylor’s_ counter wherever it appears in the tree!

==Specifying a `key` tells React to use the `key` itself as part of the position, instead of their order within the parent==. This is why, even though you render them in the same place in JSX, React sees them as two different counters, and so they will never share state. Every time a counter appears on the screen, its state is created. Every time it is removed, its state is destroyed. Toggling between them resets their state over and over.

> **Note**: Remember that keys are not globally unique. They only specify the position _within the parent_.

## Resetting a form with a key

Resetting state with a key is particularly useful when dealing with forms.

![Preserving_and_resetting_state8](../../img/Preserving_and_resetting_state8.jpg)

Try entering something into the input, and then press “Alice” or “Bob” to choose a different recipient. You will notice that the input state is preserved because the `<Chat>` is rendered at the same position in the tree.

**In many apps, this may be the desired behavior, but not in a chat app!** You don’t want to let the user send a message they already typed to a wrong person due to an accidental click. To fix it, add a `key`:

![Preserving_and_resetting_state9](../../img/Preserving_and_resetting_state9.jpg)

This ensures that when you select a different recipient, the `Chat` component will be recreated from scratch, including any state in the tree below it. React will also re-create the DOM elements instead of reusing them.

> #### Preserving state for removed components:
>
> In a real chat app, you’d probably want to recover the input state when the user selects the previous recipient again. There are a few ways to keep the state “alive” for a component that’s no longer visible:
>
> - You could render _all_ chats instead of just the current one, but hide all the others with CSS. The chats would not get removed from the tree, so their local state would be preserved. This solution works great for simple UIs. But it can get very slow if the hidden trees are large and contain a lot of DOM nodes.
>
> - You could [lift the state up](https://beta.reactjs.org/learn/sharing-state-between-components) and hold the pending message for each recipient in the parent component. This way, when the child components get removed, it doesn’t matter, because it’s the parent that keeps the important information. This is the most common solution.
>
> - You might also use a different source in addition to React state. For example, you probably want a message draft to persist even if the user accidentally closes the page. To implement this, you could have the `Chat` component initialize its state by reading from the [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), and save the drafts there too.
>
> No matter which strategy you pick, a chat _with Alice_ is conceptually distinct from a chat _with Bob_, so it makes sense to give a `key` to the `<Chat>` tree based on the current recipient.

## Summary

- React keeps state for as long as the same component is rendered at the same position.
- State is not kept in JSX tags. It’s associated with the tree position in which you put that JSX.
- You can force a subtree to reset its state by giving it a different key.

## References

1. [Preserving and Resetting State - beta.reactjs.org](https://beta.reactjs.org/learn/preserving-and-resetting-state)
