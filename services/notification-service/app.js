const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Notification Service");
});

server.listen(3000);