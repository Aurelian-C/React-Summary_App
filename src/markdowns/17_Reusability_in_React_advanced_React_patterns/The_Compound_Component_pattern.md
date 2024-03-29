# The Compound Component pattern

Compound components is a **design pattern** used in React where ==you have **a component that doesn't render any UI itself, but instead serves as a container for other components**. These "child" components are typically tightly related and work together to create a unified user interface.==

==By using compound components, you can provide a way for developers to **compose complex UI structures** while **keeping the control and logic centralized in the parent container component.**== This pattern is especially useful when you want to maintain consistency and encapsulation while allowing for flexibility in how the components are used.

==To implement compound components in React, you'll typically **create a parent container component that takes child components as its children and provides them with necessary props or context**. This way, you can ensure that the child components work together seamlessly within the parent container.==

The idea of a Compound Component is that we can ==create a **set of related components** that **together achieve a common and useful task**==, for example, implementing a counter. The Compound Component pattern can also be used in all kinds of components that are actually more useful, for example modal windows, pagination, tables, and so on.

==The alternative to Compound Component would be to create _a component with tons of props_ to exactly configure the component as you wanted, so that would then create a so-called **props explosion**.==

![Reusability_in_React08](../../img/Reusability_in_React08.jpg)

## How to create a Compound Component?

==The way we implement the Compound Component pattern is that we create a parent component, and then a few different child components that really belong to the parent, and that really only make sense when used together with the parent component.== A good example of this is the HTML `<select>` and `<option>` elements. The `<select>` element implements a select box, and the `<option>` element implements each of the select options inside the `<select>` box. These `<option>` elements can really only be used inside a `<select>` element, so they only make sense within `<select>` element.

==**The parent component will keep all the state and state updating logic, and it will pass to its children components via Context API.**==

![Reusability_in_React06](../../img/Reusability_in_React06.jpg)

![Reusability_in_React07](../../img/Reusability_in_React07.jpg)

## Another example

This is an example with a modal build with Compound Components Pattern. This modal will render different content, but each modal will inherit the same functionalities provided by the `<Modal>` parent component.

![Reusability_in_React09](../../img/Reusability_in_React09.jpg) 

![Reusability_in_React10](../../img/Reusability_in_React10.jpg)

## References

1. [The Ultimate React Course: React, Redux & More - Jonas Schmedtmann](https://www.udemy.com/course/the-ultimate-react-course/)