# Query invalidation

Waiting for queries to become stale before they are fetched again doesn't always work, especially when you know for a fact that a query's data is out of date because of something the user has done. For that purpose, ==the `QueryClient` has an `invalidateQueries` method that lets you intelligently **mark queries as stale**== and potentially re-fetch them too!

> **NOTE**: The `QueryClient` can be used to _interact with a cache_.

```react
// Invalidate every query in the cache
queryClient.invalidateQueries()

// Invalidate every query with a key that starts with `todos`
queryClient.invalidateQueries({ queryKey: ['todos'] })
```

When a query is invalidated with `invalidateQueries`, two things happen:

- it is marked as stale. This stale state overrides any `staleTime` configurations being used in `useQuery` or related hooks;
- if the query is currently being rendered via `useQuery` or related hooks, it will also be re-fetched in the background.

The `invalidateQueries` method can be ==used to **_invalidate and refetch single or multiple queries in the cache_ based on their query keys or any other functionally accessible property/state of the query**. By default, all matching queries are immediately marked as invalid and active queries are re-fetched in the background.==

- If you **do not want active queries to refetch**, and simply be marked as invalid, you can use the `refetchType: 'none'` option
- If you **want inactive queries to refetch** as well, use the `refetchType: 'all'` option

```react
await queryClient.invalidateQueries({
  queryKey: ['posts'],
  exact,
  refetchType: 'active',
}, { throwOnError, cancelRefetch })
```

## Query matching with `invalidateQueries`

When using APIs like `invalidateQueries` and `removeQueries` (and others that support partial query matching), ==you can **match multiple queries by their prefix**, or get really specific and **match an exact query**.== For information on the types of filters you can use, please see [Query Filters](https://tanstack.com/query/latest/docs/react/guides/filters#query-filters).

In this example, we can ==use the `todos` prefix to invalidate any queries that start with `todos` in their query key==:

```react
import { useQuery, useQueryClient } from '@tanstack/react-query'

// Get QueryClient from the context
const queryClient = useQueryClient()

queryClient.invalidateQueries({ queryKey: ['todos'] })

// Both queries below will be invalidated
const todoListQuery = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodoList,
})
const todoListQuery = useQuery({
  queryKey: ['todos', { page: 1 }],
  queryFn: fetchTodoList,
})
```

You can even ==invalidate queries with specific variables== by passing a more specific query key to the `invalidateQueries` method:

```react
queryClient.invalidateQueries({
  queryKey: ['todos', { type: 'done' }],
})

// The query below will be invalidated
const todoListQuery = useQuery({
  queryKey: ['todos', { type: 'done' }],
  queryFn: fetchTodoList,
})

// However, the following query below will NOT be invalidated
const todoListQuery = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodoList,
})
```

The `invalidateQueries` API is very flexible, so even if you want to ==**only** invalidate `todos` queries that don't have any more variables or subkeys==, you can pass an ==**`exact: true`** option to the `invalidateQueries` method==:

```react
queryClient.invalidateQueries({
  queryKey: ['todos'],
  exact: true,
})

// The query below will be invalidated
const todoListQuery = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodoList,
})

// However, the following query below will NOT be invalidated
const todoListQuery = useQuery({
  queryKey: ['todos', { type: 'done' }],
  queryFn: fetchTodoList,
})
```

If you find yourself wanting **even more** granularity, ==you can **pass a _predicate function_** to the `invalidateQueries` method==. This function will receive each `Query` instance from the query cache and allow you to return `true` or `false` for whether you want to invalidate that query:

```react
queryClient.invalidateQueries({
  predicate: (query) =>
    query.queryKey[0] === 'todos' && query.queryKey[1]?.version >= 10,
})

// The query below will be invalidated
const todoListQuery = useQuery({
  queryKey: ['todos', { version: 20 }],
  queryFn: fetchTodoList,
})

// The query below will be invalidated
const todoListQuery = useQuery({
  queryKey: ['todos', { version: 10 }],
  queryFn: fetchTodoList,
})

// However, the following query below will NOT be invalidated
const todoListQuery = useQuery({
  queryKey: ['todos', { version: 5 }],
  queryFn: fetchTodoList,
})
```

## References

1. [Query Invalidation - tanstack.com](https://tanstack.com/query/latest/docs/react/guides/mutations)
1. [QueryClient - tanstack.com](https://tanstack.com/query/latest/docs/react/reference/QueryClient)
1. [`queryClient.invalidateQueries` - tanstack.com](https://tanstack.com/query/latest/docs/react/reference/QueryClient#queryclientinvalidatequeries)