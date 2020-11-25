// From the hello world tutorial: https://nodejs.org/en/docs/guides/getting-started-guide/
const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log('************************************************************************');
  console.log("If you see this message this means nodemon has correctly restarted the");
  console.log("'node bin/index.js' process after it was copied there!");
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log('************************************************************************');
});
