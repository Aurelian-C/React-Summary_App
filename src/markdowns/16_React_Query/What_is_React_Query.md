# What is React Query?

![React_Query01](../../img/React_Query01.jpg)

## Data is stored in a cache

The most fundamental thing about React Query is that ==**all remote state is cached**, which means that the fetched data will be stored in order to be reused in different points of the application.==

For example, if we fetch data about cabins in Component A, React Query will fetch the data from the API. It will then store the received data in the cache, so that Component A can use it. Then if at a later point, Component B also wants to fetch the cabin data, then no additional API request will be necessary. Instead, React Query will simply provide the same data to Component B from the cache.

## Automatic re-fetching to keep state synched

React Query also ==automatically re-fetches the data in certain situations==. For example, after a certain timeout or after we leave the browser window and then come back to it.

This is super important in order to make sure that ==a remote state always stays in sync with the application==. For example, if some other user of the app changes the remote state at some point, for example, by updating a cabin, then the application running on all other computers will have this cabin state out of sync with the newly updated state. And so, React Query can help with this as well by keeping everything in sync with  automatically re-fetching data.

## Pre-fetching

Besides re-fetching, we can also pre-fetch data, which basically means to ==fetch data that we know will become necessary later, but before it is actually displayed on the screen==. A classic example of this is pagination, where with pre-fetching, we can fetch data not only for the current page, but also for the next page.

This way, when the user then moves to the next page, the data will always already be there in the cache.

## Offline support

A feature that I find really useful is ==support for when the user becomes offline==. So, in this situation, since the data is already cached, as the user moves around in the app while being offline, Components A and B can still be displayed using this cached cabin data.

## Why do we need React Query?

We need a library like React Query with all these features because ==**remote state** is fundamentally different from **UI state**. Remote state is asynchronous and usually shared by many users of the app, which makes it so that applications running in different browsers can very easily get out of sync with the remote data that is stored on a server==.

Remote state has many special needs, and so that's the reason why we use something like React Query.

Now, there are actually other libraries that do many of the things that React Query does. For example, SWR or Redux Toolkit Query, which as the name says, is the remote state solution integrated into Redux Toolkit. However, from what I've seen, none of them works as well and is as popular as React Query.

## References

1. [The Ultimate React Course: React, Redux & More - Jonas Schmedtmann](https://www.udemy.com/course/the-ultimate-react-course/)