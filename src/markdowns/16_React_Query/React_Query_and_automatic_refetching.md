# React Query and Automatic/Manually Refetching

## Smart refetches

**Cache invalidation** is pretty hard, so when do you decide it's time to ask the backend again for new data? Surely we can't just do this every time a component that calls `useQuery` re-renders. That would be insanely expensive, even by modern standards.

So React Query is being smart and chooses strategic points for triggering a refetch. Points that seem to be a good indicator for saying: "Yep, now would be a good time to go get some data". These are:

- ==`refetchOnMount`==
  Whenever a new component that calls `useQuery` mounts, React Query will do a revalidation.
- ==`refetchOnWindowFocus`==
  Whenever you focus the browser tab, there will be a refetch. This is my favourite point in time to do a revalidation, but it's often misunderstood. During development, we switch browser tabs very often, so we might perceive this as "too much". In production however, it most likely indicates that a user who left our app open in a tab now comes back from checking mails or reading twitter. Showing them the latest updates makes perfect sense in this situation.
- ==`refetchOnReconnect`==
  If you lose your network connection and regain it, it's also a good indicator to revalidate what you see on the screen.

Finally, if you, as the developer of your app, know a good point in time, you can invoke a manual invalidation via ==`queryClient.invalidateQueries`==. This comes in very handy after you perform a mutation.

## React Query defaults

==React Query comes with [aggressive but sane defaults](https://react-query.tanstack.com/guides/important-defaults), but they are geared towards keeping things up-to-date, *not* to minimize the amount of network requests. This is mainly because **`staleTime` defaults to _zero_**, which means that every time you mount a new component instance, you will get a background refetch.== If you do this a lot, especially with mounts in short succession that are not in the same render cycle, you might see *a lot* of fetches in the network tab. That's because React Query can't deduplicate in such situations:

```jsx
function ComponentOne() {
  const { data } = useTodos()

  if (data) {
    // ⚠️ mounts conditionally, only after we already have data
    return <ComponentTwo />
  }
  return <Loading />
}

function ComponentTwo() {
  // ⚠️ will thus trigger a second network request
  const { data } = useTodos()
}

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ComponentOne />
    </QueryClientProvider>
  )
}
```

At that point, it might seem like a good idea to either pass `data` down via props, or to put it in `React Context` to avoid prop drilling, or to just turn off the `refetchOnMount` / `refetchOnWindowFocus` flags because all of this fetching is just too much!

Generally, there is nothing wrong with passing data as props. It's the most explicit thing you can do, and would work well in the above example. But what if we tweak the example a bit towards a more real-life situation:

```jsx
function ComponentOne() {
  const { data } = useTodos()
  const [showMore, toggleShowMore] = React.useReducer(
    (value) => !value,
    false
  )

  // yes, I leave out error handling, this is "just" an example
  if (!data) {
    return <Loading />
  }

  return (
    <div>
      Todo count: {data.length}
      <button onClick={toggleShowMore}>Show More</button>
      // ✅ show ComponentTwo after the button has been clicked
      {showMore ? <ComponentTwo /> : null}
    </div>
  )
}
```

In this example, our second component (which also depends on the todo data) will only mount after the user clicks a button. Now imagine our user clicks on that button after some minutes. Wouldn't a background refetch be nice in that situation, so that we can see the up-to-date values of our todo list?

This wouldn't be possible if you chose any of the aforementioned approaches that basically bypass what React Query wants to do.

So how can we have our cake and eat it, too?

## Customize `staleTime`

Set `staleTime` to a value you are comfortable with for your specific use-case. The key thing to know is: ==**As long as data is fresh, it will always come from the cache only. You will not see a network request for fresh data, no matter how often you want to retrieve it.**==

There is also no "correct" value for `staleTime`. In many situations, the defaults work really well. Personally, I like to set it to a minimum of 20 seconds to deduplicate requests in that time frame, but it's totally up to you.

## Using `setQueryDefaults`

Since v3, ==React Query supports a great way of **setting default values per Query Key via [`QueryClient.setQueryDefaults`](https://react-query.tanstack.com/reference/QueryClient#queryclientsetquerydefaults)**==. So you can set defaults for any granularity you want, because passing Query Keys to `setQueryDefaults` follows the standard partial matching that e.g. [Query Filters](https://react-query.tanstack.com/guides/filters#query-filters) also have:

```jsx
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ globally default to 20 seconds
      staleTime: 1000 * 20,
    },
  },
})

// 🚀 everything todo-related will have
// a 1 minute staleTime
queryClient.setQueryDefaults(
  todoKeys.all,
  { staleTime: 1000 * 60 }
)
```

## Takeaways

React Query is great at managing async state globally in your app, if you let it. Only turn off the refetch flags if you know that make sense for your use-case, and resist the urge to sync server data to a different state manager. Usually, customizing `staleTime` is all you need to get a great UX while also being in control of how often background updates happen.

## References

1. [React Query as a State Manager - tkdodo.eu](https://tkdodo.eu/blog/react-query-as-a-state-manager)