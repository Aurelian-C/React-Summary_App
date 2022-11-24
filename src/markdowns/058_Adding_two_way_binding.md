# Adding two-way binding

Two-way binding is very useful when you're working with html `<form><form/>` _or_ `<input/>` tags, because it ==allows you to gather user input, but then also change it==, for example, upon form submission.

==Two-way binding simply means that for `<input/>` tag we don't just listen events for changes, but we can also pass a new value back into the `<input/>`==, so that we can reset or change the `<input/>` programmatically:

```react
const Component = function() {
    const [stateValue, updatingStateValue] = useState('');
    const handlerFunction = function(e) {
        updatingStateValue(e.target.value);
    }
    
    return <input onChange={handlerFunction} value={stateValue}/>
}
```

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)