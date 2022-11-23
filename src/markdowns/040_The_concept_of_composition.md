# The concept of composition - `children` props

Sometimes you wanna have a component where you don't configure everything through `props`, but where instead you're able to ==pass content between the opening and closing tags of that component==.

==Out of the box, **you can't use your custom components as wrappers around other kind of content**==. Having content between opening and closing tags doesn't work just like that with custom components as wrappers. ==Out of the box you can only use built-in HTML elements (`<div>` tag, `<h2>` tag etc) as wrappers==. If you want to use custom components as wrappers, you need to use one special `props` that is build into React, which every component receives, even if you're never setting it explicitly, and that is `props.children`:

```react
function Card(props) {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}
```

==`props.children` is a **reserved name**, and the value of this special children prop will always be **the content between the opening and closing tags** of your custom component. This is a concept called **Composition**==.

What do we gain by using composition (custom components as wrappers)? Well, with composition we are able to ==extract some code duplication from inside our HTML/JSX/CSS files into a separate wrapper component==.

In the above example, it's just one `div` tag, but throughout the course you will also see more complex wrapper components which might have a more complex JSX structure, things like modals and alerts. In such cases, being able to extract that often allows you to ==save a lot of code duplication== and it often allows you to ==keep your other components clean==.

Composition is important, you use it all the time when working with React. Whenever you ==combine components==, you are using composition and an especially important part of composition is this ==`props.children` feature which allows you to also create **wrapper components**== which is a special type of component, you could say.

==`props.children` **holds all the content you're passing between the opening and closing tag** off your custom compenent==.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)