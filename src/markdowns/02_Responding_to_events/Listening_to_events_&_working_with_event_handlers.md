# Listening to events & working with event handlers

==React lets you add *event handlers* to your JSX==. Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.

## Adding event handlers

==On **all built-in HTML elements**, like `div`, `h2`, `buttons` and so on, we have **full access to all the native DOM events**, which we can listen to==.

==For all these default events, there is a `prop` equivalent in React==, which we can add to these built-in HTML elements to listen to these events. So instead of adding a listener as we would normally do it with Vanilla JavaScript, for example `document.querySelector('button').addEventListener()`, which would be the imperative way of doing that, in React we add an event listener by going to the JSX element and there we add a special `prop`. But now it's not a `prop` which sets some value, but instead it's a `prop` which starts with `on`, because ==React exposes all the default events as props which start with `on`== (example: onClick, onScroll):

```react
const handlerFunction = function() {
    // code here
};

<div onClick={handlerFunction}></div>
<form onSubmit={handlerFunction}></form>
```

==All these `on` props, all these event handler props (onClick, onSubmit, etc), want **a function (event handler) passed as a value**, which then is _executed when that event occurs_==.

## Event handlers and React

You can respond to events in React by declaring _event handler_ functions inside your custom components:

```react
function MyButton() {
  const handleClick = () => {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>Click me</button>
  );
}
```

> **Note**: Functions passed to event handlers must be passed, not called. Notice how `onClick={handleClick}` has no parentheses at the end! Do not _call_ the event handler function: you only need to _pass it down_. React will call your event handler when the user clicks the button.

Event handler functions:

- Are usually defined *inside* your components.
- Have names that start with `handle`, followed by the name of the event.

> **Note**: By convention, it is common to name event handlers as `handle` followed by the event name. You’ll often see `onClick={handleClick}`, `onMouseEnter={handleMouseEnter}`, and so on.

### Reading props in event handlers 

==Because event handlers are declared inside of a component, they have access to the component’s props==:

```react
function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing!">Play Movie</AlertButton>
      <AlertButton message="Uploading!">Upload Image</AlertButton>
    </div>
  );
}
```

### How to pass event handling logic from a parent component: passing event handlers as props 

Often you’ll want the parent component to specify a child’s event handler. Consider buttons: depending on where you’re using a `Button` component, you might want to execute a different function — perhaps one plays a movie and another uploads an image. To do this, pass a prop the component receives from its parent as the event handler like so:

```react
function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return (
    <Button onClick={handlePlayClick}>
      Play "{movieName}"
    </Button>
  );
}

function UploadButton() {
  return (
    <Button onClick={() => alert('Uploading!')}>
      Upload Image
    </Button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}
```

### Naming event handler props 

Built-in components like `<button>` and `<div>` only support browser event names like `onClick`. However, when you’re building your own components, you can name their event handler props any way that you like. By convention, event handler props should start with `on`, followed by a capital letter.

## Event propagation: how events propagate and how to stop them

==Event handlers will also catch events from any children your component might have==. We say that an event “bubbles” or “propagates” up the tree: it starts with where the event happened, and then goes up the tree.

All events propagate in React except `onScroll`, which only works on the JSX tag you attach it to.

### Stopping propagation 

==Event handlers receive an **event object** as their only argument==. By convention, it’s usually called `e`, which stands for “event”. You can use this object to read information about the event. That event object also lets you stop the propagation. ==If you want to prevent an event from reaching parent components, you need to call `e.stopPropagation()`==.

#### Passing handlers as alternative to propagation 

Notice how this click handler runs a line of code *and then* calls the `onClick` prop passed by the parent:

```react
function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}
```

You could add more code to this handler before calling the parent `onClick` event handler, too. This pattern provides an *alternative* to propagation. It lets the child component handle the event, while also letting the parent component specify some additional behavior. Unlike propagation, it’s not automatic. But the benefit of this pattern is that you can clearly follow the whole chain code that executes as a result of some event.

If you rely on propagation and it’s difficult to trace which handlers execute and why, try this approach instead.

## Can event handlers have side effects? 

Absolutely! Event handlers are the best place for side effects.

Unlike rendering functions, event handlers don’t need to be [pure](https://beta.reactjs.org/learn/keeping-components-pure), so it’s a great place to *change* something—for example, change an input’s value in response to typing, or change a list in response to a button press. However, in order to change some information, you first need some way to store it. In React, this is done by using [state, a component’s memory.](https://beta.reactjs.org/learn/state-a-components-memory)

## Summary

- You can handle events by passing a function as a prop to an element like `<button>`.
- Event handlers must be passed, **not called!** `onClick={handleClick}`, not `onClick={handleClick()}`.
- You can define an event handler function separately or inline.
- Event handlers are defined inside a component, so they can access props.
- You can declare an event handler in a parent and pass it as a prop to a child.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
1. [Responding to events - beta.reactjs.org](https://beta.reactjs.org/learn/responding-to-events)
