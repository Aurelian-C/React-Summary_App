# Query Keys and Automatic Refetching

This is a *very* important concept that cannot be emphasized enough, and it's also something that might take some time to "click". Most people think about queries, and especially refetching, in an *imperative* way.

I have a query, it fetches some data. Now I click this button and I want to refetch, but with different parameters. I've seen many attempts that look like this:

```jsx
function Component() {
  const { data, refetch } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  })

  // ❓ how do I pass parameters to refetch ❓
  return <Filters onApply={() => refetch(???)} />
}
```

The answer is: **You don't.**

==That's not what `refetch` is for - it's for refetching *with the same parameters*.==

==If you have some *state* that changes your data, all you need to do is to put it in the Query Key, because React Query will trigger a refetch automatically whenever the key changes.== So when you want to apply your filters, just change your *client state*:

```jsx
function Component() {
  const [filters, setFilters] = React.useState()
  const { data } = useQuery({
    queryKey: ['todos', filters],
    queryFn: () => fetchTodos(filters),
  })

  // ✅ set local state and let it drive the query
  return <Filters onApply={setFilters} />
}
```

The re-render triggered by the `setFilters` update will pass a different Query Key to React Query, which will make it refetch.

If you want a more depth example, read this article: [Practical React Query - Treat the query key like a dependency array](https://tkdodo.eu/blog/practical-react-query#treat-the-query-key-like-a-dependency-array).

## References

1. [Effective React Query Keys - tkdodo.eu](https://tkdodo.eu/blog/effective-react-query-keys#automatic-refetching)

