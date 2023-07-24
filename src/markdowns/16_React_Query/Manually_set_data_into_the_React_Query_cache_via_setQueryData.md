# Manually set data into the React Query cache via `setQueryData` function

You can ==manually set data into the React Query cache== via `queryClient.setQueryData` function.

`setQueryData` is a **synchronous function** that can be ==used to immediately **update a query's cached data**. If the query does not exist, it will be created.== _If the query is not utilized by a query hook in the default `cacheTime` of 5 minutes, the query will be garbage collected_. To update multiple queries at once and match query keys partially, you need to use [`queryClient.setQueriesData`](https://tanstack.com/query/latest/docs/react/reference/QueryClient#queryclientsetqueriesdata) instead.

```react
queryClient.setQueriesData(['queryKey'], updaterData) // if the updaterData is undefined, the query data is not updated
```

> **NOTE**: The difference between using `setQueryData` and `fetchQuery` is that **`setQueryData` is synchronous** and **assumes that you already synchronously have the data available**. If you need to fetch the data asynchronously, it's suggested that you either re-fetch the query key or use `fetchQuery` to handle the asynchronous fetch.

#### Using an updater function

==For convenience in syntax, you can also pass an updater function which receives the current data value and returns the new one:==

```react
setQueryData(queryKey, oldData => newData)
```

If the updater function returns `undefined`, the query data will not be updated. If the updater function receives `undefined` as input, you can return `undefined` to bail out of the update and thus *not* create a new cache entry.

> ==**IMMUTABILITY**: Updates via `setQueryData` must be performed in an *immuatable* way.== **DO NOT** attempt to write directly to the cache by mutating `oldData` or data that you retrieved via `getQueryData` in place.

## Example

```react
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';

export function useLogin() {
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: user => {
      queryClient.setQueryData(['user'], user); // manually set data into the React Query cache
    },
  });

  return { login, isLoading };
}
```

> **NOTE**: The `QueryClient` can be used to _interact with a React Query cache_.

## References

1. [QueryClient - tanstack.com](https://tanstack.com/query/latest/docs/react/reference/QueryClient)
3. [`queryClient.setQueryData` - tanstack.com](https://tanstack.com/query/latest/docs/react/reference/QueryClient#queryclientsetquerydata)