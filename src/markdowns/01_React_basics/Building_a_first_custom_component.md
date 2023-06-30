# Building a first custom component

React applications are built from isolated pieces of UI called components. ==A React component is a **JavaScript function** that you can sprinkle with **markup**==. Components can be as small as a button, or as large as an entire page.

Components are one of the core concepts of React. They are the foundation upon which you build UI.

## Components: UI building blocks 

On the Web, HTML lets us create rich structured documents with its built-in set of tags like `<h1>` and `<li>`:

```html
<article>
  <h1>My First Component</h1>
  <ol>
    <li>Components: UI Building Blocks</li>
    <li>Defining a Component</li>
    <li>Using a Component</li>
  </ol>
</article>
```

This markup represents this article `<article>`, its heading `<h1>`, and an (abbreviated) table of contents as an ordered list `<ol>`. Markup like this, combined with CSS for style, and JavaScript for interactivity, lies behind every sidebar, avatar, modal, dropdown — every piece of UI you see on the Web.

==React lets you combine your markup, CSS, and JavaScript into custom “components”, **reusable UI elements for your app.**== The table of contents code you saw above could be turned into a `<TableOfContents />` component you could render on every page. Under the hood, it still uses the same HTML tags like `<article>`, `<h1>`, etc.

==Just like with HTML tags, you can compose, order and nest components to design whole pages==.

As your project grows, you will notice that many of your designs can be composed by reusing components you already wrote, speeding up your development.

## Defining a component

Traditionally when creating web pages, web developers marked up their content and then added interaction by sprinkling on some JavaScript. This worked great when interaction was a nice-to-have on the web. Now it is expected for many sites and all apps. React puts interactivity first while still using the same technology: **a React component is a JavaScript function that you can sprinkle with markup**.

> **Note**: Before you start to build a component, you need to create first a React project. The easiest way of getting started with a React project is to use a tool called [Create React App](https://github.com/facebook/create-react-app). In real world app, there is a better way of create a React project calling [Vite](https://vitejs.dev/).

==Conceptually, components are just JavaScript functions==. They accept arbitrary inputs (called props) and return JSX markup describing what should appear on the screen. The simplest way to define a component is to write a JavaScript function:

```react
// Custom components names must always start with a capital letter while HTML tags must be lowercase
export default function Profile() { // the "export default" keywords specify the main component in the file.
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  )
}
```

> **Note**: ==A **React component** is basically just a **custom HTML element**. The key difference between custom and built-in HTML elements is that _custom components names must always start with a capital letter while HTML tags must be lowercase_. And indeed **your own custom components must always start with a capital letter**==, so that React is able to detect that is a custom component. Because _the simple rule which React applies is that lowercase elements are built-in HTML elements, so it will look for them as built-in elements, whereas elements starting with an uppercase character are elements defined by you or some other developer_.

The component returns an `<img />` tag with `src` and `alt` attributes. `<img />` is written like HTML, but it is actually JavaScript under the hood! This syntax is called [JSX](https://beta.reactjs.org/learn/writing-markup-with-jsx), and it lets you embed markup inside JavaScript.

==Return statements can be written all on one line==, as in this component:

```react
return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
```

==But if your markup isn’t all on the same line as the `return` keyword, you must wrap it in a pair of parentheses== like this:

```react
return (
  <div>
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  </div>
);
```

Without parentheses, any code on the lines after `return` will be ignored!

## Using a component 

Now that you’ve defined your custom component, you can nest it inside other components.

```react
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

### What the browser sees 

Notice the difference in casing:

- `<section>` and `<h1>` is lowercase, so React knows we refer to an HTML tag.
- `<Profile />` starts with a capital `P`, so React knows that we want to use our component called `Profile`.

And `Profile` contains even more HTML: `<img />`. In the end, this is what the browser sees:

```html
<section>
  <h1>Amazing scientists</h1>
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
</section>
```

> **PITFALL**: Components can render other components, but **you must never nest their definitions:**
>
> ```react
> export default function Gallery() {
>   // 🔴 Never define a component inside another component!
>   function Profile() {}
> }
> ```
>
>  Instead, define every component at the top level:
>
> ```react
> export default function Gallery() {}
> 
> // ✅ Declare components at the top level
> function Profile() {}
> ```
>
> When a child component needs some data from a parent, [pass it by props](https://beta.reactjs.org/learn/passing-props-to-a-component) instead of nesting definitions.

==These custom components are not really HTML elements which end up on the screen, you just use them in your JSX markup. _In the end, what ends up on the screen are just default HTML elements_==.

## An Alternative Way Of Building Components

![Alternative_way_of_building_components](../../img/Alternative_way_of_building_components.jpg)

## Summary

There are always 3 steps to build a custom component:

1. _Create_ a custom component and _export_ it

   ```rea
   export default const CustomComponent = () => {};
   ```

2. _Import_ the custom component in the file where you wanna use it

   ```react
   import CustomComponent from './path/CustomComponent'
   ```

3. _Use_ the custom component

   ```react
   const OtherComponent = () => {
     return (
         <div>
             <CustomComponent/>
         </div>
     )
   };
   ```

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
1. [Your First Component - beta.reactjs.org](https://beta.reactjs.org/learn/your-first-component)
1. [Components and Props - reactjs.org](https://reactjs.org/docs/components-and-props.html)
