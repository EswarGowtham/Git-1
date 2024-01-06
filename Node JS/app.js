// const http = require('http');
// const exp =require('express')
// const bodyparser=require('body-parser')
// const app=exp()
// const PORT = 4000;
// const adminRoutes=require('./routes/admin')

// const shoproutes=require('./routes/shop')

// app.use(bodyparser.urlencoded({extended:false}));

// app.use('/admin',adminRoutes)
// app.use('/shop',shoproutes)

// app.use((req,res,next)=>{
//   res.status(404).send('<h1>Page not found</h1>')
// })

// const server = http.createServer(app);


// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

//************************************************************Demo Chat App **********************************************************//



const http = require('http');
const exp =require('express')
const bodyparser=require('body-parser')
const app=exp()
const PORT = 5000;
const adminRoutes=require('./chat_app_routes/login')
const msgroutes=require('./chat_app_routes/message')

app.use(bodyparser.urlencoded({extended:false}));

app.use('/login',adminRoutes)
app.use('/message',msgroutes)

app.use('./',(req,res,next)=>{
  res.send('<h1>Home</h1>')
})

const server = http.createServer(app);


server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/login/add-user`);
});