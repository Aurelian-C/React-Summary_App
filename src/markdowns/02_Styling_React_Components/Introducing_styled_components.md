# Introducing Styled Components

In larger projects, potentially with a lot of developers working on the code, it could happen that a class name is used twice. A class name like "form-control", for example, is used in different parts of an application and therefore unfortunately styles spill over to our components and you might want to avoid this.

==Styled components is a **package** that helps you **build components which have certain styles attached to them**, where the styles really **only affect the components to which they were attached** and not any other components==.

==Styled components allow us to **write CSS right inside our JavaScript component files**.== The way it works is that we take a regular HTML element, and then using the styled function we create a brand new React component with some CSS styles applied to it. After that we can use and reuse that new component instead of using the regular HTML element.

Let's start using that ==`styled` function== imported from "styled-components" library. Let's say that we want to style a `button` element. So we write <code>styled.button``</code>, and then we write a template literal which is basically the string in which we are going to write our styles (this is just a nice trick that leverages the ES6 feature called Tagged Template Literals).

```react
import styled from "styled-components";

// The styled function will return a React component, so its name must start with an uppercase letter
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

export default function App() {
  return (
    <div>
      <Button>ClickMe!</Button>
    </div>
  )
}
```

The above `style.button` method, and that's the interesting part, will ==return a new button _component_==. Actually, that ==styled package has methods for all HTML elements==.

> **NOTE**: You install this library with `npm i styled-components`.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)