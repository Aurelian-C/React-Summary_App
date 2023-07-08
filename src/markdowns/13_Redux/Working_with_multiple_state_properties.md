# Working with multiple state properties

Up to this point, we always just worked with an object that has a single property. You can use as a Redux state an object that have multiple properties. Keep in mind that ==when you update a property in that object, you must overwrite the other properties with the old state==.

```react
import { createStore } from 'redux';

const initialState = { 
  firstName: '', 
  lastName: '', 
  age: null, 
  gender: null 
};

function reducerFn(state = {}, action) {
  switch (action.type) {
    case 'CHANGE_FIRST_NAME':
      return { ...state, firstName: action.firstName };
    case 'CHANGE_LAST_NAME':
      return { ...state, lastName: action.lastName };
    case 'SET_AGE':
      return { ...state, age: action.age };
    case 'SET_GENDER':
      return { ...state, gender: action.gender };
    default:
      return state;
  }
}

const store = createStore(reducerFn, initialState);
```

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)