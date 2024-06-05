const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("About our page");
  }
  res.end(
    `<h1>Oops!</h1>
        <p>We don't seem to find the page you are looking for </p>
        <a href="/">Back home</a> `
  );
});

server.listen(5000);

// npm - global command, comes with node
// npm --version

//local dependency -  use it only in this particular project
// npm i <packageName>

// global dependency - use it in the project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

//package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init  - (step by step process)
// npm init -y (skip the questions, everything default)
