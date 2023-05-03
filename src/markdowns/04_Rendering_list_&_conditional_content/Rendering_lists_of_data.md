# Rendering list of data

==You will often want to display **multiple similar components** from a **collection of data**==. You can use the [JavaScript array methods](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array#) to manipulate an array of data. You can use JavaScript’s [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) and [`filter()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) with React to filter and ==transform your array of data into an array of components==.

For each array item, you will need to specify a `key`. Usually, you will want to use an ID from the database as a `key`. Keys let React keep track of each item’s place in the list even if the list changes.

## Rendering data from arrays

Let say that you have a list of content:

```react
<ul>
  <li>Creola Katherine Johnson: mathematician</li>
  <li>Mario José Molina-Pasquel Henríquez: chemist</li>
  <li>Mohammad Abdus Salam: physicist</li>
  <li>Percy Lavon Julian: chemist</li>
  <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
</ul>
```

==The only difference among those list items is their contents, their data. You will often need to show several instances of the same component using different data when building interfaces==. In these situations, you can store that data in JavaScript objects and arrays and use methods like `map()` and `filter()` to render lists of components from them.

Here’s a short example of how to generate a list of items from an array:

1. **Move** the data into an array:

```react
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];
```

2. **Map** the `people` members into a new array of JSX nodes, `listItems`:

```react
const listItems = people.map(person => <li>{person}</li>);
```

3. **Return** `listItems` from your component wrapped in a `<ul>`:

```react
return <ul>{listItems}</ul>;
```

> **Note**: If you do ==output an **array of JSX elements**==, like `[<Card/>, <Card/>]`, then React is capable of rendering on the UI that JSX elements. So if you had something like `[<Card/>, <Card/>]`, ==an array of JSX elements as part of your JSX markup==, React would simply render that elements side by side.

#### Filtering arrays of items 

This data can be structured even more:

```react
const people = [
    {
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
    },
    {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
    },
    {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
    },
    {
        name: 'Percy Lavon Julian',
        profession: 'chemist',  
    },
    {
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
    }
];
```

Let’s say you want a way to only show people whose profession is `'chemist'`. You can use JavaScript’s `filter()` method to return just those people.

```react
const listOfChemists = people.filter(person =>
  if (person.profession === 'chemist') {
    return <li>{person.name}</li>
  }
);
```

## Keeping list items in order with `key`

==You need to give each array item a `key` — a string or a number that uniquely identifies it among other items in that array==:

```react
<li key={person.id}>...</li>
```

> **Note**: JSX elements directly inside a `map()` call always need keys!

Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen `key` helps React infer what exactly has happened, and make the correct updates to the DOM tree.

==The `key` prop is a prop you can add to any component, no matter if it's a custom component or if it's a built-in HTML element==, you can always add `key` prop. If you do add it, if you add the `key` to your component or HTML element, then you can ==help React identify the individual items==. For that you need to ==set a unique value per list item==.

## Displaying several DOM nodes for each list item 

What do you do when each item needs to render not one, but several DOM nodes?

The short [`<>...</>` Fragment](https://beta.reactjs.org/reference/react/Fragment) syntax won’t let you pass a key, so you need to either group them into a single `<div>`, or use the slightly longer and [more explicit `<Fragment>` syntax:](https://beta.reactjs.org/reference/react/Fragment#rendering-a-list-of-fragments)

```react
import { Fragment } from 'react';

// ...

const listItems = people.map(person =>
  <Fragment key={person.id}>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </Fragment>
);
```

==Fragments disappear from the DOM, so this will produce a flat list of `<h1>`, `<p>`, `<h1>`, `<p>`, and so on==.

## Where to get your `key` 

Different sources of data provide different sources of keys:

- **Data from a database:** If your data is coming from a database, you can use the database keys/IDs, which are unique by nature.
- **Locally generated data:** If your data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, [`crypto.randomUUID()`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID) or a package like [`uuid`](https://www.npmjs.com/package/uuid) when creating items.

==Rather than generating keys on the fly, you should include them in your data==.

## Rules of keys 

- ==Keys must be **unique** among siblings==. However, it’s okay to use the same keys for JSX nodes in *different* arrays.
- ==Keys must **not change**== or that defeats their purpose! Don’t generate them while rendering.

A warning is thrown in the browser console if you have two or more identic key: `Warning: Encountered two children with the same key, "goal1"`. ==Keys should be unique so that components maintain their identity across updates==. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.

==Whenever you're working with an **array of JSX elements** React wants a `key` on every element==.

## Why does React need keys?

Why should you add the special `key` prop to list JSX elements? It's required for React to ==correctly **identify** and update (if needed) the list of JSX elements==.

Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.

File names in a folder and JSX keys in an array serve a similar purpose. ==They let us **uniquely** identify an item between its siblings. A well-chosen key provides more information than the position within the array. Even if the *position* changes due to reordering, the `key` lets React identify the item throughout its lifetime==.

> **Pitfall**: ==You might be tempted to use an item’s index in the array as its key. In fact, that’s what React will use if you don’t specify a `key` at all. But the order in which you render items will change over time if an item is inserted, deleted, or if the array gets reordered. Index as a key often leads to subtle and confusing bugs==.
>
> Similarly, do not generate keys on the fly, e.g. with `key={Math.random()}`. This will cause keys to never match up between renders, leading to all your components and DOM being recreated every time. Not only is this slow, but it will also lose any user input inside the list items. Instead, use a stable ID based on the data.
>
> Note that your components won’t receive `key` as a prop. It’s only used as a hint by React itself. If your component needs an ID, you have to pass it as a separate prop: `<Profile key={id} userId={id} />`.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
1. [Rendering lists - beta.reactjs.org](https://beta.reactjs.org/learn#rendering-lists)