const http = require('http');

const PORT = process.env.PORT || 8080;

const requestHandler = (req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'healthy', service: 'cloud-native-core-885' }));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Cloud-Native-Core-885: Service operational.\n');
};

const server = http.createServer(requestHandler);

server.listen(PORT, (err) => {
  if (err) {
    return console.error('Error starting server:', err);
  }
  console.log(`Server is listening on port ${PORT}`);
});