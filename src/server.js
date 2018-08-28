import express from "express";
import React from "react";
import ReactDOM from "react-dom/server";
import App from "./components/App";
// init the app
const app = express();

// handle the isomorphic page render
app.get("/", (req, res) => {
  const vdom = ReactDOM.renderToString(<App />);
  const html = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <title>Recipes</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/semantic-ui/2.2.2/semantic.min.css" />
  </head>
  
  <body>
    <div id="root">${vdom}</div>
    <script src="/bundle.js"></script>
  </body>
  
  </html>`;
  res.send(html);
});

// setup static files, server browser.js (webpacked file) from root
app.use(express.static(__dirname));

// start the app
app.listen(3000, () => {
  console.log("App listening on port: 3000");
});
