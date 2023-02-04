# Adding dynamic inline styles

==You can set the style of an element dynamically by adding the `style` prop, which is a default HTML attribute==, but actually that `style` prop, that `style` attribute, works a little bit differently when building a React application.

==In React `style` prop doesn't want a _string as a value_, instead `style` want _as a value an **object**_==:

```react
// Wrong example
<div style={ 'height: 10px' }></div>

// Good example
<div style={{ backgroundColor: 'red' }}></div>
						// or
const variable = 'red'
<div style={{ backgroundColor: variable }}></div>
```

==In the good example we don't have a special double curly brace syntax, but instead we have a single curly braces for outputting something dynamically, but then the dynamic value is a JavaScript object, which has also created with curly braces==. That's why we overall have the double curly braces, but it's no special style syntax. The only special thing here is that _`style` wants a JavaScript object as a value_, and then this object you should use have the CSS property names as key names and the values as values.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)