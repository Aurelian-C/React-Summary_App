# Passing Data via "props"

==Props are the **“attributes”** of your “custom HTML elements” (Components)==.

React will ensure that we get ==one parameter in every Component== which we use as a Component, and ==that one parameter will be an **object** which holds all the received **attributes as properties**==, hence the name props for the overall concept. Therefore, we get one parameter, and you can name that parameter whatever you want. Typically, _it's named props to make it clear that is the object which holds all the values we get for the attributes on our custom element_.

==Props is a super important concept because it allows you to **make your components reusable**, and it allows you to **pass data from a component to another component**==.

_Props are not limited to **dynamically** set values. We can do that, but we don't have to. We also **hard coded** value in props_. ==The main idea behind props is always the same though. We wanna make sure that **we can pass data into our components** to make them **configurable** and **reusable**==.

==Props are our way of **passing data** from component A to B, and it's also totally fine to have a **component which just passes data on**==. We pass data from a component to a direct child component, so to a component which is used in that other components JSX code and we can't skip such a component.

> **Note**: The convention for props _which hold functions_ is to start with **"on"**:
>
> ```react
> <Cart onHideModal={hideModalHandler} />
> <Header onShowModal={showModalHandler} />
> ```

![037_passing_data_via_props](..\img\037_passing_data_via_props.jpg)

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)