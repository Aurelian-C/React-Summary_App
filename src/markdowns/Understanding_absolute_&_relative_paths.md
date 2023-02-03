# Understanding absolute & relative paths

==When _defining our routes_, we _define the paths_ for which they should be active==.

In our example below, we got the root wrapper route, and then we got a couple of child routes inside of that route. ==All the paths I'm defining in this example are **absolute paths** because they all start with **`/`**==. This simply means that they're always seen from _after_ the domain name.

> **Note**: ==If a path starts with `/`, it is an absolute path==.

```react
// Absolute paths start with /
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);
```

The absolute paths are always seen after the domain name. This is an important detail. If I change the wrapper path to `/root`, t if I reload the browser page, for `/products`, I don't see anything, but neither do I for `/root/products`. If I type in just `/root` I also don't see anything on the screen.

```react
// Wrong
const router = createBrowserRouter([
  {
    path: "/root",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);
```

If a open the browser developer tools, I see an error `Absoulte route path "/" nested under path "/root" is not valid. An absolute child route must start with the combined path of all its parent routes.`

We have this error because we are clashing route definitions. We're saying that the parent route  should handle all pages that start with `/root`, but then the child pages actually don't start with `/root`. To solve this error we can remove the leading slashes on the child routes and that turns the child route definitions paths to relative paths:

```react
// All children routes are defined like relative paths because they don't start with /
const router = createBrowserRouter([
  {
    path: "/root",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);
```

==When defining child routes like relative paths, this simply means that the **child paths defined like relative paths are appended after the path of the wrapper parent route**. So if we have a child route with a relative path, then React Router will take a look at the path of the parent route and **append the child route path after the parent route path**==.

## `<Link>` or `<NavLink>` with absolute vs relative paths

==If a path starts with `/` then it is an absolute path. The same rule applies to `<Link>` or `<NavLink>` component==.

Clicking the `<Link>` in the example below will always visit `/products`.

```react
import { Link } from 'react-router-dom';

function ProductsPage() {
  return (
    <p>
      Go to <Link to="/products">the list of products</Link>.
    </p>
  );
}
```

==**An absolute path it's added directly _after the domain name_, not after the currently active URL path**==.

We can transform a absolute path to a relative path by removing the `/`. Now the `<Link>` in the example below has a relative path, which means that, by default, ==its path will be added after the currently active routes path==.

```react
import { Link } from 'react-router-dom';

function ProductsPage() {
  return (
    <p>
      Go to <Link to="products">the list of products</Link>.
    </p>
  );
}
```

==When using the `<Link>` component, you also have a special `relative` prop which you can add to it. The `relative` prop can be set to one of two values, to `path` or `route`. With these values you control whether the segment defined on `<Link>` (in our case `products`) is _added relative_ to the **currently active parent route path** _or_ to the **currently active path in the URL**==.

```react
<Link to="products" relative="route" />	//currently active parent route path (default)
<Link to="products" relative="path" />	//currently active path in the URL
```

> Note: The `relative` prop does not matter if you have an absolute path, always that absolute path is added after the domain name.
>
> ```react
> <Link to="/products" relative="path" />	// has no effect, the absolute path is ALWAYS added after the domain name
> ```

### A little example

If you have a relative path, like `..` path which simply goes back, then ==the `relative` prop can be used to control the behavior of React Router==.

```react
<Link to=".." relative="route" /> //remove one segment from the currently active parent route path

<Link to=".." relative="path" /> //remove one segment from the currently active path in the URL
```

> **Note**: ==`..` is a relative path that goes back==.

## Summary

```react
// Absolute paths start with /
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

// All children routes are defined like relative paths because they don't start with /
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);
```

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)