# How to work with Redux state correctly

Let's talk about the objects which we are returning in our Redux reducer. I mentioned that ==we always return a brand new snapshot, a brand new state object== which Redux will use to replace its existing state with.

So ==the object which we return in the reducer will not be merged with the existing state, but it will **overwrite the existing state**.== We must always set all the other object's properties when we update a part of that object, because we overwrite the old object.

When working with Redux you should ==never mutate the state==, the existing state. Instead, always override it by returning a brand new state object. Because objects and arrays are reference values in JavaScript, it's easy to accidentally override and change the existing state.

Mutating state in Redux can have unwanted and unexpected side effects, where your state gets out of sync, and suddenly the UI is not reflecting your state correctly anymore.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)