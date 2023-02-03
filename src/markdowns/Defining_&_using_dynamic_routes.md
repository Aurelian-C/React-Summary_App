# Defining & using dynamic routes

`react-router-dom` supports ==**dynamic path segments** or **path parameters**==.

You add a parameter to a path by adding a `:` and then any identifier of you choice:

```react
{path: "/products/:productId"}
```

The `:` signals to `react-router-dom` that the part _after_ the `:` is dynamic. You could thereafter have more hard coded segments if you needed to, but the segment with the `:` is dynamic:

```react
{path: "/products/:productId/newseg"} // only the :productId is a dynamic path segment, newseg is a hardcoded segment path
```

==Dynamic path segments (path parameters) helps us to always **render the same component for different paths (dynamic paths)**==.

![Dynamic_routes1](..\img\Dynamic_routes1.jpg)

Now let's say, that on `<ProductDetailPage>` we of course wanna know for which exact product the page was loaded. We wanna know which `productId` was used so that we could, for example, reach out to backend API and a database to fetch the data for that specific product and display it on the screen.

`react-router-dom` gives us a tool for getting hold of the actual value used instead of the `:productId`, and that tool which we get from `react-router-dom` is `useParams` hook.

The `useParams` hook returns a JavaScript object which contains every dynamic path segment we defined in our route definition as a property.

==With `useParams` hook we can get the dynamic path data that's encoded in the URL==.

![Dynamic_routes](..\img\Dynamic_routes.jpg)

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
2. [`useParams` - reactrouter.com](https://reactrouter.com/en/main/hooks/use-params)