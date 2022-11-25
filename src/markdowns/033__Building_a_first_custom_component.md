# Building a first Custom Component

Before you start to build a component, you need to create first a React project. The easiest way of getting started with a React project is to use a tool called [Create React App](https://github.com/facebook/create-react-app).

==A **React Component** is basically just a **custom HTML element**. The key difference between custom and built-in HTML elements is that _custom elements (components) NOT start with a lowercase character, but with an uppercase character_. And indeed **your own custom Components must start with an uppercase character**==, so that React is able to detect that is a custom Component. Because _the simple rule which React applies is that lowercase elements are built-in HTML elements, so it will look for them as built-in elements, whereas elements starting with an uppercase character are elements defined by you or some other developer_:

```react
// Custom component
function App() {
    return (
        <div>
            <h2>Let's get started!</h2>
            <Expense></Expense>
        </div>
    );
}
```

There are always 3 steps to build a custom component:

1. **Create** a custom component and **export** it
2. **Import** the custom component in the file where you wanna use it
3. **Use** the custom Component

> **Note**: These custom components are not really HTML elements which end up on the screen, you just use them in your code, in your React code, in your JSX code. What ends up on the screen are just the HTML elements. In the end, what ends up on the screen are just default HTML elements.

## What is JSX?

JSX code is basically HTML code inside of JavaScript. JSX stands for ==JavaScript XML== because ==HTML in the end is XML==, you could say.

![033_what_is_JSX](..\img\033_what_is_JSX.jpg)

> **Note**: In the past, in older React projects, you actually needed to use `import React from 'react'` in all your React component files, to be precise, in all files where you used JSX. You'll still see a lot of React projects out there which have these imports therefore. Behind the scene the JSX code is translate to `Reacte.createElement(component, props, ...children)`. ==Each JSX element is just syntactic sugar== for calling `React.createElement(component, props, ...children)`.

## You build a Component Tree

Is considered a good and best practice to put new Components into new files, so that you have ==one file per Component==, and that will mean that in a React project you will end up with dozens or hundreds of files, because on React project you'll have dozens or hundreds of Components, and that's absolutely normal.

How is a Component written in React? A Component in React is just a function and that is a key takeaway, that is super important, definitely keep that in mind. ==A Component in React is just a **JavaScript function**, a special kind of function (special regarding what it returns), that it does **return an JSX code**==, but other than that, it's just a JavaScript function.

> **Note**: _Components are just functions which then return JSX code (HTML code)_, and of course the HTML code do you return in a Component depends on what the Components should render on the screen.

![033_component_tree](..\img\033_component_tree.jpg)

## Outputting Dynamic Data & Working with Expressions in JSX

==You write expressions in JSX code with the help of **curly brackets `{}`**==.

```react
function App(props) {
  return (
    <div>
      {props.items
        .filter((item) => String(item.date.getFullYear()) === filteredYear)
        .map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
    </div>
  );
}
```

## An Alternative Way Of Building Components

![033_alternative_way_of_building_components](..\img\033_alternative_way_of_building_components.jpg)

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)