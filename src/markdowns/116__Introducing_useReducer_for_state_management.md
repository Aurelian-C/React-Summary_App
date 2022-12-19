# Introducing `useReducer()` for state management

`useReducer()` is another built-in hook and it will help us with ==state management==.

`useReducer()` is a bit like `useState()`, but actually with more capabilities and especially useful for more ==complex state==, because sometimes you have more complex state, for example, ==multiple states that kind of belong together, that are managing the same thing, just different aspects of it==. Now, this doesn't mean that you should always use `useReducer()` because it's more powerful, so it's always better. No, because it's also a bit more complex to use, it requires a bit more setup. So for a lot of scenarios, for the majority, I would argue you probably use `useState()`.

If you ==update a state which depends on another state==, and/or if you ==set a state that's depends of the another previous state==, then merging that two states into one state could be a good idea, and you can do this with the help of `useReducer()`:

```react
const Componenet = () => {
    const [enteredEmail, setEnteredEmail] = useState("");	// enteredEmail
    const [emailIsValid, setEmailIsValid] = useState();		// setEmailIsValid
    const [enteredPassword, setEnteredPassword] = useState("");	// enteredPassword
    const [passwordIsValid, setPasswordIsValid] = useState(); // setPasswordIsValid
    
    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes('@')); // setEmailIsValid
    };
    
    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6); // setPasswordIsValid
    };
}
```

In this example above, you set a state that depends on another previous state, and you can't use the state updating function for that. Why? Because ==with the state updating function we only get the latest state for that state which we're setting==. These approach of set a state that depends on another previous state without using state updating function, can lead to bugs in your app.

For example, `enteredEmail` state is a different state than our `emailIsvalid` state, they are _two different states, two different variables_. And _we are updating our new `emailIsvalid` state by looking at the `enteredEmail` state, that is another state that `emailIsValid` state, and that is something we should not do_. It works in most cases, but in some scenarios it could not work because maybe some state update for `enteredEmail` wasn't processed in time, and then _we would try to update `emailIsValid` based on some outdated `enteredEmail` state_. So we should use the state updating function, but we can't, because _with the state updating function we only get the latest state for that state which we're setting_. So we would get the latest `emailIsValid` state, not the latest `enteredEmail` state. So that's why state updating function is not an option in `setEmailIsValid`.

This is a scenario where `useReducer()` is always a good choice. ==**If you update a state which depends on another state, then merging that states into one state** could be a good idea==. You can do that without `useReducer()` as well, you could simply manage an email state by using an object with `enteredEmail` and `emailIsValid` being part of the same object. You could do it with the `useState()`, but in such cases _when your state becomes **more complex**, bigger and **combines multiple related states**_, `useReducer()` can also be worth a closer look.

> **Note**: `useReducer()` is an alternative to `useState()`, it's a replacement if you need a more powerful state management. Now, this does _not mean that you should always use `useReducer()` because it's more powerful, so it's always better_. No, because `useReducer()` is also a bit more complex to use, it requires a bit more setup. For a lot of scenarios, for the majority I would argue, you probably use `useState()`, but there are cases where the extra work of getting `useReducer()` to work is just worth it.
>
> ![116_useReducer](..\img\116_useReducer.jpg)

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
