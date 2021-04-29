//simple routing with the help of node js and http handle request but it is not suitable for hanling multiple request at specific url
const http = require("http");
const port = 3000;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    //only get request is work on home page route other request of post ,put can't be handle here so we use express js instead of this kinf of routing so that's the major and big difference of using expressjs
    if (req.method === "GET") {
      console.log("this is get request");
    }
    res.write("this is homepage");
    res.end();
  } else if (req.url === "/profile") {
    res.write("this is profile page");
    res.end();
  } else if (req.url === "/dashboard") {
    res.write("this is dashboard");
    res.end();
  } else {
    res.write("requested page not found ");
    res.end();
  }
});
server.listen(port, () => {
  console.log("server is listening", port);
});
