# Understanding absolute & relative paths

==When we _defining routes_, we _define the paths_ for which that routes should be active==.

In our example below, we got the root wrapper route, and then we got a couple of child routes inside of that route. ==All the paths defined in this example are **absolute paths** because they all start with **`/`**==. This simply means that they're always seen from _after_ the domain name.

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

If I change the wrapper path to `/root`, if I reload the browser URL page for `/products` I don't see anything on the browser, but neither if I do change the URL to `/root/products`. If I type in just `/root` I also don't see anything on the browser.

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

If a open the browser developer tools, I see an error:

![Absolute_vs_relative_paths](..\img\Absolute_vs_relative_paths.jpg)

==We have this error because we are **clashing route definitions**. We're saying that the parent route  should handle all pages that start with `/root`, but then the child pages actually don't start with `/root`. To solve this error we can _remove the leading slashes on the child routes and that turns the child route definitions paths to relative paths_==:

```react
// All children routes are defined as relative paths because they don't start with /
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

==When defining child routes as relative paths, this means that the **child paths defined as relative paths are appended _after_ the path of the wrapper parent route path**. So if we have a child route with a relative path, then React Router will take a look at the path of the parent route and **append the child route path _after_ the parent route path**==.

## `<Link>` and `<NavLink>` with absolute vs relative paths

Routes paths also play an important role if we think about links. ==If a path starts with `/` then it is an absolute path. The same rule applies to `<Link>` and `<NavLink>` component==.

> **Note**: ==**A link that have an absolute path it's added directly _after the domain name_, not after the currently active path**==.

Clicking the `<Link>` in the example below will always visit `/products` page.

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

We can transform a absolute path to a relative path by removing the `/`. Now the `<Link>` in the example below has a relative path, which means that, ==_by default_, its path will be added after the currently active _routes path_==.

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

### The `relative` prop

==When using the `<Link>` component, you also have a special `relative` prop which you can add to it. The `relative` prop can be set to one of two values, to `path` or `route`. With these values you control whether the segment defined on `<Link>` (in our case `products`) is _added relative_ to the **currently active _parent route path_** _or_ to the **currently active path in the _browser URL_**==.

```react
<Link to="products" relative="route" />	//currently active parent route path (default)
<Link to="products" relative="path" />	//currently active path in the URL browser
```

> Note: ==The `relative` prop does not matter if you have an absolute path==, always that absolute path is added after the domain name.
>
> ```react
> <Link to="/products" relative="path" />	// has no effect, the absolute path is ALWAYS added after the domain name
> ```

### A little example

Let say we have this routes definitions below :

```react
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

If you have a relative path, like `..` path which simply goes back, then ==the `relative` prop can be used to control the behavior of React Router. **A link can set to be "relative" to the _routes definitions_, or "relative" to the _browser URL_**==.

```react
function ProductDetailPage() {
  return <Link to=".." relative="route">Go back!</Link> //remove one segment from the currently active parent route path. This path is resolved relative to the route definitions, so goes up one level to the parent route "/", because <ProductDetailPage> is a children of a parent route "/"
};

function ProductDetailPage() {
  return <Link to=".." relative="path">Go back!</Link> //remove one segment from the currently active path in the browser URL. This path is resolved relative to the browser URL, so goes up one level to the browser URL "/products"
};
```

```react
<Link to=".." relative="route" />   !==   <Link to=".." relative="path" />
// 		  goes to "/"						    goes to "/products"
```

> **Note**: ==`..` is a relative path that goes back _one level_ to the _previously_ active route/URL path==.

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