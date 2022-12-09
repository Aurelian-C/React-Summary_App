# Adding nested properties as dependencies to `useEffect()`

```react
const Component = () => {
    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;
    
    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("Checking form validity!");
            setFormIsValid(emailIsValid && passwordIsValid);
        }, 500);
        
        return () => {
            console.log("CLEANUP");
            clearTimeout(identifier);
        };
    }, [emailIsValid, passwordIsValid]);
};
```

This actually is now an okay way of updating a state based on other state, because with `useEffect()` we're guaranteed that the code above will run for every state update React performs, which was not the case before where maybe the code ran too early, `useEffect()` only runs after state updates. But, the problem we'll have here is, that this effect runs too often. This will run whenever the `emailState` or the `passwordState` changed. Now that includes cases where maybe just the value changed, which might not be what we want. We actually only care about the validity here. Now it turns out that we updated the validity, now whenever the value changes as well. In this case we can pass nested properties as dependencies in `useEffect()`.

This is an important concept to further optimize `useEffect()` and to avoid unnecessary effect execution. Another use case could be if you have props as a dependency for your effect. You don't wanna re-run the effect whenever prompts change, you only wanna do is when some prompts change, for example, with object destructuring, you can get there.

We used object destructuring to ==add object properties as dependencies to `useEffect()`==:

```react
const { someProperty } = someObject;
useEffect(() => {
    // code that only uses someProperty ...
}, [someProperty]);
```

This is a ==very common pattern and approach==, which is why I typically use it and why I show it here (I will keep on using it throughout the course). I just want to point out, that ==the key thing is NOT that we use destructuring, but that we **pass specific properties instead of the entire object** as a dependency==. We could also write the code above and it would _work in the same way_:

```react
useEffect(() => {
    // code that only uses someProperty ...
}, [someObject.someProperty]);
```

This works just fine as well! But you should **avoid** this code:

```react
useEffect(() => {
    // code that only uses someProperty ...
}, [someObject]);
```

Why? Because now the ==effect function would re-run **whenever ANY property** of `someObject` changes== - not just the one property (`someProperty` in the above example) our effect might depend on.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)