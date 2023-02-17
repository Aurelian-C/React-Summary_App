# Deferring data fetching with `defer()`

React Router provides a feature that allows you to defer when data is loaded. What this that means? Sometimes you wanna load a page component with some data before fetching the data, and show some parts of the that page component already until all the data is fetched. We can defer loading and tell React Router that we actually wanna render a component already even though the data is not fully there yet. To do that we need to import `defer` function from `react-router-dom`.

![Deferring_data_fetching_with_defer](../../img/Deferring_data_fetching_with_defer.jpg)

To `defer()` we pass an object. In this object we bundle all the different HTTP requests we might have going on on the `Events` page component. In the case of `Events` component it's only one request though, the request for all events. I'll give that request a key of `events` for example, though that key is up to you, and then here I'll point at `loadEvents` function, and not just point at it, instead I execute it. So I execute the `loadEvents` function and I stored a value returned by it which is a Promise, since the `loadEvents` function is an async function, in the object passed to the `defer()`.

Now we must have a Promise returned, if we wouldn't have a Promise there would be nothing to defer because the idea behind defer is that we have a value that will eventually resolve to another value, which is the definition of a Promise; and that we wanna load a component and render a component even though that future value isn't there yet. So `loadEvents` must return a Promise and we store that returned Promise under the `events` key in the object which we pass to `defer()` function. And it's now this value returned by defer which we return in our "loader" function. Now this is not everything we have to do though.

> **Note**: If you use `defer()`, in your "loader" function you need to manually parse the response and return from "loader" function the resolved value, not the response (Promise). `defer()` doesn't parse your Response automatically, `defer()` need a parsed Response.

Instead now, as our next step, we have to go to the component where we want to use the deferred data and we still use `useLoaderData` but now the data will now actually be an object that gives us access to the deferred value keys in the `defer()` function, so to `events` key in my case, and in the component we now don't directly render the JSX markup that needs our data, instead what we do in is we return another component provided by `react-router-dom` and that's the `Await` component.

`<Await>` component  has a special `resolve` prop which wants one of our deferred values as a value. Now the `<Await>` component will wait for the "loader" function data to be there, and then between the opening and closing tags, we output a dynamic value which must be a function that will be executed by a React Router once that data is there, so once that Promise resolved, once we have that data.

Now, as a last step, we have to add another component that must be wrapped around the `<Await>` component, and that's the `<Suspense>` component which is imported from `'react'`, so not from `'react-router-dom'`. The `<Suspense>` component is a component which can be used in certain situations to show a fallback whilst we're waiting for other data to arrive.

That's how we can defer data loading. A couple of steps as you can tell but now with that we'll load the `Events` page component and render it before we have the data and will show the fallback until the data is there. This defer feature can speed up your pages and make sure that you're already showing some content whilst you're waiting for other content. It especially shines if you have pages with multiple HTTP requests with different speeds though.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
2. [`defer` - reactrouter.com](https://reactrouter.com/en/main/utils/defer)
3. [`Await` component - reactrouter.com](https://reactrouter.com/en/main/components/await)
4. [`<Suspense>` component - beta.reactjs.org](https://beta.reactjs.org/reference/react/Suspense)