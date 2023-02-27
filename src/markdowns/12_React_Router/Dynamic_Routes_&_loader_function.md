# Dynamic routes & "loader" function object parameter

Within a "loader" function you can get access to the route parameters because ==when the React Router will call the "loader" function passes to it an _object_ parameter that contains two important pieces of data which contains a `request` object and a `params` object.==

## The `params` object

==Route params are parsed from [dynamic segments](https://reactrouter.com/en/main/route/route#dynamic-segments) and passed to your "loader" function via `params` object==. This is useful for figuring out which resource to load:

```react
createBrowserRouter([
  {
    path: "/teams/:teamId",
    loader: ({ params }) => {
      return fakeGetTeam(params.teamId);
    },
  },
]);

// Note that the :teamId in the path is parsed as provided as params.teamId by the same name
```

==The `params` object contains all your route parameters==. With it, you can get access to all the route parameter values as you could do it with help of [`useParams`](https://reactrouter.com/en/main/hooks/use-params) hook, but `useParams` hook could only be used inside a component function, not inside a "loader" function.

![Dynamic_routes_&_loader_function](../../img/Dynamic_routes_&_loader_function.jpg)

## The `request` object

The `request` object parameter in a "loader" function could be used to access the URL to, for example, extract query parameters or anything like that.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
1. [`params` - reactrouter.com](https://reactrouter.com/en/main/route/loader#params)
1. [`request` - reactrouter.com](https://reactrouter.com/en/main/route/loader#request)