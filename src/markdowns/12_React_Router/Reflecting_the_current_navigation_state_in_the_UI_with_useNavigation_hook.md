# Reflecting the current navigation state in the UI with `useNavigation` hook

React Router gives us a `useNavigation` hook which we can use to ==**check the current route transitions state**, so to find out if a transition has been initiated and we're currently still waiting for data to arrive, or if we're done==.

> Note: `useNavigation` let you show/dispay a feedback when a user navigate to a page.

This hook tells you everything you need to know about a page navigation to build pending navigation indicators and optimistic UI on data mutations. Things like:

- Global loading indicators
- Disabling forms while a mutation is happening
- Adding busy indicators to submit buttons
- Optimistically showing a new record while it's being created on the server
- Optimistically showing the new state of a record while it's being updated

We get an object when we call `useNavigation` and that object has a couple of properties, but for us the `state` property is the most important one.

```react
import { useNavigation } from 'react-router-dom';

function PageComponent() {
  const navigation = useNavigation();
    
  return (
    <div>
      {navigation.state === 'loading' && <p>Loading...</p>}
    </div>
  );
}
```

The `state` property is simply a string which is either:

- `idle` if we don't have any active route transition
- `loading` if we're having an active transition and we're loading data
- `submitting` if we're submitting data

The `useNavigation` hook is one way of finding out whether you are currently waiting for data or not, and how you could bring back such a loading indicator.

It's just important to recognize that ==the loading indicator won't be added on the page which you're transitioning to, but instead on some page or a component which is already visible on the screen when the transition is started==.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
2. [`useNavigator` - reactrouter.com](https://reactrouter.com/en/main/hooks/use-navigation)