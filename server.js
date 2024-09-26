const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/fundamentos' && req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello world, fundamentos Node.js aplicado.\n');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Rota não encontrada.\n');
    }
  });
  
  const port = 3000;
  server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });