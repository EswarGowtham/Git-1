const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'booking' 
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/add-product', (req, res) => {
  const { name, mobile, email } = req.body;

  
  const query = 'INSERT INTO booking (name, mobile, email) VALUES (?, ?, ?)';
  db.query(query, [name, mobile, email], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data into the database');
    } else {
      console.log('Data inserted successfully:', result);

      res.send('Data inserted into the database');
    }
  });
});

app.get('/products', (req, res) => {

  const query = 'SELECT * FROM booking';
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Error fetching data from the database');
    } else {

      res.json(result);
    }
  });
});
app.put('/update-product/:id', (req, res) => {
    const productId = req.params.id;
    const { name, mobile, email } = req.body;
  

    const query = 'UPDATE booking SET name = ?, mobile = ?, email = ? WHERE id = ?';
    db.query(query, [name, mobile, email, productId], (err, result) => {
      if (err) {
        console.error('Error updating data:', err);
        res.status(500).send('Error updating data in the database');
      } else {
        console.log('Data updated successfully:', result);
        res.send('Data updated in the database');
      }
    });
  });
  

app.delete('/delete-product/:id', (req, res) => {
  const productId = req.params.id;

  const query = 'DELETE FROM booking WHERE id = ?';
  db.query(query, [productId], (err, result) => {
    if (err) {
      console.error('Error deleting data:', err);
      res.status(500).send('Error deleting data from the database');
    } else {
      console.log('Data deleted successfully:', result);
      res.send('Data deleted from the database');
    }
  });
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
