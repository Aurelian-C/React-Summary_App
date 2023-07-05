# Attaching payloads to actions

Up to this point, we only dispatched simple actions. They only had a `type` property, nothing else. ==In reality, you often wanna dispatch actions that also carry an extra value.==

```react
import { useSelector, useDispatch } from 'react-redux'

export default Component() {
  const dispatch = useDispatch();
  const str = useSelector(state => state.word)
    
  function handleInputChange(e) {
     dispatch({
        type: 'ADD',
        payload: e.target.value,
     })
  }
    
  return <input onChange={handleInputChange} value={str} />
}
```

```react
import { createStore } from 'redux'

const initialState = { word: '' };

function reducerFn(state = {}, action) {
   if (action.type === 'ADD') {
       return { ...state, ...action.payload }
   }
}

const store = createStore(reducerFn, initialState);
```

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)