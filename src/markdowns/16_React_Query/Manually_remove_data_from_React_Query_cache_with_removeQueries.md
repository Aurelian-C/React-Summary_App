# Manually remove data from React Query cache with `removeQueries` function

You can ==manually remove data from React Query cache== with `queryClient.removeQueries` function.

The `removeQueries` method can be used to ==remove queries from the cache based on their query keys or any other functionally accessible property/state of the query==.

```react
queryClient.removeQueries({ queryKey, exact: true })
```

==By writing `queryClient.removeQueries()` without any parameter, you will remove all queries that have been accumulated in the cache.==

## Example

```react
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from '../../services/apiAuth';

export function useLogout() {
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries(); // just logging out, we'll of course remove the user from local storage and also from the server, but it will stay inside the React Query cache, because we stored it there. And so if, for some reason, some malicious actor gets access to that, that would be very bad. And so with queryClient.removeQueries() we can remove all queries that have been accumulated in the cache.
    },
  });

  return { logout, isLoading };
}
```

> **NOTE**: The `QueryClient` can be used to _interact with a React Query cache_.

## References

1. [QueryClient - tanstack.com](https://tanstack.com/query/latest/docs/react/reference/QueryClient)
2. [`queryClient.removeQueries` - tanstack.com](https://tanstack.com/query/latest/docs/react/reference/QueryClient#queryclientremovequeries)