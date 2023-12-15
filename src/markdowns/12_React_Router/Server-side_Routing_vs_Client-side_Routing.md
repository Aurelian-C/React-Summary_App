# _Server-side_ routing vs _Client-side_ routing: avoiding `404` errors with Single-Page Apps

I see the same problem happen again and again to juniors building their first Single-Page App (SPA). Everything works fine locally, but as soon as they deploy to a hosting platform like Netlify they get loads of "404 Not found" errors trying to load pages. There are lots of resources documenting how to fix this, so I'm also going to try to explain why this happens too.

## Client-side routing

==Single-Page Apps differ from traditional server-rendered applications in that they **only ever load one "page" from the server**. This means **your server only knows about a single route: the home `index.html`**.== The server is just there to deliver your client-side JS to the browser.

Routing is usually handled client-side — when a user clicks a link some JavaScript intercepts it, prevents the normal request to the server, updates the content of the page and changes the URL. In a React app this might be handled by the React Router library.

## The problem

==In order for the client-side routing to work the home page needs to load, along with all the JavaScript code.== Unfortunately this means if a user goes *directly* to another route in their browser — i.e. clicks a link to "/about", or refreshes — they will see a 404 error.

==This is because **your server doesn't know about any routes like "/about". From its perspective there's only a single page — the home `index.html`**. So when the server receives a request for "/about" it correctly responds with a 404.==

> **NOTE**: ==You generally don't catch this issue during local development since most dev servers redirect all requests to the home `index.html`.==

## The solution

==The solution is to **tell your server to respond with the `index.html` for *any* route**.== Since that page contains all the client-side JS to render any other pages the user will still end up seeing the correct page.

==You can configure most static hosts to redirect all requests to the home route.== You'll have to each host's docs for something like **"SPA routing fallback"**.