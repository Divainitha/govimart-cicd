const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Scheduled Jobs Service");
});

server.listen(3000);