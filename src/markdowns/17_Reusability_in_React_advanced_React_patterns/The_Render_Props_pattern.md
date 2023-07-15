# The Render Props pattern

## Why we need the Render Props pattern?

Lets say we want to reuse the `<List>` component to rendering the `<ProductItem>`, but also for rendering the `<CompanyItem>`.   All that we want to be different between them is the highlighted code between `<ul>{}</ul>` closing tags.

The thing is that in the `<List>` component we have a bunch of stateful logic, which of course we can share using custom hooks. ==But we don't just want to use only `<List>` component stateful logic, we also want to use `<List>` component interface (JSX markup). We want to **use both the _state logic_ and the _UI interface_** that `<List>` component give us,== for `<ProductItem>` and `<CompanyItem>`.

How we can do that because `<ProductItem>` and `<CompanyItem>` are two different components? All of `<List>` component UI interface we couldn't get if we were to share its state logic by simply using React hooks. That's where the Render Props Pattern comes into play.

![Reusability_in_React01](../../img/Reusability_in_React01.jpg)

## The Render Prop pattern

==The Render Prop Pattern is all about **passing in a prop called `render`**, which is **a function that a component uses to know _what it should render_ and _how to do it_.**== Whenever you can't directly pass in JSX markup with the `children` prop, because you need to give the component a description on how to render som ething, then you need to reach for this Render Prop Pattern.

To the `<List>` component we will ==pass in a prop called `render`, which need to be a function. This function will be the instructions of how to render something inside `<List>` component.==

![Reusability_in_React02](../../img/Reusability_in_React02.jpg)

![Reusability_in_React03](../../img/Reusability_in_React03.jpg)

This is what we call **inversion of control** and it's an important principle in software development in general.

Now, the `<List>` component no longer knows actually what it is rendering. It has no idea what will happen inside the `map()` function for each of the display items. All that it knows is that it received a `render` prop that contains a function, and `map()` will call the `render` prop function for each items in the array.

With Render Prop Pattern we achieved our goal of ==reusing all of `<List>` stateful logic and also the UI itself==.

> **NOTE**: The Render Prop Pattern used to be really the main way of sharing stateful logic across multiple components. So that was before we had React hooks, but now that we do have them, the Render Prop is not that used anymore, except for situations like this one and also a few other even more complex situations. So that's why I'm not gonna go really deep into the details and also really compare all the different patterns. Again, because custom hooks are now usually the way to go when we want to share logic.

## References

1. [The Ultimate React Course: React, Redux & More - Jonas Schmedtmann](https://www.udemy.com/course/the-ultimate-react-course/)