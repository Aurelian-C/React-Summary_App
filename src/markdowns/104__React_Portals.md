# React Portals

Fragments allow us to write cleaner code, to end up with less unnecessary HTML elements on the final page. Portals are another useful feature which do something similar, which also help us write cleaner code.

With Fragments and Portals we had two cool features that help us ==write cleaner HTML code==. The app worked in exactly the same way before we added those features too, but with those features we end up with ==semantically more correct HTML code==, and that's never a bad thing. It makes your app more accessible, makes sure you don't render unnecessarily many `<div>` and in general, shows that you are a developer who knows what he's doing.

## Portals

![104_React_Portals](..\img\104_React_Portals.jpg)

We can use a Portal to ==keep the structure that we have in JSX code==, so to keep writing our components the way we want to write them, so that we have no friction when we wanna pass data around and so on, but to still ==render the JSX code differently (in other place) in the real DOM== and to, for example, render the `myModal` HTML content somewhere else than it would normally go to.

![104_React_Portals1](..\img\104_React_Portals1.jpg)

So ==the JSX code structure on the left hasn't changed, but the rendered HTML code is a bit different from our JSX code==. The idea behind Portals is that the rendered HTML content is moved somewhere else that the place where JSX Component is place in your app.

## How to build a Portal

Portals need two things:

- you need a ==**place** you wanna port the Component to==;
- you need to let the Component know that it should have a ==**portal to that place**==.

Now, to mark that place, you go into the public folder, and there into the HTML file which is being rendered in the end. There you could create multiple roots, for different kinds of Components, that should be ported there.

![104_React_Portals2](..\img\104_React_Portals2.jpg)

You use Portals with the help of `ReactDOM.createPortal()`.

> **Note**: The `ReactDOM.createPortal()` method is actually not defined on React, but on another library that comes together with React, the **ReactDOM library**. You can imagine React being the library that has all the React features, state management etc, and **ReactDOM uses React to bring that logic and these features into the web browser**, so to make them compatible to working with the DOM. Put in other words, the React library itself doesn't care whether you run it in an environment that has a DOM, or if you would use it to build a native app. For example, you can use React Native in conjunction with React, to build native mobile apps. So **ReactDOM is kind of the adapter for React to the browser**.

`ReactDOM.createPortal()` method takes ==two arguments==. The first argument need to be a Component that return JSX code. The second argument is a pointer to the container in the real DOM where the JSX code in your Component should be rendered in.

```react
import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay message={props.message onConfirm={props.onConfirm}/>,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default ErrorModal;
```

So wherever you would normally just use a Component, you can use `ReactDOM.createPortal()` to portal that Component's HTML content somewhere else, only in the actual DOM that is being rendered. In JSX, in your Components, you continue working with those Components as you did before.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)