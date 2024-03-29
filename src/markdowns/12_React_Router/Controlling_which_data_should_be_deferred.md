# Controlling which data should be _deferred_ and which data should be _loaded_ before navigation

So how does this `defer` feature shine if you have multiple requests with different speeds? You can use `defer` and `await` keyword to control which data is loaded before navigation and which data is deferred before navigation and loaded after the page component was rendered to the screen.

>**Note**: ==Every `<Await>` block must be wrapped with its own `<Suspense>` component, otherwise `<Suspense>` will wait for all `<Await>` components to complete before showing anything==, which is not what you want.

![Deferring_data_fetching_with_defer1](../../img/Deferring_data_fetching_with_defer1.jpg)

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
2. [`defer` - reactrouter.com](https://reactrouter.com/en/main/utils/defer)
3. [`Await` component - reactrouter.com](https://reactrouter.com/en/main/components/await)
4. [`<Suspense>` component - beta.reactjs.org](https://beta.reactjs.org/reference/react/Suspense)