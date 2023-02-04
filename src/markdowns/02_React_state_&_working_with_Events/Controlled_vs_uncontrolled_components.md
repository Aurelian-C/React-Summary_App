# Controlled (stateless) vs Uncontrolled (stateful) components

You wanna split up your application into small reusable pieces and most pieces, most components indeed will only focus on outputting something, on having some JSX code, maybe some transformation logic and maybe some CSS code, but it's only a couple of components which typically do manage state, and then this state is spread out and distributed through props in the end.

![Stateless_vs_stateful_components](..\img\Stateless_vs_stateful_components.jpg)

==It is common to call a component with some _local state_ "uncontrolled". For example, a child component that have a state variable that can be changed by its parent component is called an uncontrolled component==.

In contrast, you might say ==a component is "controlled" when the important data in it is driven by props rather than its own local state. This lets the parent component fully specify its behavior==.

==Uncontrolled components are easier to use within their parents because they require less configuration. But they’re less flexible when you want to coordinate them together. Controlled components are maximally flexible, but they require the parent components to fully configure them with props==.

In practice, “controlled” and “uncontrolled” aren’t strict technical terms—each component usually has some mix of both local state and props. However, this is a useful way to talk about how components are designed and what capabilities they offer.

==When writing a component, consider which information in it should be **controlled (via props)**, and which information should be **uncontrolled (via state)**==. But you can always change your mind and refactor later.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
1. [Sharing State Between Components - beta.reactjs.org](https://beta.reactjs.org/learn/sharing-state-between-components)
