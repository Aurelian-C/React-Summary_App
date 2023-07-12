# Fetching data with `useQuery` hook

The most important hook that we're going to use all the time is called the `useQuery` hook.

To `useQuery` we need to pass in an object with two things:

1. ==The `queryKey` that **uniquely identify the data** that we're going to query==.  The `queryKey` can hold as a value a complex array, or it can just be an array with a string, but ==it needs to be **an array**==.  The string that we pass to `queryKey` is what we will later also see insight or React Query DevTools. If later we would use `useQuery` on another page with the exact key, then the data that correspond to that key would be read from the React Query cache.

   ```react
   import { useQuery } from '@tanstack/react-query'
   
   function Todos() {
     const query = useQuery({ queryKey: ['todos'] });
   }
   ```

2. ==The `queryFn` (query function)==. `queryFn` is the function that the query will use to _request data from the API_. What's important is that _the query function needs to return a Promise_.

   ```react
   import { getTodos } from '../my-api'
   import { useQuery } from '@tanstack/react-query'
   
   function Todos() {
     const query = useQuery({
       queryKey: ['todos'], 
       queryFn: getTodos, // this function always need to return a Promise
     });
   }
   ```

==The `useQuery` hook will **return an object** with a bunch of useful properties== that we can use in our app. The most important property is `data`. Another useful property is `isLoading`.

## React Query Overview

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
```

## References

1. [The Ultimate React Course: React, Redux & More - Jonas Schmedtmann](https://www.udemy.com/course/the-ultimate-react-course/)
1. [`useQuery` - tanstack.com](https://tanstack.com/query/latest/docs/react/reference/useQuery)