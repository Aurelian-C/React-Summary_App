# Introducing JSX

JSX is a ==**syntax extension** for JavaScript that lets you **write HTML-like markup inside a JavaScript file**==.

## JSX: Putting markup into JavaScript

The web has been built on HTML, CSS, and JavaScript. For many years, web developers kept content in HTML, design in CSS, and logic in JavaScript — often in separate files! Content was marked up inside HTML while the page’s logic lived separately in JavaScript. But as the Web became more interactive, logic increasingly determined content. JavaScript was in charge of the HTML! This is why **in React, rendering logic and markup live together in the same place—components.**

> **Note**: Keeping a button’s rendering logic and markup together ensures that they stay in sync with each other on every edit. Conversely, details that are unrelated, such as the button’s markup and a sidebar’s markup, are isolated from each other, making it safer to change either of them on their own.

Each React component is a JavaScript function that may contain some markup that React renders into the browser. React components use a syntax extension called JSX to represent that markup. JSX looks a lot like HTML, but it is a bit stricter, has a few more rules than HTML and can display dynamic information.

## The Rules of JSX

#### 1. Return a single root element 

To return multiple elements from a component, **wrap them with a single parent tag.** or you can write `<>` and `</>` instead. The `<></>` is a empty tag called  *[Fragment.](https://beta.reactjs.org/reference/react/Fragment)* Fragments let you group things without leaving any trace in the browser HTML tree.

> Why do multiple JSX tags need to be wrapped? JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. You can’t return two objects from a function without wrapping them into an array. This explains why you also can’t return two JSX tags without wrapping them into another tag or a Fragment.

#### 2. Close all the tags 

JSX requires tags to be explicitly closed: self-closing tags like `<img>` must become `<img />`, and wrapping tags like `<li>oranges` must be written as `<li>oranges</li>`.

#### 3. camelCase all most of the things!

JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words like `class`.

This is why, in React, many HTML and SVG attributes are written in camelCase. For example, instead of `stroke-width` you use `strokeWidth`. Since `class` is a reserved word, in React you write `className` instead, named after the [corresponding DOM property](https://developer.mozilla.org/en-US/docs/Web/API/Element/className).

## References

1. [Writing markup with JSX - beta.reactjs.org](https://beta.reactjs.org/learn/writing-markup-with-jsx)