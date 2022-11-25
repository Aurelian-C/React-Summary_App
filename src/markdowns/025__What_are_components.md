# What Are Components? And Why Is React All About Them?

==React is a JavaScript library for **building user interfaces**==. HTML, CSS & JavaScript are about building user interfaces as well. React makes building complex, interactive and reactive user interfaces simpler.

We use libraries like React because that ==simplifies building user interfaces==. We don't need React to build an app, you can build any website without React but if you are having more ==complex user interfaces== and if you use something like React, it all of a sudden becomes ==much easier to build complex applications==.

If you use React you ==won't have to focus on all the nitty-gritty details== and it will be ==less error prone==, because ==you will be able to focus on your core **business logic** that makes up your application, instead of having to focus on the actual steps==, for example updating the page when something happens somewhere. That's why we use libraries like React, and to make that work simpler for us ==React embraces a concept called **"components"**==.

With just the JavaScript, you have to write every single step that should be taken. You want to create an element, you want to set its content, you want to add classes, you want to add a click listener, then what should happen on that click listener. Every single step needs to be described (imperative way).

## What is a Component?

==A Component in React is just a **JavaScript function**, a special kind of function, special regarding what it returns (it does return **JSX** code), but other than that it's just a JavaScript function. Components are just functions which then _return HTML code_==, and of course the HTML code do you return in a Component depends on what the Components should render on the screen.

==Components are **_reusable_ building blocks** in your UI. Components are in the end just a combination of **HTML** code, **CSS** code for styling and possibly **JavaScript** code for some logic==.

> **Note**: You don't have to reuse a component to make it a component, it's just one of its traits that a component is reusable.

## Why Components?

React is all about "Components" because all user interfaces in the end are made up of components. ==React is all about **splitting your application into small building blocks (components)**, where every building block (component) has a **clear task**, and therefore your **code stays _maintainable_ and _manageable_**== and React, the library, will do the heavy lifting of rendering something onto the screen and of combining all your code.

![025_why_components](..\img\025_why_components.jpg)

### Components & Separation of Concerns

Having a separation of concerns helps us with ==keeping our code base _small_ and _manageable_, instead of having one large file which holds all the HTML code and all the JavaScript logic==. For the entire UI we have ==small separated units (components)==, where every component has one clear concern, one focus, ==one specific task it focuses on==. If we ==split our code across multiple files==, then we'll have small pieces of code which are ==easy to manage and maintain==.

These of course are **not concepts or ideas React invented**. If we take a step back from React and we think about programming in general, then of course in any programming language and no matter what you are building, you tend to work with functions and you **split your code into multiple small functions**, which then may call each other to outsource logic into a function, to separate concerns and to be **able to execute the same code multiple times** if you need to.

_React just picks up that concept of functions and of separating code across functions and translates it to the front-end web application world where we built an entire user interface by **splitting our code into multiple components**, which we then can mix and match as we need to_.

## How is a Component built?

==Components are **reusable building blocks** in your user interface==. Components are in the end just a combination of **HTML** code, **CSS** code for styling and possibly **JavaScript** code for some logic. Mostly React components are about combining HTML and JavaScript and then of course, you also can add CSS, but _CSS is not the focus of React_.

![025_why_components](..\img\025_component_build.jpg)

## React & Components

==With just Vanilla JavaScript, we have to write every single step that should be taken to build an app==. We want to create an element, we want to set its content, we want to add classes, we want to add an event (click, scroll etc.), then what should happen on that event. Every single step needs to be described. _This way of programming and bringing something onto the screen, is called an_ ==**Imperative Approach**==. _We simply describe action after action, step after step, and that can reach its limits_.

_React uses something which is called a_ ==**Declarative Approach**== _for building components. This basically means that with React you will not tell React that a certain HTML element should be created and inserted in a specific place on the user interface, as you would be doing it with Vanilla JavaScript_. Instead, with React and that's really important, you will always define the desired end state, the target state or possibly also different target states depending on different conditions, and it's then React job to figure out which elements on the actual webpage might need to be added or removed or updated, and you don't write these concrete DOM updating instructions on your own, as you would be doing it with just Vanilla JavaScript, instead ==with React and React components you just define these end states and under which conditions which state should be used==, and then React will do all of the rest under the hood.

![025_why_components](..\img\025_react_and_components.jpg)

## Splitting Components Into Multiple Components

As you work on your React app and on your React components, you will notice in any project that your components eventually become bigger and bigger, as you have more and more logic and JSX code in them. This is something which will naturally happen, that is why React has the component concept.

This concept of components that React have allows you to ==split your application into smaller building blocks==, where every building block/component is focused on ==one core task==, you could say, and then you build your overall user interface by ==combining these building blocks/components==. By doing that, you ==keep every component on its own relatively _small_ and _manageable_==, and you keep its code base small and manageable, and you still can build a complex user interface.

Now, there is no rule when to build a new component, whereas as adding more to an existing component.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

