# Client state vs Server state

In the intricate dance of web application development, ==the **management of data** falls into two primary categories: **Client** State and **Server** State==.

### 1. Ownership of data

- **Client State:** In the context of client state, ==the application owns the data==. This includes information like UI state, user preferences, or any data that is generated or manipulated on the client side.
- **Server State:** On the other hand, server state refers to ==data that is owned and managed by the server==. Examples include lists of articles, user details, or any information retrieved from the server.

### 2. Borrowing data

- **Client State:** ==Applications manage and own client state data==, using it for various purposes within the app.
- **Server State:** ==The application borrows server state data to display the most recent version to the user. However, the server remains the true owner of this data.==

### 3. Data availability across components

- **Client State:** Typically, client state needs to be made available to the whole app. This often involves using state management libraries like Redux to maintain a global state accessible across components.
- **Server State:** React Query introduces a different approach. With its caching mechanism, you can use the same `useQuery` hook in multiple components, and it will fetch the data once and subsequently return it from the cache. This reduces the need for managing client state globally, as the server state is effectively cached and accessible as needed.

## Paradigm shift

The understanding that ==server state is borrowed for display purposes== represents a paradigm shift. It challenges the traditional notion of treating all states (client and server) in a similar fashion and encourages developers to rethink how data ownership and borrowing are approached in the context of application architecture.

## Summary

In summary, ==the key differences lie in the **ownership of data**==, the way data is borrowed for display, the need for global state management, and the potential role of libraries like Redux or React Query in managing client and server states.

## References

1. [Client State vs. Server State - https://tkdodo.eu/](https://tkdodo.eu/blog/practical-react-query#client-state-vs-server-state)