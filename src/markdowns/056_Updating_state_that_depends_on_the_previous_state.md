# Updating state that depends on the previous state

```react
// NOT do like this
const [item, setItem] = useState( {
	item1: '',
	item2: '',
	item3: '',
})

setItem( {
	...item,
	item1: 'value',
})
```

Whenever you update state and you depend on the previous state, you should not do it like above, but you should use an alternative form of the above state updating function. Instead of calling it like above, you should call it and pass in a function to that function. The function which you pass to `setItem` will automatically be executed by React and it will receive the previous state snapshot for that state for which you're calling the updating function. So we'll get the previous state snapshot, and now we should return the new state snapshot:

```react
// The CORRECT way
setItem( (prevState) => {
	return { ...prevState, item1: 'value'};
})
```

Now why should we do it like this instead of like first example above? In many cases, both will work fine, but keep in mind that I mentioned that ==**Reacts schedules state updates, it doesn't perform them instantly**. And therefore, theoretically, if you schedule a lot of state updates at the same time, you could be depending on an outdated or incorrect state snapshot if you use the first example approach==.

If you use the second approach, React will guarantee that the state snapshot it gives you here in the inner function will always be the latest state snapshot, keeping all scheduled state updates in mind. So he ==second approach is the safer way to ensure that you always operate on the latest state snapshot==. So you should use the second approach function syntax whenever your state update depends on the previous state. That is something you should memorize, if your state update depends on the previous state, use the second approach function syntax.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)