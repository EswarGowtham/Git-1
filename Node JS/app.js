const http = require('http');
const exp =require('express')
const bodyparser=require('body-parser')
const app=exp()
const PORT = 4000;
const adminRoutes=require('./routes/admin')

const shoproutes=require('./routes/shop')

app.use(bodyparser.urlencoded({extended:false}));

app.use('/admin',adminRoutes)
app.use('/shop',shoproutes)

app.use((req,res,next)=>{
  res.status(404).send('<h1>Page not found</h1>')
})

const server = http.createServer(app);


server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});