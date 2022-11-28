# Controlled vs Uncontrolled Components

The approach of using `ref`s to interact with DOM elements, specifically with `<input/>` elements, also has a special name. We're talking about uncontrolled components, if we access values with a `ref`. Why uncontrolled? Because they're internal state, so the value which is reflected in them is not controlled by React. We rely on the default behavior of the input, where a user is able to enter something, and that entered value is reflected. And we then just fetch it with a React feature (`ref`s), but we don't feed data back into the `<input/>` like we do with `useState()` and `value` prop. So that's why is called uncontrolled, because we're not controlling the state off the `<input/>` element with React.

Now, you can talk about uncontrolled and controlled components, also in the context of other components, but most commonly we have this scenario when we talk about input components, about form components in general, because those components tend to have some internal state, natively by the browser, an input element is configured to take user input and save and reflect it, and when we then work with those components in a React app, _we wanna connect our React state to that_. That's why we typically have this controlled/uncontrolled thing when we work with input components in React.

==When we use `ref`s, we have _uncontrolled input_ components==. The approach we had before with `useState` Hook, where we manage our state and we updated that state on every keystroke, and we feed that state back into the `<input/>` with the `value` prop, so that approach we had before we added `ref`s, that would be the controlled approach. Then we would say that `<input/>` fields are controlled components because their internal state is controlled by React.

#### Controlled Component:

```react
import {useState} from 'react'

// Controlled Component
const ControlledComponent = () => {
    const stateValue = useState('');
    
    const submitHandler = (e) => {
        stateValue = e.target.value;
    };
    
    return (<form onSubmit={submitHandler}>
                <input value={stateValue}/>
            </form>)
};
```

#### Uncontrolled component:

```react
import {useRef} from 'react'

const UncontrolledComponent = () => {
    const refValue = useRef();
    
    const submitHandler = (e) => {
       refValue.current.value = '';
    };
    
    return (<form onSubmit={submitHandler}>
                <input ref={refValue}/>
            </form>)
};
```

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)