# Layouts & nested routes

You can nest routes in other route with the help of <code>children</code> property. A child route is like any other route, in that it needs both a path and a component . The one difference is that you place child routes in a `children` array within the parent route.

The `<Outlet>` component specifies ==where the content of the child routes should be rendered==. The `Outlet` component alone allows nested routes to render their `element` content out and anything else the layout route is rendering, i.e. navbars, sidebars, specific layout components, etc.

==An `<Outlet>` should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered==. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.

![Layouts_&_nested_routes](../../img/Layouts_&_nested_routes.jpg)

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
1. [`<Outlet>` - reactrouter.com](https://reactrouter.com/en/main/components/outlet)
