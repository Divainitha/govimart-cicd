const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Database Migration Service");
});

server.listen(3000);