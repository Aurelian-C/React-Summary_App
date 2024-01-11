# Setting up React Query: `QueryClient()` & `<QueryClientProvider>`

## Install React Query library

To install and set up React Query in our application, we need to install the React Query library. We install React Query by typing in our VSCode terminal the ==**`npm install @tanstack/react-query`**== command.

> **NOTE**: React Query is compatible with React v16.8+ and works with ReactDOM and React Native.

==The library itself is actually called **TanStack Query** because it also works in other frameworks such as Svelte or Vue==. So the official name is not React Query anymore, but I will just keep calling it that way, because that's what many people do, and the name is a bit more friendly as well.

## Set up the **React Query cache** & **provide it** to the app

==The idea behind integrating React Query into our application is very similar to what we did with the Context API or Redux. So is a similar idea of **having the data in one place**, and then **providing it to the whole component tree**.==

To integrating React Query into our application, we need to:

- set up the React Query cache (create a place where the data lives) by using **`new QueryClient()`**;
- provide that cache (data) to our application by using the `<QueryClientProvider>` component.

```react
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// 1. Create a client
const queryClient = new QueryClient()

function App() {
  return (
    // 2. Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <OtherComponents />
    </QueryClientProvider>
  )
}
```

>**NOTE**: ==To `new QueryClient()` we can pass an object that specify a couple of options==. We can specify `defaultOptions`, and then usually what we want is to specify options for our queries. One option that we can experiment with is called `staleTime`. ==`staleTime` is basically the amount of time that the data in the cache will stay fresh, so that it will stay valid, until it is refetched again==:
>
>```react
>const queryClient = new QueryClient({
>  	defaultOptions: {
>        	queries: {
>           	staleTime: 60 * 1000 // 1 minute (60 seconds * 1000 milliseconds)
>        	}
>  	}
>})
>```
>
>_`staleTime` is just one of the many options that we can override_. So React Query sets a few quite aggressive, as they say, defaults options, but as always we can override them.

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