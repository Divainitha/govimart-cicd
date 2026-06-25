const http = require("http");

const server = http.createServer((req, res) => {
  res.end("AI Recommendation Service");
});

server.listen(3000);