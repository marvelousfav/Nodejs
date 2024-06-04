"use strict";

const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer();

const getJSONString = obj => {
  return JSON.stringify(obj, null, 2);  //Convert JavaScript object to string.
};

// Listen for requests.
app.on("request", (req, res) => {
  var body = [];  // Create an array to hold chunk contents.

  req.on("data", bodyData => {   //Process it in another callback function.
    body.push(bodyData);  //Add received data to the body array.
  });

  req.on("end", () => {  // Run code when data transmission ends.
    body = Buffer.concat(body).toString();  //Convert the body array to a String of text.
    console.log(`Request Body Contents: ${body}`);
  });  // Log the request’s contents to your console.

  console.log(`Method: ${getJSONString(req.method)}`);  //Log the HTTP method used
  console.log(`URL: ${getJSONString(req.url)}`);   //Log the HTTP method used
  console.log(`Headers: ${getJSONString(req.headers)}`);  // Log request headers.
  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html"
  });  // Prepare a response.


  let responseMessage = "<h1>This will show on the screen.</h1>";
  res.end(responseMessage);  //Respond with HTML.
});

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);
