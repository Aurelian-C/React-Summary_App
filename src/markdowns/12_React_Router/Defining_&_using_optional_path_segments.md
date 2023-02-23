# Defining & using optional path segments

You can make a route segment optional by adding a `?` to the end of the segment.

```react
import { useParams } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    // this path will match URLs like
    // - /categories
    // - /en/categories
    // - /fr/categories
    path: '/:lang?/categories',

    // the matching param might be available to the loader
    loader: ({ params }) => {
      console.log(params['lang']); // "en"
    },

    // and the action
    action: ({ params }) => {},
      
    element: <Categories />,
  },
]);

// and the element through `useParams`
function Categories() {
  let params = useParams();
  console.log(params.lang);
}
```

You can have optional static segments, too:

```react
{ path: "/project/task?/:taskId" }
```

## References

1. [Optional segments - reactrouter.com](https://reactrouter.com/en/main/route/route#optional-segments)