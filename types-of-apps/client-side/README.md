# Client side renderer app

This is an example of an application that is purely run client side.

When the App is first rendered it triggers a data fetch that it purposefully does not await for a response, instead it renders the default data values. 

When the data fetch finishes it updates the App's state causing React to re-render the component with the real data.

### Run the app

`yarn start` runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### HTTPS

If you want to open the app in HTTPS see these [docs](https://create-react-app.dev/docs/using-https-in-development/)

Example: 
Mac/Linux: `HTTPS=true yarn start`

