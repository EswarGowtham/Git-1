const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;


  if (url === '/home') {
    res.end('Welcome home\n');
  } else if (url === '/about') {
    res.end('Welcome to About Us page\n');
  } else if (url === '/node') {
    res.end('Welcome to my Node.js project\n');
  } else {
    
    res.end('Invalid URL\n');
  }
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
