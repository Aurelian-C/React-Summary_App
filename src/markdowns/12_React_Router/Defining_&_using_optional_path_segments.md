# Defining & using optional path segments

In React Router, optional segments allow you to ==define parts of the URL path that are optional for the route to match==. You can make a route segment optional by adding a `?` to the end of the segment.

```react
const routes = createBrowserRouter([
  { 
     path: '/users/:id/:section?',
     element: <User /> 
  }
]);
```

In this route, `:id` is a required parameter, meaning the route will only match if there's a value provided for `id`. However, `:section?` is an optional parameter, indicated by the `?` symbol after the parameter name.

So, with this route:

- `/users/123` *would match*, with `id` being "123" and `section` being undefined.
- `/users/123/about` *would also match*, with `id` being "123" and `section` being "about".

==Optional segments are useful when you have routes where certain parts may or may not be present in the URL, and you want to handle both cases within the same route handler or component.== They provide flexibility in defining your route structure and handling various URL configurations.

## Another example

```react
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'anunt/:propertyId', element: <PropertyDetailsPage /> },
      {
        path: 'anunturi/:transaction?/:city?/:neighborhood?',
        element: <PropertiesAdsPage />,
      },
    ],
  },
  { path: '/autentificare', element: <SignInPage /> },
  { path: '/inregistrare', element: <SignUpPage /> },
  { path: '/recuperare-parola', element: <ForgotPasswordPage /> },
]);
```



## References

1. [Optional segments - reactrouter.com](https://reactrouter.com/en/main/route/route#optional-segments)