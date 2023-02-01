# Routing: multiple pages in single-page applications

To understand Routing, it's important to keep in mind how the web generally works. When you visit websites you can typically append a path after the domain name like `/welcome` and that loads, for example, the welcome page of a website. If you then type a different URL into the browser address bar, or if you click a link that changes the URL, for example `/products`, a different page gets loaded, so the visible content of the website changes. ==That's what Routing is all about: different **URL paths** load different content on the screen==.

![Routing_multiple_pages_in_SPA](..\img\Routing_multiple_pages_in_SPA.jpg)

Traditionally, you would implement Routing by simply loading different content, different HTML files for different paths, and that is how you would build a multi-page application which you typically would build without ReactJS. Now, with that, you get different content for different paths, but the disadvantage is that you always have to fetch new content (a new HTTP request is sent and a new response is received) and that can kind of break the user flow, it can introduce some lag and slow down your website, and it can therefore lead to a suboptimal user experience.

![Routing_multiple_pages_in_SPA1](..\img\Routing_multiple_pages_in_SPA1.jpg)

So that's why we might wanna build a single-page application (SPA) when we're building more complex user interfaces. With SPA, you send only one initial HTML request and then that HTML file with a bunch of extra JavaScript is downloaded, and thereafter the extra JavaScript code that runs on the client will actually take care about adjusting what the user sees on the screen. That's how SPA work.

However, that does not mean that we can't bring back the illusion of a Routing and that we can support path changes in the URL and load different content based on the path. Instead, we can add client-side React code that basically watches the currently active URL and that triggers whenever the URL changes, and that then leads to different content being displayed on the screen when the URL changes.

==So instead of loading new HTML files from the backend, we could add some client-side code that simply **watches the URL** and then loads a different React component when that URL changes==. With that, we're still in a SPA but we nonetheless support different URLs and therefore Routing.

![Routing_multiple_pages_in_SPA2](..\img\Routing_multiple_pages_in_SPA2.jpg)

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)