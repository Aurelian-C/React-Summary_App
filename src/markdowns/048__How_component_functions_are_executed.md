# How component functions are executed

Keep in mind that ==your component is just a regular function==, the only special thing about that function is that it ==returns JSX code==. Now, since it's a function, someone has to call it, and you might notice that we never called our component functions, instead ==we just used that functions like HTML elements== in the JSX code.

If you have a variable in your component function and that variable changes, React ignores it. It doesn't care about that, that code executes, sure, but ==the overall component function **doesn't execute again just because some variable changed**==.

We need a way of telling React that something changed and that a certain component should be re-evaluated, and that's where React introduces a special concept called "state". To tell React that it should run a component function again, we need to import something from the React library.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)