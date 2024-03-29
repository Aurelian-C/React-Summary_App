# Data fetching with a "loader" function

==On each route you can define a "loader" function to **_provide data_ to the route element _before it renders_**==. The route "loader" function is called before the route component is render and provides data for the component through [`useLoaderData`](https://reactrouter.com/en/main/hooks/use-loader-data).

![Loader_function](../../img/Loader_function.jpg)

==When you define a "loader" function, React Router will automatically take any value you return in that "loader" function and will _make that data available in the page that's being rendered_, as well as any other components where you need it.==

With the help of a "loader" function you move all the fetch logic that you have in a component in that "loader" function, and this process make the component way leaner and easier to reason about.

## Use the returned data from a "loader" function with the help of [`useLoaderData`](https://reactrouter.com/en/main/hooks/use-loader-data) hook

To get access to the data returned by a "loader" function for a specific page, you can import `useLoaderData` from `react-router-dom`. ==This hook provides the value returned from your route "loader" function==.

> **Note**: ==`useLoaderData` always get the final data returned by the "loader" function==, even if a "loader" function is an async function. If the "loader" function is an async function, the `useLoaderData` won't return a Promise from the "loader" function, but will return the resolved/rejected value of that async "loader" function.

![Loader_function1](../../img/Loader_function1.jpg)

The `useLoaderData` is a hook which you can execute to get access to the closest "loader" function data. So ==you can access "loader" function data with the help of `useLoaderData` in _any component on the same level or lower level than the component where you added the "loader" function_==, so the route on which you added the "loader" function.

> **Note**: ==**You can use `useLoaderData` in the element that's assigned to a route _and_ in all components that might be used inside that element**==. You just have to be careful that you're not allowed to use `useLoaderData` on a higher level than you're fetching the data.

You can use this hook in any component or any custom hook, not just the Route element. It will return the data from the nearest route on context. To get data from any active route on the page, see [`useRouteLoaderData`](https://reactrouter.com/en/main/hooks/use-route-loader-data).

## Where should "loader" function code be stored?

Is common pattern that you actually put the "loader" function code into your component file where you need it, to be more precise in the page component file where you want to add the "loader" function.

![Loader_function2](../../img/Loader_function2.jpg)

## When are "loader" functions executed?

The "loader" function for a page will be called right when you start navigating to that page, so _NOT AFTER the page component has been rendered_, but BEFORE you actually navigate to that page.

Data fetching is initiated as soon as you initiate the route transition (URL changes). By default, React Router will wait for the data to be fetched, so for the "loader" function to be finished, and ==only when the "loader" function is finished the page component will be rendered with that fetched data==.

## Returning `Response`s in a "loader" function

One important aspect of a "loader" function is to understand that you can return **any kind of data** in that "loader" function. You can return an array, object, number, string etc, but what you can also return is a **[Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) object**. Now what do I mean by that?

Well, in the browser you can create a new `Response` object, by instantiating the built-in `Response` constructor function. ==Whenever you return such a `Response` object in your "loader" function, the **React Router will automatically extract the data from your `Response` object when using `useLoaderData` hook**==. So the data returned by `useLoaderData` will still be the response data that was part of the `Response` you returned in your "loader" function.

Because React Router's support `Response` objects and automatically extract data from them, that simply means that you can simply return the response in your "loader" function. You don't need to manually extract the data from the response, instead ==you can just return your response and `useLoaderData` will automatically give you the data that's part of the `Response`==. With the behavior of `useLoaderData` you can reduce your "loader" function code and leverage this built-in support for `Response` objects.

![Loader_function3](../../img/Loader_function3.jpg)

> **Note**: While you can return anything you want from a loader and get access to it from `useLoaderData`, you can also return a web Response. This might not seem immediately useful, but consider `fetch`. Since the return value of `fetch` is a Response, and "loader" functions understand Responses, many "loader" functions can return a simple fetch!

## Which kind of code goes into a "loader" function?

You can use any browser APIs in your "loader" function. You can, for example, access `localStorage`, you can access cookies, you can do anything you can do in the other JavaScript code as well. What you can't do in your "loader" function is, for example, use React Hooks like `useState`. That doesn't work because those Hooks are only available in React components and the "loader" function is not a React component, but that's the only limitation; any other default browser features can be used in "loader" functions.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
2. [`loader` - reactrouter.com](https://reactrouter.com/en/main/route/loader)
3. [`useLoaderData` - reactrouter.com](https://reactrouter.com/en/main/hooks/use-loader-data)
4. [Returning Responses - reactrouter.com](https://reactrouter.com/en/main/route/loader#returning-responses)