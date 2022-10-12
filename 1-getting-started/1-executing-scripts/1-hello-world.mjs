//const http = require('http');

// import http from 'http';

import { createServer } from 'http';

// const server = http.createServer((req, res) => {
const server = createServer((req, res) => {
  res.end('Hello Worlds\n');
});

server.listen(4242, () => {
  console.log('Server is running...');
});
