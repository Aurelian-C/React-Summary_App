# Writing markup with JSX

You will learn:

- Why React mixes markup with rendering logic
- How JSX is different from HTML
- How to display information with JSX

## Why React mixes markup with rendering logic?

The web has been built on HTML, CSS, and JavaScript. ==For many years, web developers kept content in HTML, design in CSS, and logic in JavaScript — often in separate files! Content was marked up inside HTML while the page’s logic lived separately in JavaScript. But as the Web became more interactive, _logic increasingly determined content. JavaScript was in charge of the HTML!_ This is why **in React, rendering logic and markup live together in the same place — components**==.

> **Note**: _Keeping a button’s rendering logic and markup together ensures that they stay in sync with each other on every edit_. Conversely, details that are unrelated, such as the button’s markup and a sidebar’s markup, are isolated from each other, making it safer to change either of them on their own.

==**Each React component is a JavaScript function** that may contain some markup that React renders into the browser. React components use a _syntax extension_ called JSX to represent that markup==. JSX looks a lot like HTML, but it is a bit stricter, has a few more rules than HTML and can display dynamic information. JSX lets you put markup into JavaScript.

If you have some (perfectly valid) HTML markup and you want to put it into your component by copy and paste it as is, it won’t always work. This is because JSX is stricter and has a few more rules than HTML!

![Writing_markup_with_JSX](../../img/Writing_markup_with_JSX.jpg)

> **Note**: JSX and React are two separate things. They’re often used together, but you *can* use them independently of each other. JSX is a syntax extension, while React is a JavaScript library. Although there are other ways to write components, most React developers prefer the conciseness of JSX, and most codebases use it.

## JSX: Putting markup into JavaScript

JSX is a ==**syntax extension** for JavaScript that lets you **write HTML-like markup inside a JavaScript file**, keeping rendering logic and content in the same place.== JSX produces React “elements”. ==JSX markup is basically **HTML markup inside of JavaScript**==.

> **Note**: JSX stands for _JavaScript XML_ because _HTML in the end is XML_, you could say. JSX lets you _put HTML markup into JavaScript_.

## JSX is only syntactic sugar for the `React.createElement()`

==Fundamentally, JSX just provides _syntactic sugar_ for the `React.createElement(component, props, ...children)` function==:

```react
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>

// compiles into:
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
```

![What_is_JSX](../../img/What_is_JSX.jpg)

Since JSX compiles into calls to `React.createElement`, the `React` library must also always be in scope from your JSX markup. For example, both of the imports are necessary in this code, even though `React` and `CustomButton` are not directly referenced from JavaScript:

```react
import React from 'react';
import CustomButton from './CustomButton';

function WarningButton() {
  // return React.createElement(CustomButton, {color: 'red'}, null);
  return <CustomButton color="red" />;
}
```

> **Note**: In the past, in older React projects, you actually needed to use `import React from 'react'` in all your React component files, or to be precise, in all files where you used JSX markup. You'll still see a lot of React projects out there which have these imports therefore. Behind the scene the JSX markup is translate to `Reacte.createElement(component, props, ...children)`. ==Each JSX element is just **syntactic sugar** for calling `React.createElement(component, props, ...children)`==.

## You can store JSX markup in variables

==You can **store JSX content in variables**==. You are not limited to using JSX only if you return it, you can also use it to create a value, which is stored in a variable:

```react
const content = <p>Text to render</p>;
// or
const expensesContent = filteredExpenses.map((item) => (
    <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
     />
));
```

## The Rules of JSX: how JSX is different from HTML

JSX is stricter than HTML. You have to close tags like `<br />`. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a `<div>...</div>` or an empty `<>...</>` wrapper.

#### 1. Return a single root element

==To return multiple elements from a component, **wrap them with a single parent tag** or if you don’t want to add an extra parent tag to your markup you can write `<>` and `</>` instead==. The `<></>` is an empty tag called _[Fragment.](https://beta.reactjs.org/reference/react/Fragment)_ Fragments let you group things without leaving any trace in the browser HTML tree.

> **Note**: Why do multiple JSX tags need to be wrapped? JSX markup looks like HTML markup, but under the hood it is transformed into plain JavaScript objects. You can’t return two objects from a function without wrapping them into an array. This explains why you also can’t return two JSX tags without wrapping them into another tag or a Fragment.

#### 2. Close all the tags

==JSX requires tags to be explicitly closed==: self-closing tags like `<img>` must become `<img />`, and wrapping tags like `<li>oranges` must be written as `<li>oranges</li>`.

#### 3. camelCase all most of the things!

==JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects==. In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names; for example, their names can’t contain dashes or be reserved words like `class`.

This is why, in React, many HTML and SVG attributes are written in camelCase. For example, instead of `stroke-width` you use `strokeWidth`. Since `class` is a reserved word, in React you write `className` instead, named after the [corresponding DOM property](https://developer.mozilla.org/en-US/docs/Web/API/Element/className).

> **Pitfall**: For historical reasons, [`aria-*`](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) and [`data-*`](https://developer.mozilla.org/docs/Learn/HTML/Howto/Use_data_attributes) attributes are written as in HTML with dashes.

## References

1. [Writing markup with JSX - beta.reactjs.org](https://beta.reactjs.org/learn/writing-markup-with-jsx)
