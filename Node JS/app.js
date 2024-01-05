const http = require('http');
const exp=require('express')
const bodyparser=require('body-parser')
const app=exp()

app.use(bodyparser.urlencoded({extended:false}));


app.use('/add-product',(req,res,next)=>{
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
})

app.use('/product',(req,res,next)=>{
  console.log(req.body);
  res.redirect('/');
})
app.use('/',(req,res,next)=>{
  res.send('<h1>Hello from Express</h1>')
})
const server = http.createServer(app);

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});