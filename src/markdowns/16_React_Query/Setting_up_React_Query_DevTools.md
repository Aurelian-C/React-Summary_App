# Setting up React Query DevTools

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

> **NOTE**: If we don't have anything in our cache, then the ReactQueryDevtools is completely empty, but in the next lectures, we will start fetching some data, and so then that will show up right there in the DevTools.

### React Query DevTools: `stale`, `inactive` & `fresh` status

==The `stale` status that you see in React Query DevTools means that the data is out of date (old), so it's basically invalid. So therefore, when we do certain things, React Query will automatically refetch the data.== One of the things that we can do, which will then trigger a re-fetch, is to move away from the current browser tab and then come back to it later. So that will trigger a re-fetch as soon _as the data has the staled (`stale` status)_.

> **IMPORTANT**: ==**As long as data is fresh, it will always come from the cache only.**== You will not see a network request for fresh data, no matter how often you want to retrieve it.

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

==The data in the cache becomes inactive (has the `inactive` status) when the **component that holds that data is unmounted from the DOM**. Although the component is unmounted from the DOM, the data that correspond to that component is preserved in the React Query cache.== When the component is remounted to the DOM, React Query will refetch the data that correspond to that component automatically, but only if it has the `stale` status. Keep in mind that ==as long as a component has the `fresh` status, the data in the cache that correspond to that component will not be refetch again, even if the component is unmounted and remounted to the DOM.==

> **NOTE**: Traditionally, if we were doing fetching inside a component by using a `useEffect` hook, then as soon as the component is remounted to the DOM, the `useEffect` hook would then fetch again the data that correspond to that component. When we use the TanStack Query library, this fetch & refetch behavior is controlled by React Query.

## References

1. [Devtools - tanstack.com](https://tanstack.com/query/latest/docs/react/devtools)