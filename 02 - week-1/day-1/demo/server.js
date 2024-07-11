const http = require('http');

  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  });

  server.listen(3000, 'localhost', () => {
    console.log('Servidor corriendo en: http://localhost:3000/');
  });