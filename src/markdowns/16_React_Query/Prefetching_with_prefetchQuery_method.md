# Pre-fetching data with `prefetchQuery` method

==Pre-fetching is all about fetching some data that we know might become necessary before we actually need that data to render it on the UI.== An example is when we implement a pagination: in the context of pagination, pre-fetching means that we fetch the next page before it is actually displayed on the UI.

The way pre-fetching works is that we first need get `const queryClient = useQueryClient()`, and then on `queryClient` we call the `.prefetchQuery()` method. You can use the `prefetchQuery` method to ==prefetch the results of a query to be placed into the cache==.

```react
const prefetchTodos = async () => {
  // The results of this query will be cached like a normal query
  await queryClient.prefetchQuery('todos', fetchTodos)
}
```

- If data for this query is already in the cache and **not invalidated**, the data will not be fetched
- If a `staleTime` is passed eg. `prefetchQuery('todos', fn, { staleTime: 5000 })` and the data is older than the specified staleTime, the query will be fetched
- If no instances of `useQuery` appear for a prefetched query, it will be deleted and garbage collected after the time specified in `cacheTime`.

==The way `queryClient.prefetchQuery()` works is basically exactly the same as the `useQuery` hook itself, so we need a `queryKey` and a `queryFn` inside an object.==

![React_Query03](../../img/React_Query03.jpg)

An alternative pre-fetching is to use infinite queries for infinite scroll with React Query. So React Query also has that feature built-in, so if you want, you can check out the documentation and read all about that.

## Manually Priming a Query

Alternatively, if you already have the data for your query synchronously available, you don't need to prefetch it. You can just use the [Query Client's `setQueryData` method](https://tanstack.com/query/v3/docs/react/reference/QueryClient#queryclientsetquerydata) to directly add or update a query's cached result by key.

```js
queryClient.setQueryData('todos', todos)
```

## References

1. [The Ultimate React Course: React, Redux & More - Jonas Schmedtmann](https://www.udemy.com/course/the-ultimate-react-course/)
1. [Prefetching - tanstack.com](https://tanstack.com/query/v3/docs/react/guides/prefetching)