# Navigating between pages with `<Link>` component

When the [URL](https://reactrouter.com/en/main/start/concepts#url) changes we call that a "navigation". There are two ways to navigate in React Router:

- [`Link`](https://reactrouter.com/en/main/components/link)
- [`navigate`](https://reactrouter.com/en/main/hooks/use-navigate) hook

`<Link>` is the primary means of navigation. Rendering a `<Link>` allows the user to change the URL when they click it. React Router will prevent the browser's default behavior and tell the [history](https://reactrouter.com/en/main/start/concepts#history) to push a new entry into the [history stack](https://reactrouter.com/en/main/start/concepts#history-stack). The [location](https://reactrouter.com/en/main/start/concepts#location) changes and the new [matches](https://reactrouter.com/en/main/start/concepts#match) will render.

However, links are accessible in that they:

- Still render a `<a href>` so all default accessibility concerns are met (like keyboard, focusability, SEO, etc.)
- Don't prevent the browser's default behavior if it's a right click or command/control click to "open in new tab"

==A **`<Link>`** is an **element** that lets the user navigate to another page by clicking or tapping on it, without sending a new HTTP request==. In `react-router-dom`, ==**a** `<Link>` **renders an accessible** `<a>` **element with a real `href`** that points to the resource it's linking to==. This means that things like right-clicking a `<Link>` work as you'd expect.

Instead of setting a path with the `href` attribute (like you do for `<a>` tag),  ==`<Link>` component uses a `to` prop to setting a path==.

```react
import { Link } from "react-router-dom";

const ProductsPage = () => {
  return (
    <div>
      <h1>This is the Products Page</h1>
      <p>
        Go back to <Link to="/">Home Page</Link>
      </p>
    </div>
  );
};

export default ProductsPage;
```

```react
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>
      </p>
    </>
  );
};

export default HomePage;
```

## Relative links

A relative `<Link to="path">` value (that does not begin with `/`) resolves relative to the parent route, which means that it builds upon the URL path that was matched by the _route that rendered that `<Link>`_. It may contain `..` to link to routes further up the hierarchy. In these cases, `..` works exactly like the command-line `cd` function; each `..` removes one segment of the parent path.

```react
const routes = createBrowserRouter([
  {
    path: 'teams',
    element: <Teams />,
    children: [
      { path: ':teamId', 
      element: <Team /> 
    }],
  },
]);
```

The `<Teams>` component can render links like:

```react
<Link to="psg" />
<Link to="new" />
```

The full path it links to will be `/teams/psg` and `/teams/new`. They inherit the route within which they are rendered. This makes it so your route components don't have to really know anything about the rest of the routes in the app.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
2. [`Link` - reactrouter.com](https://reactrouter.com/en/main/components/link)
3. [Navigating - reactrouter.com](https://reactrouter.com/en/main/start/concepts#navigating)