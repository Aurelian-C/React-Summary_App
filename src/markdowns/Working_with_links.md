# Working with links

==A **`<Link>`** is an **element** that lets the user navigate to another page by clicking or tapping on it, without sending a new HTTP request==.

In `react-router-dom`, ==**a** `<Link>` **renders an accessible** `<a>` **element with a real `href`** that points to the resource it's linking to==. This means that things like right-clicking a `<Link>` work as you'd expect.

Instead of setting a path with the `href` attribute (like you do for `<a>` tag),  ==`<Link>` component uses a `to` prop to setting a path==.

> **Note**: A relative `<Link to>` value (that does not begin with `/`) resolves relative to the parent route, which means that it builds upon the URL path that was matched by the route that rendered that `<Link>`. It may contain `..` to link to routes further up the hierarchy. In these cases, `..` works exactly like the command-line `cd` function; each `..` removes one segment of the parent path.

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

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
2. [`Link` - reactrouter.com](https://reactrouter.com/en/main/components/link)