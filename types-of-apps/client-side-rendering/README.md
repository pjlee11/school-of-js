# Client side renderer app

This is an example of an application that is purely run client side, meaning all the logic is delegated to the client side (the user's browser/device). 

1) The user makes a request
2) The server responds with a basic HTML template, containing a placeholder element for React to render into and the client application JS bundles
3) The browser renders the HTML template and downloads the JS bundles, loading the application
4) The client side application executes
5) React renders the components, using the default data, populating the HTML placeholder element for the app. During this a data fetch is triggered
6) React now listens for any component's props or state to change, this will cause a re-render
7) The data fetch resolves and updates the applications state and React re-renders the component with the new data

### Run the app

`yarn demo` runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### HTTPS

If you want to open the app in HTTPS see these [docs](https://create-react-app.dev/docs/using-https-in-development/)

Example: 
Mac/Linux: `HTTPS=true yarn start`

### Source 

* https://github.com/facebook/create-react-app/blob/7e4949a20fc828577fb7626a3262832422f3ae3b/packages/react-dev-utils/README.md#new-inlinechunkhtmlpluginhtmlwebpackplugin-htmlwebpackplugin-tests-regex
