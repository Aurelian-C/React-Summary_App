# How to fetch data programatically with `useQuery()` hook (for example, when a button is clicked)?

According to the [API Reference](https://react-query.tanstack.com/reference/useQuery), you need to ==change the **`enabled` option** to `false` to **disable a query from automatically running**.== Then you refetch manually.

> **IMPORTANT**: The `refetch` function returned by `useQuery` hook is for **refetching with the same parameters**.

```react
import { useQuery } from '@tanstack/react-query';
import { getBookIntroduction } from '../../services/apiBooks';

export function useBookIntroduction() {
  const { data, refetch } = useQuery({
    queryKey: ['book-introduction'],
    queryFn: () => getBookIntroduction(),
    enabled: false,
  });

  return { data, refetch };
}
```

```react
import classes from './BookIntroduction.module.css';
import { useBookIntroduction } from './useBookIntroduction';

export default function BookIntroduction() {
  const { data, refetch } = useBookIntroduction();

  function handleClick() {
    refetch();
  }

  return (
    <button
      onClick={handleClick}
      className={classes.update__button}
    >
      Citește introducerea
    </button>
  );
}
```

> **IMPORTANT**: ==You can pass anything that returns a boolean to `enabled`.== That way you could **create Dependent (or serial) queries**:
>
> ```react
> import { useQuery } from '@tanstack/react-query';
> import { getBookIntroduction } from '../../services/apiBooks';
> 
> export function useBookIntroduction() {
>   const { data, refetch } = useQuery({
>     queryKey: ['book-introduction', data],
>     queryFn: () => getBookIntroduction(),
>     enabled: data, // `data` would be `null` at first (falsy), so the query will not execute until the data exists
>   });
> 
>   return { data, refetch };
> }
> ```

`enabled`: boolean

- Set this to `false` to disable this query from automatically running.
- Can be used for [Dependent Queries](https://tanstack.com/query/v4/docs/react/guides/dependent-queries). Dependent (or serial) queries depend on previous ones to finish before they can execute. To achieve this, it's as easy as using the `enabled` option to tell a query when it is ready to run.

## References

1. [How to `useQuery` when button is clicked - stackoverflow.com](https://stackoverflow.com/questions/62340697/react-query-how-to-usequery-when-button-is-clicked)
1. [`useQuery` - tanstack.com](https://tanstack.com/query/latest/docs/react/reference/useQuery)