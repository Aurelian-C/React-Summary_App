# Updating objects in state





## Using one state instead (and what's better)

```react
// Case 1: Using multiple states
const [item1, setItem1] = useState('');
const [item2, setItem2] = useState('');
const [item3, setItem3] = useState('');

// Case 2: Using one state
onst [item, setItem] = useState({
    item1: '',
	item2: '',
	item3: '',
});
```

==The difference is when you updating object in the state nr. 2, you MUST UPDATING ALL OBJECT PROPERTIES, because **when you update your state React will not merge the new properties with properties in the old state, it will _simply replace the old state with the new one_**, and if your new one is a object with one key value pair, the old state will be replaced and therefore the other two key value pairs would be lost==. So if you go for one state approach and you manage such a object, it's all your responsibility to make sure that the other data does not get lost, and to do that you manually need to copy the other values which you're not updating in that place.

One way of doing this would be to use the spread operator and you copy in `item` constant and then you just override `item1`:

```react
setItem({
	...item,
	item1: 'value',
});
```

This would be an alternative to having the three individual state slices, like in case 1 above.

> **Note**: I tend to **prefer the individual state slices**, and I would say you also see that more often out there in the world, in other React projects, but ultimately both approaches are fine.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
1. [Updating Objects in State - beta.reactjs.org](https://beta.reactjs.org/learn/updating-objects-in-state)