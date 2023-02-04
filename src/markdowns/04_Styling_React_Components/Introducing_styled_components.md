# Introducing Styled Components

In larger projects, potentially with a lot of developers working on the code, it could happen that a class name is used twice. A class name like "form-control", for example, is used in different parts of an application and therefore unfortunately styles spill over to our components and you might want to avoid this.

==Styled components is a **package** that helps you **build components which have certain styles attached to them**, where the styles really **only affect the components to which they were attached** and not any other components==.

```react
const Button = styled.button`
    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid #8b005d;
    color: white;
    background: #8b005d;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:hover,
    &:active {
        background: #ac0e77;
        border-color: #ac0e77;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
    }
`;
```

The above `style.button` method, and that's the interesting part, will ==return a new button _component_==. Actually, that ==styled package has methods for all HTML elements==.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)