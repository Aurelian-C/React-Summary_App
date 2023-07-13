# Setting up React Query: `QueryClient()` & `<QueryClientProvider>`

## Install React Query library

To install and set up React Query in our application, we need to install the React Query library via VSCode terminal. We install React Query by typing in our VSCode terminal the ==**`npm install @tanstack/react-query`**== command.

> **NOTE**: React Query is compatible with React v16.8+ and works with ReactDOM and React Native.

==The library itself is actually called **TanStack Query** because it also works in other frameworks such as Svelte or Vue==. So the official name is not React Query anymore, but I will just keep calling it that way, because that's what many people do, and the name is a bit more friendly as well.

## Set up the **React Query cache** & **provide it** to the app

==The idea behind integrating React Query into our application is very similar to what we did with the Context API or Redux. So is a similar idea of **having the data in one place**, and then **providing it to the whole component tree**.==

To integrating React Query into our application, we need to:

- set up the React Query cache (create a place where the data lives) by using **`new QueryClient()`**;
- provide that cache (data) to our application by using the `<QueryClientProvider>` component.

With `const queryClient = new QueryClient()` we have created our QueryClient, which basically sets up the cache behind the scenes, and now it's time to provide the `queryClient` to our application, so we want to provide our Query data to the entire component tree.

```react
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <OtherComponents />
    </QueryClientProvider>
  )
}
```

>**NOTE**: To `new QueryClient()` you can pass an object that specify a couple of options. We can specify `defaultOptions`, and then usually what we want is to specify options for our queries. One option that we can experiment with is called `staleTime`. ==`staleTime` is basically the amount of time that the data in the cache will stay fresh, so that it will stay valid, until it is re-fetched again==:
>
>```react
>const queryClient = new QueryClient({
>  defaultOptions: {
>        queries: {
>           staleTime: 60 * 1000 // 1 minute (60 seconds * 1000 milliseconds)
>        }
>  }
>})
>```
>
>_`staleTime` is just one of the many options that we can override_. So React Query sets a few quite aggressive, as they say, defaults options, but as always we can override them.

## Install React Query DevTools

We can install the React Query DevTools. Just like Redux, React Query also has some excellent DevTools, but we just set them up in a different way. ==In the case of React Query DevTools, it is simply an **NPM package**, and not something in the browser.==

We install the React Query DevTools by typing into the VSCode terminal the **`npm install @tanstack/react-query-devtools`** command.

You can import the DevTools like this:

```react
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
```

==Place `<ReactQueryDevtools/>` component as high in your React app as you can. The closer it is to the root of the page, the better it will work!==

```react
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Place the following code as high in your React app as you can. The closer it is to the root of the page, the better it will work! */}
      <ReactQueryDevtools initialIsOpen={false} /> 
      <OtherComponents />
    </QueryClientProvider>
  )
}
```

> **NOTE**: If we don't have anything in our cache, then the ReactQueryDevtools is completely empty, but in the next lecture, we will start fetching some data, and so then that will show up right there in the DevTools.

### React Query DevTools: `stale`, `inactive` & `fresh` status

==The `stale` status that you see in React Query DevTools means that the data is out of date (old), so it's basically invalid. So therefore, when we do certain things, React Query will automatically re-fetch the data.== One of the things that we can do, which will then trigger a re-fetch, is to move away from the current browser tab and then come back to it later. So that will trigger a re-fetch as soon _as the data has the staled (`stale` status)_.

You can control the `stale` time by overwrite the `staleTime` property:

```react
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // This means that for 1 minute the fetch data will have the "fresh" status. After 1 minute the data in the cache will become staled/old/out of date (will have the "stale" status)
      staleTime: 60 * 1000 // 1 minute (60 seconds * 1000 milliseconds)
    }
  }
})
```

==The data in the cache becomes inactive (has the `inactive` status) when the component that holds that data is unmounted from the DOM. Although the component is unmounted from the DOM, the data that correspond to that component is preserved in the React Query cache.== When the component is re-mounted to the DOM, React Query will re-fetch the data that correspond to that component automatically, only if it has the `stale` status. ==As long as a component has the `fresh` status, the data in the cache that correspond to that component will not be re-fetch again, even if the component is unmounted and re-mounted to the DOM.==

> **NOTE**: Traditionally, if we were doing fetching inside a component by using a `useEffect` hook, then as soon as the component is re-mounted to the DOM, the `useEffect` hook would then fetch again the data that correspond to that component. When we use the TanStack Query library, this fetch & re-fetch behavior is controlled by React Query.

## React Query Overview

This code snippet very briefly illustrates the ==**3 core concepts** of React Query==:

- ==**[Queries](https://tanstack.com/query/latest/docs/react/guides/queries)**==
- ==**[Mutations](https://tanstack.com/query/latest/docs/react/guides/mutations)**==
- ==**[Query Invalidation](https://tanstack.com/query/latest/docs/react/guides/query-invalidation)**==

These three concepts make up most of the core functionality of React Query.

```react
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { getTodos, postTodo } from '../my-api'

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

function Todos() {
  // Access the client
  const queryClient = useQueryClient()

  // Queries
  const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })

  // Mutations
  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  return (
    <div>
      <ul>
        {query.data?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: 'Do Laundry',
          })
        }}
      >
        Add Todo
      </button>
    </div>
  )
}

render(<App />, document.getElementById('root'))
```

## References

1. [The Ultimate React Course: React, Redux & More - Jonas Schmedtmann](https://www.udemy.com/course/the-ultimate-react-course/)
2. [React Query - tanstack.com](https://tanstack.com/query/latest/docs/react/overview)
3. [Devtools - tanstack.com](https://tanstack.com/query/latest/docs/react/devtools)