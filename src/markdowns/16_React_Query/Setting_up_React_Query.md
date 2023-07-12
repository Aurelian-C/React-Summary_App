# Setting up React Query: `QueryClient()` & `<QueryClientProvider>`

## Install React Query library

To install and set up React Query in our application, we need to install via VSCode terminal the React Query library. We install React Query by typing in our VSCode terminal the ==**`npm install @tanstack/react-query`**== command.

> **NOTE**: React Query is compatible with React v16.8+ and works with ReactDOM and React Native.

==The library itself is actually called **TanStack Query** because it also works in other frameworks such as Svelte or Vue==. So the official name is not React Query anymore, but I will just keep calling it that way because that's what many people do, and the name is a bit more friendly as well.

## Set up the **React Query cache** & **provide it** to the app

==The idea behind integrating React Query into our application is very similar to what we did with the Context API or Redux. So is a similar idea of **having the data in one place**, and then **providing it to the whole component tree**.==

==To set up the React Query cache, first we create a place where the data lives, and then second, we provide that data to our application,== and in the case of React Query, we set up the cache by using **`new QueryClient()`**.

>**NOTE**: To `new QueryClient()` you can pass an object that specify a couple of options. We can specify `defaultOptions`, and then usually what we want is to specify options for our queries. One option that we can experiment with is called `staleTime`. `staleTime` is basically the amount of time that the data in the cache will stay fresh, so that it will stay valid, until it is re-fetched again.
>
>```react
>const queryClient = new QueryClient({
>    defaultOptions: {
>         queries: {
>            staleTime: 60 * 1000 // 1 minute (60 seconds * 1000 milliseconds)
>         }
>    }
>})
>```
>
>`staleTime` is just one of the many, many options that we can override. So React Query sets a few quite aggressive, as they say, defaults options, but as always we can override them.

With `const queryClient = new QueryClient()` we have created our QueryClient, which basically sets up the cache behind the scenes, and now it's time to provide the `queryClient` to our application, so we want to provide our Query data to the entire application tree.

```react
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  )
}
```

## Install React Query DevTools

We can install the React Query DevTools. Just like Redux, React Query also has some excellent DevTools, but we just set them up in a different way. ==In the case of React Query DevTools, it is simply an NPM package and not something in the browser.==

We install the React Query DevTools by typing into the VSCode terminal the **`npm install @tanstack/react-query-devtools`** command.

You can import the DevTools like this:

```react
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
```

==Place the following code as high in your React app as you can. The closer it is to the root of the page, the better it will work!==

```react
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Place the following code as high in your React app as you can. The closer it is to the root of the page, the better it will work! */}
      <ReactQueryDevtools initialIsOpen={false} /> 
      <Todos />
    </QueryClientProvider>
  )
}
```

> **NOTE**: If we don't have anything in our cache, then the ReactQueryDevtools is completely empty, but in the next lecture, we will start fetching some data, and so then that will show up right there in the DevTools.

## References

1. [The Ultimate React Course: React, Redux & More - Jonas Schmedtmann](https://www.udemy.com/course/the-ultimate-react-course/)
2. [React Query - tanstack.com](https://tanstack.com/query/v4/docs/react/overview)
3. [Devtools - tanstack.com](https://tanstack.com/query/v4/docs/react/devtools)