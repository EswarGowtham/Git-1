const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Set up MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'blog',
});


db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected');
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/blogs', (req, res) => {

    const query = 'SELECT * FROM blog';
    db.query(query, (err, result) => {
      if (err) {
        console.error('Error fetching data:', err);
        res.status(500).send('Error fetching data from the database');
      } else {
  
        res.json(result);
      }
    });
});
  
app.post('/addBlog', (req, res) => {
  const { author, blogName, blogDescription } = req.body;

  const sql = 'INSERT INTO blog (author, title, description) VALUES (?, ?, ?)';
  db.query(sql, [author, blogName, blogDescription], (err, result) => {
    if (err) throw err;
    console.log('Blog added to database');

  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
