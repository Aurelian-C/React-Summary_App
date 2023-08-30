# Get the current route with `useLocation` hook

In React Router, use the `useLocation` hook to ==get the current route==.

The `useLocation` hook ==**returns an object** containing properties like *pathname*, *search*, and *hash*==. To get the full URL in a React app, use `window.location`.

The `useLocation` hook ==returns the **current [`location`](https://reactrouter.com/en/main/utils/location) object**==. This can be useful if you'd like to perform some side effect whenever the current location changes.

```react
import * as React from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  let location = useLocation();

  React.useEffect(() => {
    // Google Analytics
    ga('send', 'pageview');
  }, [location]);

  return (
    // ...
  );
}
```



## References

1. [`useLocation` - reactrouter.com](https://reactrouter.com/en/main/hooks/use-location)