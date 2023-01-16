# JSX limitations & workarounds

You ==can’t return more than one "root" JSX element== (you also can’t store more than one "root" JSX element in a variable).

> **Note**: JSX is that code you return in your Components, which in the end will be rendered to the real DOM by React. That's what JSX is and we use it all the time.

![JSX_limitations](..\img\JSX_limitations.jpg)

## The solution

The solution is to always wrap adjacent elements. You can use as a wrapper any element (`div`, `p`, `header`), or you can also use a custom Component. The main thing that matters is that ==you only have one value which you return or which you store it in a variable==.

![JSX_limitations1](..\img\JSX_limitations1.jpg)

## Creating a Wrapper Component

A ==wrapping element== it's an element which ==won't render anything to the DOM==, but the requirement is not that there must be one root component being rendered to the DOM, ==the requirement just is that there must be **one root element that you return** _or_ that you **store in a variable**==.

```react
// Build a wrapper component
const Wrapper = props => {
  return props.children;
};

export default Wrapper;
```

```react
// Wrap JSX elements with the help of wrapper component
const CustomEl = props => {
  return (
    <Wrapper>
        <h1>Hi there!<h1/>
        <p>Lorem ipsum doloret...<p/>
    </Wrapper>
  );
};

export default CustomEl;
```

## A new problem: "`<div>` soup"

In bigger apps, you can easily end up with tons of unnecessary `<div>`s (or other elements) which add ==no semantic meaning or structure== to the page, but ==are only there because of React's/ JSX requirement==.

![JSX_limitations2](..\img\JSX_limitations2.jpg)

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
