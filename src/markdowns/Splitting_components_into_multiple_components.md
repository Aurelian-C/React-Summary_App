# Splitting components into multiple components

As you work on your React app and on your React components, you will notice in any project that your components eventually become bigger and bigger, as you have more and more logic and JSX markup in them. This is something which will naturally happen, that is why React has the component concept.

This concept of components that React have allows you to ==split your application into smaller building blocks==, where every building block/component is focused on ==one core task==, you could say, and then you build your overall user interface by ==combining these building blocks/components==. By doing that, you ==keep every component on its own relatively _small_ and _manageable_==, you keep its code base small and manageable, and you still can build a complex user interface.

Now, there is no rule when to build a new component, whereas as adding more to an existing component.

## Multiple components per one file

==You can have multiple components per one file==, and that this might make sense if a component is really only getting used in that file and not in other files. Thus far, we always had one component per file, and that generally is a good rule to keep, but if you have ==a component that is really only getting used by the other component in that file==, having both components in the same file can make sense too.

```react
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
```

## You build a component tree

==Is considered a good and best practice to put new components into new files, so that you have **one file per component**==, and that will mean that in a React project you will end up with dozens or hundreds of files, because on React project you'll have dozens or hundreds of components, and that's absolutely normal.

![Component_tree](..\img\Component_tree.jpg)

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)