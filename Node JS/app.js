const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    try {
      let message = fs.readFileSync('message.txt', 'utf8');
      console.log(message);

      if (method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
          body.push(chunk);
        });

        req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          const newMessage = parsedBody.split('=')[1];

          fs.writeFile('message.txt', newMessage, (err) => {
            if (err) {
              console.error('Error writing file:', err);
              res.statusCode = 500;
              res.end('Internal Server Error');
            } else {
              // Read the file again after writing to it
              message = fs.readFileSync('message.txt', 'utf8');
              res.statusCode = 302;
              res.setHeader('Location', '/');
              return res.end();
            }
          });
        });
      } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Message</title></head>');
        res.write(`<body><h2>${message}</h2><form action="/" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`);
        res.write('</html>');
        return res.end();
      }
    } catch (err) {
      console.error('Error reading file:', err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.end();
  }
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
