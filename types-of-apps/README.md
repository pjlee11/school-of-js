# Types of apps 

There are multiple ways to setup a modern JS application depending on the use case. 

Here are lightweight examples of the main types you may come across, each with different benefits.

## Client side rendering only

In this type of application all the logic is delegated to the client side (the user's browser/device). 

Given the data needs to be fetched on the client, for performance best practice, the first React render often uses default data so the page load is not dependant on the data fetch. When the data fetch is complete the component's state is updated and React re-renders the components.

1) The user makes a request
2) The server responds with a basic HTML template, containing a placeholder element for React to render into and the client application JS bundles
3) The browser renders the HTML template and downloads the JS bundles, loading the application
4) The client side application executes and React renders the components into the placeholder element
5) React now listens for any of it's component's props or state to change, causing a re-render

## Server side rendering only

1) The user makes a request
2) The server fetches the data
3) HTML template, containing a placeholder element for React to render into and the client application JS bundles
3) The browser renders the HTML template and downloads the JS bundles, loading the application
4) The client side application executes and React renders the components into the placeholder
5) React now listens for any of it's component's props or state to change, causing a re-render

## Universal rendering

...

### Server only data fetching

...

### Server and client data fetching

...

## Single page applications

...
