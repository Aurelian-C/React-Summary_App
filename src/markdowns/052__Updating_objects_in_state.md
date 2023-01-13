# Updating objects in state

State can hold any kind of JavaScript value, including objects. But ==you shouldn’t change objects that you hold in the React state directly. Instead, when you want to update an object, you need to create a new one (or make a copy of an existing one), and then set the state to use that copy==.

>You will learn:
>
>- How to correctly update an object in React state
>- How to update a nested object without mutating it
>- What immutability is, and how not to break it

## What’s a mutation?

Consider an object in state:

```react
const [position, setPosition] = useState({ x: 0, y: 0 });
```

Technically, it is possible to change the contents of *the object itself*. **This is called a mutation**:

```react
position.x = 5;
```

==However, although objects in React state are technically mutable, you should **treat them _as if_ they were immutable** (unchangeable or “read-only”) — like numbers, booleans, and strings. Instead of mutating them like `position.x = 5`, you should _always_ **replace them**==.

## Treat state as read-only

While mutating state can work in some cases, we don’t recommend it. You should ==treat _any JavaScript object_ that you put into state as **read-only**==.

This code modifies the object assigned to `position` from [the previous render](https://beta.reactjs.org/learn/state-as-a-snapshot#rendering-takes-a-snapshot-in-time). But without using the state setting function, React has no idea that object has changed, so React does not do anything in response.

```react
const Component = () = {
    const [position, setPosition] = useState({ x: 0, y: 0 });
	
	const handlePosition = (e) => {
        position.x = e.clientX;
        position.y = e.clientY
    }

	return <div onClick={handlePosition}>Position</div>
};
```

To actually trigger a re-render, **create a _new_ object and pass it to the state setting function**:

```react
const Component = () = {
    const [position, setPosition] = useState({ x: 0, y: 0 });
	
	const handlePosition = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        });
    }

	return <div onClick={handlePosition}>Position</div>
};
```

With `setPosition`, you’re telling React:

- Replace `position` with this _new_ object;
- And _render_ this component again.

### Local mutation is fine

==Mutation is only a problem when you change *existing* objects that are already in state==. Mutating an object you’ve just created is okay because *no other code references it yet.* Changing it isn’t going to accidentally impact something that depends on it. This is called a "local mutation". You can even do local mutation while rendering. Very convenient and completely okay!

Code like this is a problem because it modifies an *existing* object in state:

```react
position.x = e.clientX;
position.y = e.clientY;
```

But code like this is **absolutely fine** because you’re mutating a fresh object you have *just created*:

```react
const nextPosition = {};
nextPosition.x = e.clientX;
nextPosition.y = e.clientY;
setPosition(nextPosition);

// In fact, it is completely equivalent to writing this:
setPosition({
  x: e.clientX,
  y: e.clientY
});
```

## Copying objects with the spread syntax

Often you will want to ==include *existing* data as a part of the new object you’re creating. For example, you may want to update *only one* field in a form, but _keep the previous values_ for all other fields==.

You can use the `...` [object spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) syntax so that you don’t need to copy every property separately.

```react
onst [item, setItem] = useState({
    item1: '',
	item2: '',
	item3: '',
});

setItem({
	...item, // Copy the old fields
	item1: 'value', // But override this one
});
```

Note that the `...` spread syntax is "shallow" — it only copies things one level deep. This makes it fast, but it also means that if you want to update a nested property, you’ll have to use it more than once.

### Updating a nested object 

Consider a nested object structure like this:

```react
const [person, setPerson] = useState({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  }
});
```

In React, you treat state as immutable! In order to change `city`, you would first need to produce the new `artwork` object (pre-populated with data from the previous one), and then produce the new `person` object which points at the new `artwork`:

```react
setPerson({
  ...person, // Copy other fields
  artwork: { // but replace the artwork
    ...person.artwork, // with the same one
    city: 'New Delhi' // but in New Delhi!
  }
});
```

## Summary

For large forms, keeping all data grouped in an object is very convenient — as long as you update it correctly!

- Treat all state in React as immutable.
- When you store objects in state, mutating them will not trigger renders and will change the state in previous render “snapshots”.
- Instead of mutating an object, create a *new* version of it, and trigger a re-render by setting state to it.
- You can use the `{...obj, something: 'newValue'}` object spread syntax to create copies of objects.
- Spread syntax is shallow: it only copies one level deep.
- To update a nested object, you need to create copies all the way up from the place you’re updating.



## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
1. [Updating Objects in State - beta.reactjs.org](https://beta.reactjs.org/learn/updating-objects-in-state)