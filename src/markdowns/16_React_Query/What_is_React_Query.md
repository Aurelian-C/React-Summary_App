# What is React Query?

TanStack Query (FKA React Query) is often described as the missing ==data-fetching library for web applications==, but in more technical terms, ==it makes **fetching, caching, synchronizing and updating server state** in your web applications== a breeze.

> **NOTE**: ==React Query is in fact *NOT* a data fetching library.== ==It doesn't fetch any data for you==, and only a very small set of features are directly tied to the network (like [the OnlineManager](https://react-query.tanstack.com/reference/onlineManager), `refetchOnReconnect` or [retrying offline mutation](https://react-query.tanstack.com/guides/mutations#retry)). This also becomes apparent when you write your first `queryFn`, and you have to use *something* to actually get the data, like [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), [axios](https://axios-http.com/), [ky](https://github.com/sindresorhus/ky) or even [graphql-request](https://github.com/prisma-labs/graphql-request).
>
> So if React Query is no data fetching library, what is it? ==React Query is an **async (server) state manager**.== It can manage any form of asynchronous state - it is happy as long as it gets a Promise.

==While most traditional state management libraries are great for working with client state, they are **not so great at working with async or server state**. This is because **server state is totally different**.== For starters, server state:

- Is persisted remotely in a location you do not control or own
- Requires asynchronous APIs for fetching and updating
- Implies shared ownership and can be changed by other people without your knowledge
- Can potentially become "out of date" in your applications if you're not careful

Once you grasp the nature of server state in your application, **even more challenges will arise** as you go, for example:

- Caching... (possibly the hardest thing to do in programming)
- Deduping multiple requests for the same data into a single request
- Updating "out of date" data in the background
- Knowing when data is "out of date"
- Reflecting updates to data as quickly as possible
- Performance optimizations like pagination and lazy loading data
- Managing memory and garbage collection of server state
- Memoizing query results with structural sharing

==React Query is hands down one of the best libraries for **managing server state**. It works amazingly well out-of-the-box, with zero-config, and can be customized to your liking as your application grows.==

On a more technical note, React Query will likely:

- Help you remove **many** lines of complicated and misunderstood code from your application and replace with just a handful of lines of React Query logic.
- Make your application more maintainable and easier to build new features without worrying about wiring up new server state data sources
- Have a direct impact on your end-users by making your application feel faster and more responsive than ever before.
- Potentially help you save on bandwidth and increase memory performance

![React_Query01](../../img/React_Query01.jpg)

## Data is stored in a cache

The most fundamental thing about React Query is that ==**all remote state is cached**, which means that the fetched data will be stored in order to be reused in different points of the application.==

You might have heard this before, it's the caching mechanism that React Query uses. It's nothing new - you can read about the [HTTP Cache-Control Extensions for Stale Content here](https://datatracker.ietf.org/doc/html/rfc5861). In summary, it means React Query will cache data for you and give it to you when you need it, even if that data might not be up-to-date (stale) anymore. The principle is that stale data is better than no data, because no data usually means a loading spinner, and this will be perceived as "slow" by users. At the same time, it will try to perform a background refetch to revalidate that data.

> **EXAMPLE**: If we fetch data about cabins in Component A, React Query will fetch the data from the API. It will then store the received data in the cache, so that Component A can use it. Then if at a later point, Component B also wants to fetch the cabin data, then no additional API request will be necessary. Instead, React Query will simply provide the same data to Component B from the cache.

## Automatic re-fetching to keep state synched

React Query also ==automatically re-fetches the data in certain situations==. For example, after a certain timeout or after we leave the browser window and then come back to it. So React Query is a data synchronization tool.

This is super important in order to make sure that ==a remote state always stays in sync with the application==.

Because React Query manages async state (or, in terms of data fetching: server state), it assumes that the frontend application doesn't "own" the data. And that's totally right. If we display data on the screen that we fetch from an API, we only display a "snapshot" of that data - the version of how it looked when we retrieved it. So the question we have to ask ourselves is:

Is that data still accurate after we fetch it?

The answer depends totally on our problem domain. If we fetch a Twitter post with all its likes and comments, it is likely outdated (stale) pretty fast. If we fetch exchange rates that update on a daily basis, well, our data is going to be quite accurate for some time even without refetching.

React Query provides the means to *synchronize* our view with the actual data owner - the backend. And by doing so, it errs on the side of updating often rather than not updating often enough.

## Pre-fetching

Besides re-fetching, we can also pre-fetch data, which basically means to ==fetch data that we know will become necessary later, but before it is actually displayed on the screen==. A classic example of this is pagination, where with pre-fetching, we can fetch data not only for the current page, but also for the next page.

This way, when the user then moves to the next page, the data will always already be there in the cache.

## Offline support

A feature that I find really useful is ==support for when the user becomes offline==. So, in this situation, since the data is already cached, as the user moves around in the app while being offline, Components A and B can still be displayed using the cached data.

## Why do we need React Query?

We need a library like React Query with all these features because ==**remote state** is fundamentally different from **UI state**. Remote state is asynchronous and usually shared by many users of the app, which makes it so that applications running in different browsers can very easily get out of sync with the remote data that is stored on a server==.

Remote state has many special needs, and so that's the reason why we use something like React Query.

Now, there are actually other libraries that do many of the things that React Query does. For example, SWR or Redux Toolkit Query, which as the name says, is the remote state solution integrated into Redux Toolkit. However, from what I've seen, none of them works as well and is as popular as React Query.

## Before React Query

Two approaches to data fetching were pretty common before libraries like React Query came to the rescue:

- fetch once, distribute globally, rarely update:

  This is pretty much what I myself have been doing with redux a lot. Somewhere, I dispatch an action that initiates the data fetching, usually on mount of the application. After we get the data, we put it in a global state manager so that we can access it everywhere in our application. After all, many components need access to our Todo list. Do we refetch that data? No, we have "downloaded" it, so we have it already, why should we? Maybe if we fire a POST request to the backend, it will be kind enough to give us the "latest" state back. If you want something more accurate, you can always reload your browser window...

- fetch on every mount, keep it local:

  Sometimes, we might also think that putting data in global state is "too much". We only need it in this Modal Dialog, so why not fetch it *just in time* when the Dialog opens. You know the drill: `useEffect`, empty dependency array (throw an eslint-disable at it if it screams), `setLoading(true)` and so on ... Of course, we now show a loading spinner every time the Dialog opens until we have the data. What else can we do, the local state is gone...

Both of these approaches are pretty sub-optimal. The first one doesn't update our local cache often enough, while the second one potentially re-fetches too often, and also has a questionable ux because data is not there when we fetch for the second time.

## Does TanStack Query replace Redux, MobX or other global state managers?

Well, let's start with a few important items:

- ==TanStack Query is a **server-state** library==, responsible for managing asynchronous operations between your server and client
- ==Redux, MobX, Zustand, etc. are **client-state** libraries== that *can be used to store asynchronous data, albeit inefficiently when compared to a tool like TanStack Query*

With those points in mind, the short answer is that TanStack Query **replaces the boilerplate code and related wiring used to manage cache data in your client-state and replaces it with just a few lines of code.**

==For a vast majority of applications, the truly **globally accessible client state** that is left over after migrating all of your async code to TanStack Query is usually very tiny.==

## References

1. [The Ultimate React Course: React, Redux & More - Jonas Schmedtmann](https://www.udemy.com/course/the-ultimate-react-course/)
1. [Does TanStack Query replace Redux, MobX or other global state managers? - tanstack.com](https://tanstack.com/query/latest/docs/react/guides/does-this-replace-client-state)
1. [React Query as a State Manager - tkdodo.eu](https://tkdodo.eu/blog/react-query-as-a-state-manager)