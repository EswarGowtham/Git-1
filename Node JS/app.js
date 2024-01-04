const http = require('http');
const routes=require('./routes')
console.log(routes.someText)
const server = http.createServer(routes.handler);

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});