"use strict";

const routeResponseMap = {   // Define mapping of routes with responses.
  "/info": "<h1>Info Page</h1>",
  "/contact": "<h1>Contact Us</h1>",
  "/about": "<h1>Learn More About Us.</h1>",
  "/hello": "<h1>Say hello by emailing us here</h1>",
  "/error": "<h1>Sorry the page you are looking for is not here.</h1>"
};

const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    if (routeResponseMap[req.url]) {   //Check whether a request route is defined in the map.
      res.end(routeResponseMap[req.url]);
    } else {
      res.end("<h1>Welcome!</h1>");   //Respond with default HTML.
    }
  });
app.listen(port);
console.log(`The server has started and is listening on port number:${port}`);
