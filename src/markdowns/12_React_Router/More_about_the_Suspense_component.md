# More about the `<Suspense>` component

==`<Suspense>` lets you **_display a fallback_ until its children have finished loading**==.

```react
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>
```

Usage

- Displaying a fallback while content is loading
- Revealing content together at once
- Revealing nested content as it loads
- Showing stale content while fresh content is loading
- Preventing already revealed content from hiding
- Indicating that a transition is happening
- Resetting Suspense boundaries on navigation
- Providing a fallback for server errors and server-only content

Troubleshooting

- How do I prevent the UI from being replaced by a fallback during an update?

## `<Suspense>` props

#### ==`children`==

==The actual UI you intend to render==. If `children` suspends while rendering, the Suspense boundary will switch to rendering `fallback`.

#### ==`fallback`==

==An alternate UI to render in place of the actual UI if it has not finished loading==. Suspense will automatically switch to `fallback` when `children` suspends, and back to `children` when the data is ready. If `fallback` suspends while rendering, it will activate _the closest parent Suspense boundary_.

## Caveats 

- React does not preserve any state for renders that got suspended before they were able to mount for the first time. When the component has loaded, React will retry rendering the suspended tree from scratch.
- If Suspense was displaying content for the tree, but then it suspended again, the `fallback` will be shown again unless the update causing it was caused by [`startTransition`](https://beta.reactjs.org/reference/react/startTransition) or [`useDeferredValue`](https://beta.reactjs.org/reference/react/useDeferredValue).
- If React needs to hide the already visible content because it suspended again, it will clean up [layout Effects](https://beta.reactjs.org/reference/react/useLayoutEffect) in the content tree. When the content is ready to be shown again, React will fire the layout Effects again. This lets you make sure that Effects measuring the DOM layout don’t try to do this while the content is hidden.

## Displaying a fallback while content is loading

==You can wrap any part of your application with a Suspense boundary==:

```react
<Suspense fallback={<Loading />}>
  <Albums />
</Suspense>
```

React will display your loading fallback until all the code and data needed by the children has been loaded.

## Revealing content together at once 

==By default, the whole tree inside Suspense is treated as a single unit==. For example, even if *only one* of these components suspends waiting for some data, *all* of them together will be replaced by the loading indicator:

```react
<Suspense fallback={<Loading />}>
  <Biography />
  <Panel>
    <Albums />
  </Panel>
</Suspense>
```

Then, after all of them are ready to be displayed, they will all appear together at once.

Let say that in the example below, both `Biography` and `Albums` fetch some data. However, because they are grouped under a single Suspense boundary, these components always “pop in” together at the same time.

==Components that load data don’t have to be direct children of the Suspense boundary==. For example, you can move `Biography` and `Albums` into a new `Details` component. This doesn’t change the behavior. Because `Biography` and `Albums` share the same closest parent Suspense boundary, their reveal is coordinated together.

```react
<Suspense fallback={<Loading />}>
  <Details artistId={artist.id} />
</Suspense>

function Details({ artistId }) {
  return (
    <>
      <Biography artistId={artistId} />
      <Panel>
        <Albums artistId={artistId} />
      </Panel>
    </>
  );
}
```

## Revealing nested content as it loads 

==When a component suspends, the _closest parent Suspense component_ shows the fallback. This lets you **nest multiple Suspense components to create a _loading sequence_**==. Each Suspense boundary’s fallback will be filled in as the next level of content becomes available. For example, you can give the album list its own loading fallback:

```react
<Suspense fallback={<BigSpinner />}>
  <Biography />
  <Suspense fallback={<AlbumsGlimmer />}>
    <Panel>
      <Albums />
    </Panel>
  </Suspense>
</Suspense>
```

With this change, displaying the `Biography` doesn’t need to “wait” for the `Albums` to load.

The sequence will be:

1. If `Biography` hasn’t loaded yet, `BigSpinner` is shown in place of the entire content area.
2. Once `Biography` finishes loading, `BigSpinner` is replaced by the content.
3. If `Albums` hasn’t loaded yet, `AlbumsGlimmer` is shown in place of `Albums` and its parent `Panel`.
4. Finally, once `Albums` finishes loading, it replaces `AlbumsGlimmer`.

==Suspense boundaries let you coordinate which parts of your UI should always “pop in” together at the same time, and which parts should progressively reveal more content in a sequence of loading states==. You can add, move, or delete Suspense boundaries in any place in the tree without affecting the rest of your app’s behavior.

Don’t put a Suspense boundary around every component. Suspense boundaries should not be more granular than the loading sequence that you want the user to experience. If you work with a designer, ask them where the loading states should be placed — it’s likely that they’ve already included them in their design wireframes.

## Preventing already revealed content from hiding 

When a component suspends, the closest parent Suspense boundary switches to showing the fallback. This can lead to a jarring user experience if it was already displaying some content. To prevent this from happening, you can mark the navigation state update as a *transition* with [`startTransition`:](https://beta.reactjs.org/reference/react/startTransition)

```react
function Router() {
  const [page, setPage] = useState('/');

  function navigate(url) {
    startTransition(() => {
      setPage(url);      
    });
  }
  // ...
```

This tells React that the state transition is not urgent, and it’s better to keep showing the previous page instead of hiding any already revealed content.

A transition doesn’t wait for *all* content to load. It only waits long enough to avoid hiding already revealed content.

## Resetting Suspense boundaries on navigation 

During a transition, React will avoid hiding already revealed content. However, if you navigate to a route with different parameters, you might want to tell React it is *different* content. You can express this with a `key`:

```react
<ProfilePage key={queryParams.id} />
```

Imagine you’re navigating within a user’s profile page, and something suspends. If that update is wrapped in a transition, it will not trigger the fallback for already visible content. That’s the expected behavior.

However, now imagine you’re navigating between two different user profiles. In that case, it makes sense to show the fallback. For example, one user’s timeline is *different content* from another user’s timeline. By specifying a `key`, you ensure that React treats different users’ profiles as different components, and resets the Suspense boundaries during navigation.

## Providing a fallback for server errors and server-only content 

If you use one of the [streaming server rendering APIs](https://beta.reactjs.org/reference/react-dom/server) (or a framework that relies on them), React will also use your `<Suspense>` boundaries to handle errors on the server. If a component throws an error on the server, React will not abort the server render. Instead, it will find the closest `<Suspense>` component above it and include its fallback (such as a spinner) into the generated server HTML. The user will see a spinner instead of an error.

On the client, React will attempt to render the same component again. If it errors on the client too, React will throw the error and display the closest [error boundary.](https://beta.reactjs.org/reference/react/Component#static-getderivedstatefromerror) However, if it does not error on the client, React will not display the error to the user since the content was eventually displayed successfully.

You can use this to opt out some components from rendering on the server. To do this, throw an error from them in the server environment and then wrap them in a `<Suspense>` boundary to replace their HTML with fallbacks:

```react
<Suspense fallback={<Loading />}>
  <Chat />
</Suspense>



function Chat() {
  if (typeof window === 'undefined') {
    throw Error('Chat should only render on the client.');
  }
  // ...
}
```

The server HTML will include the loading indicator. It will be replaced by the `Chat` component on the client.

## How do I prevent the UI from being replaced by a fallback during an update? 

Replacing visible UI with a fallback creates a jarring user experience. This can happen when an update causes a component to suspend, and the nearest Suspense boundary is already showing content to the user.

To prevent this from happening, [mark the update as non-urgent using `startTransition`](https://beta.reactjs.org/reference/react/Suspense#preventing-already-revealed-content-from-hiding). During a transition, React will wait until enough data has loaded to prevent an unwanted fallback from appearing:

```react
function handleNextPageClick() {
  // If this update suspends, don't hide the already displayed content
  startTransition(() => {
    setCurrentPage(currentPage + 1);
  });
}
```

This will avoid hiding existing content. However, any newly rendered `Suspense` boundaries will still immediately display fallbacks to avoid blocking the UI and let the user see the content as it becomes available.

**React will only prevent unwanted fallbacks during non-urgent updates**. It will not delay a render if it’s the result of an urgent update. You must opt in with an API like [`startTransition`](https://beta.reactjs.org/reference/react/startTransition) or [`useDeferredValue`](https://beta.reactjs.org/reference/react/useDeferredValue).

If your router is integrated with Suspense, it should wrap its updates into [`startTransition`](https://beta.reactjs.org/reference/react/startTransition) automatically.

## References

1. [`<Suspense>` component - beta.reactjs.org](https://beta.reactjs.org/reference/react/Suspense)