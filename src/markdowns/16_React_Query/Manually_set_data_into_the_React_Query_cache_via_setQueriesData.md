# Manually set data into the React Query cache via `setQueriesData` function

You can ==manually set data into the React Query cache== via `queryClient.setQueriesData` function.

`setQueriesData` is a synchronous function that can be ==used to immediately **update cached data of multiple queries** by using filter function or partially matching the query key. Only queries that match the passed `queryKey` or `queryFilter` will be updated - no new cache entries will be created.== Under the hood, [`setQueryData`](https://tanstack.com/query/latest/docs/react/reference/QueryClient#queryclientsetquerydata) is called for each existing query:

```react
queryClient.setQueriesData(['queryKey'], data)
```

## Example

```react
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';

export function useLogin() {
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: user => {
      queryClient.setQueriesData(['user'], user); // manually set data into the React Query cache
    },
  });

  return { login, isLoading };
}
```

> **NOTE**: The `QueryClient` can be used to _interact with a React Query cache_.

## References

1. [QueryClient - tanstack.com](https://tanstack.com/query/latest/docs/react/reference/QueryClient)
2. [`queryClient.setQueriesData` - tanstack.com](https://tanstack.com/query/latest/docs/react/reference/QueryClient#queryclientsetqueriesdata)
3. [`queryClient.setQueryData` - tanstack.com](https://tanstack.com/query/latest/docs/react/reference/QueryClient#queryclientsetquerydata)