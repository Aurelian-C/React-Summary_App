# Showing error pages with `errorElement`



`ErrorPage` component:

![Showing_error_messages](..\..\img\Showing_error_messages.jpg)

Instead of generate a default error when a page is not found, render the `ErrorPage`:

![Showing_error_messages1](..\..\img\Showing_error_messages1.jpg)

==When we enter a URL that doesn't exist, the `react-router-dom` package will generate an error==, and that error will automatically bubble up to the root route definition, so to the route that is defined `path: "/"`.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)