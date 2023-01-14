# The concept of composition - `children` props

Sometimes you wanna have a component where you don't configure everything through props, but where instead you're able to ==pass content between the opening and closing tags of that component. Out of the box, **you can't use your custom components as wrappers around other kind of content**. Having content between opening and closing tags doesn't work just like that with custom components as wrappers==.

==Out of the box you can only use built-in HTML elements (`<div>` tag, `<h2>` tag etc) as wrappers. If you want to use custom components as wrappers, you need to use one special props that is build into React, which every component receives, even if you're never setting it explicitly, and that is `props.children`==:

```react
function Card(props) {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}
```

==`props.children` is a **reserved name**, and the value of this special children prop will always be **the content between the opening and closing tags** of your custom component. This is a concept called **Composition**==.

What do we gain by using composition (custom components as wrappers)? Well, with composition we are able to _extract some **code duplication** from inside our HTML/JSX/CSS files into a separate wrapper component_.

In the above example, it's just one `div` tag, but throughout the course you will also see more complex wrapper components which might have a more complex JSX structure, things like modals and alerts. In such cases, being able to extract that often allows you to **save a lot of code duplication** and it often allows you to **keep your other components clean**.

Composition is important, you use it all the time when working with React. Whenever you _combine components_, you are using composition and an especially important part of composition is this ==`props.children` feature which allows you to also create **wrapper components**==, which is a special type of component, you could say.

==`props.children` **holds all the content you're passing between the opening and closing tag** off your custom component==.

## Passing JSX as children: `props.children`

It is common to nest built-in browser tags:

```react
<div>
  <img />
</div>
```

Sometimes you’ll want to nest your own components the same way:

```react
<Card>
  <Avatar />
</Card>
```

When you nest content inside a JSX tag, the parent component will receive that content in a prop called `children`. For example, the `Card` component below will receive a `children` prop set to `<Avatar />` and render it in a wrapper div:

```react
import Avatar from './Avatar.js';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}
```

Try replacing the `<Avatar>` inside `<Card>` with some text to see how the `Card` component can wrap any nested content. It doesn’t need to “know” what’s being rendered inside of it. You will see this flexible pattern in many places.

==You can think of a component with a `children` prop as having a “hole” that can be “filled in” by its parent components with arbitrary JSX markup==. You will often use the `children` prop for visual wrappers: panels, grids, and so on.

![037_props_children](..\img\037_props_children.jpg)

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
1. [Passing JSX as children - beta.reactjs.org](https://beta.reactjs.org/learn/passing-props-to-a-component#passing-jsx-as-children)
