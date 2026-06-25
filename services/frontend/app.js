const http = require("http");

const server = http.createServer((req, res) => {
  res.end("GoviMart Frontend Service");
});

server.listen(3000);