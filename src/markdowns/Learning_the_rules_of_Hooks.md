# Learning the "Rules of Hooks"

**React Hooks** are simply all those **functions** that start with the word 'use' (`useState`, `useContext`, `useEffect` etc).  You can also write your own Hooks by combining the existing ones. Hooks are more restrictive than regular functions.

There are **two main rules** you have to know when it comes to working with React Hooks:

1. Only call React Hooks in **React Functions**! That means in a _React Component Function_, or also allowed in a _Custom Hook Function_.
2. Only call React Hooks at the **Top Level** of your _React Component Function_ or _Custom Hook Function_.

![Learning_the_rules_of_hooks](..\img\Learning_the_rules_of_hooks.jpg)

**Hooks — functions starting with `use` — can only be called at the top level of your components or [your own Hooks.](https://beta.reactjs.org/learn/reusing-logic-with-custom-hooks)** You can’t call Hooks inside conditions, loops, or other nested functions. Hooks are functions, but it’s helpful to think of them as unconditional declarations about your component’s needs. You “use” React features at the top of your component similar to how you “import” modules at the top of your file.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
1. [Using Hooks - beta.reactjs.org](https://beta.reactjs.org/learn#using-hooks)