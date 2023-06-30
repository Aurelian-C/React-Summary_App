# Using CSS Modules

Wherever you like styled components or not, as an absolutely personal thing, there is no wrong or right here. Now, when it comes to me personally, ==I prefer CSS in the CSS files. I like the separation of CSS and JavaScript.== I like having clean JavaScript files and I simply like default CSS. Now, of course you can absolutely stick to the CSS approach we used at the beginning, where you had **global non-scoped styles**, and you as a developer had to make sure **you're not accidentally reusing classes names, you're not accidentally affecting the styles of other components**. That is definitely one route you can take. You can also however take CSS to the next level with a feature called CSS Modules.

CSS Modules is a feature which is ==only available in projects that are configured to support it==, because it needs a code transformation that needs to be done before your code runs in the browser. Now, the good thing is the React projects created with [Create React App](https://github.com/facebook/create-react-app) which we used are already configured to support CSS Modules.

There are 3 steps that you need to follow when you use CSS Modules:

1. Name your CSS file component: `ComponentName.module.css`
2. Import you CSS file component in your JavaScript file component: `import classes from './ComponentName.module.css' `
3. Instead of applying a string class name, you refer to that `classes` thing which you're importing from the CSS module file. ==That `classes` thing turns out to be an **object**==, and in that `classes` object you'll have every class name selector you defined in your CSS component file, as a property of that object

==What CSS Modules does under the hood is it takes CSS classes that are in the CSS file that you are importing, and **changes the name of that classes to be unique**. That's the core thing it does, _for every component_ it changes the classes names off the classes that are in the CSS file that you're importing, it generates new classes names to be unique==. Inside of the newly created class names, it will keep your styles declarations, but that styles declarations will be wrapped into the newly created class name.

==CSS Modules concept ensures that the CSS styles you set up in a **CSS file are scoped to the component you import that file into**==. For that you need to work with CSS classes because you access that classes as properties on the imported `classes` object.

```react
import classes from './Button.module.css';

const Button = props => {
    return <button className={classes.cssSelectorWithStyles}>{props.children}</button>;
};
```

==If you have a class name with a name like `.form-control`, you need to access that object property with bracket [`[]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects) notation, example `classes['cssSelectorWithStyles']`, because `.form-control` isn't a valid name for accessing object property with [`.`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects) notation==.

```react
// Wrong 
// form-control isn't a valid name for accessing object property with . notation
const Button = props => {
    return <button className={classes.form-control}>{props.children}</button>; 
};

// Good
const Button = props => {
    return <button className={classes['form-control']}>{props.children}</button>;
};
```

## How to use a global CSS class inside of a CSS Module without scoping it: `:global()`

Let assume that this CSS below belongs to a CSS Module. ==You have a global `active` class defined in your `index.css` and you want to add it as a global class inside your CSS Module==, so you don't want to be scoped to a specific component.  How you will do it?

```css
.nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

/* The .active class is scoped to the component that uses this CSS Module */
.nav .active { 
    flex-wrap: nowrap;
}

/* The .active class is not scoped, it is the .active global class defined in your index.css file */
.nav :global(.active) { 
    flex-wrap: nowrap;
}
```

==The `:global()` function is usually mostly important when you are working with some classes that are provided from external sources.==

> Note: <code>:global()</code> ==switches to global scope for the current selector==.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)