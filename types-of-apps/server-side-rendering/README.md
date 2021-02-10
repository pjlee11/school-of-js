# Client side renderer app

This is an example of an application that is purely rendered server side.

When a request comes into the application we wait for the data to be fetched. Once the data returns we render the App passing in the data. 

We then parse the React render output to a string so we can render it as static HTML.

### Run the app

`yarn start` runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### HTTPS

If you want to open the app in HTTPS see these [docs](https://create-react-app.dev/docs/using-https-in-development/).

As part of Chrome's HSTS it may force localhost traffic to HTTPS, this can be disabled - [docs](https://stackoverflow.com/questions/25277457/google-chrome-redirecting-localhost-to-https)

Example: 
Mac/Linux: `HTTPS=true yarn start`

### Layman's terms

* We have setup an Express node server to listen for requests
  * For this to run as a node process we transpile it using Babel and package it up with webpack
* We fetch the data on the server, waiting for a response
* Once we have the data we render the App using the data
* We convert the App render into static HTML and send it to the user
* Nothing happens on the client side

### Caveat 

**This example is purely for educational purposes and is not intended for production use. Alternatively, Next.js offers a modern approach to creating static and server-rendered applications built with React.**

### Sources 

* https://www.digitalocean.com/community/tutorials/react-server-side-rendering
* https://blog.bitsrc.io/a-beginners-guide-to-server-side-web-development-with-node-js-17385da09f93
