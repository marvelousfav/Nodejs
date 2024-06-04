"use strict";

const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  fs = require("fs");   //Require the fs module.
const getViewUrl = url => {   // Create a function to interpolate the URL into the file path.
  return `views${url}.html`;
};
http
  .createServer((req, res) => {
    let viewUrl = getViewUrl(req.url);   // Get the file-path string.
    fs.readFile(viewUrl, (error, data) => {   // Interpolate the request URL into your fs file search.
      if (error) {                          // Handle errors with a 404 response code.
        res.writeHead(httpStatus.NOT_FOUND);
        res.write("<h1>FILE NOT FOUND</h1>");
      } else {                               // Respond with file contents.
        res.writeHead(httpStatus.OK, {
          "Content-Type": "text/html"
        });
        res.write(data);
      }
      res.end();
    });
  })
  .listen(port);
console.log(`The server has started and is listening on port number: ${port}`);
