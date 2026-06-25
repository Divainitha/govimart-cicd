const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Authentication Service");
});

server.listen(3000);