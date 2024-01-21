const http = require('http');
const exp =require('express')
const bodyparser=require('body-parser')
const app=exp()
const PORT = 4000;
const path=require('path')
const errorcontroller=require('./controllers/error');
app.set('view engine', 'ejs');
app.set('views', 'views');

const db=require('./util/database')
const adminRoutes=require('./routes/admin')

const shoproutes=require('./routes/shop')
db.execute('select * from products')
.then(result=>{
  console.log(result)
}).catch(err=>{
  console.log(err)
})
app.use(bodyparser.urlencoded({extended:false}));
app.use(exp.static(path.join(__dirname,'public')))
app.use('/admin',adminRoutes)
app.use(shoproutes)

const server = http.createServer(app);

app.use(errorcontroller.get404);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//************************************************************Demo Chat App **********************************************************//



// const http = require('http');
// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');

// const app = express();
// const PORT = 5000;

// app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/', (req, res, next) => {

//   let homeHTML = '<h1>Home</h1>';

//   homeHTML += '<a href="/add-user">Add User</a>';

//   res.send(homeHTML);
// });

// app.get('/add-user', (req, res, next) => {
//   res.send(`
//     <h1>Add User</h1>
//     <form action="/add-user" method="post">
//       <label for="username">Username:</label>
//       <input type="text" name="username" required>
//       <button type="submit">Add User</button>
//     </form>
//     <script>
//       document.getElementById('addUserForm').addEventListener('submit', function(event) {
//         event.preventDefault();
//         const username = document.getElementById('usernameInput').value;
        
//         localStorage.setItem('currentUsername', username);
  
//         this.submit();
//       });
//     </script>
//   `);
// });

// // Add User route
// app.post('/add-user', (req, res, next) => {
//   const username = req.body.username;

//   fs.writeFileSync('current_username.txt', username);

//   res.redirect('/send-message');
// });


// app.get('/send-message', (req, res, next) => {

//   const data = fs.readFileSync('messages.txt', 'utf-8').split('\n').filter(Boolean);

//   const currentUsername = fs.readFileSync('current_username.txt', 'utf-8').trim();

//   let sendMessageHTML = `
//     <h1>Send Message</h1>
//     <p>Current Username: ${currentUsername}</p>
//     <form action="/send-message" method="post">
//       <label for="message">Message:</label>
//       <input type="text" name="message" required>
//       <button type="submit">Send Message</button>
//     </form>
//     <h2>Previous Messages:</h2>
//     <ul>`;

//   if (data.length > 0) {
//     data.forEach((entry) => {
//       const [username, message] = entry.split(':');
//       sendMessageHTML += `<li>${username}: ${message}</li>`;
//     });
//   } else {
//     sendMessageHTML += '<li>No previous messages yet.</li>';
//   }

//   sendMessageHTML += '</ul>';

//   res.send(sendMessageHTML);
// });


// app.post('/send-message', (req, res, next) => {
//   const message = req.body.message;
//   const currentUsername = fs.readFileSync('current_username.txt', 'utf-8').trim();
//   localStorage.setItem('currentUsername', currentUsername);

//   fs.appendFileSync('messages.txt', `${currentUsername}:${message}\n`);

//   res.redirect('/send-message');
// });

// const server = http.createServer(app);

// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
