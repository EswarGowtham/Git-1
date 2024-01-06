const express =require('express')

const router =express.Router()

router.get('/add-user',(req,res,next)=>{
    res.send('<form action="/login/add-user" method="POST"><input type="text" name="username"><button type="submit">Add User</button></form>')
})
  
router.post('/add-user',(req,res,next)=>{
    const { username } = req.body;
    res.redirect(`/message/add-message?username=${username}`);

})

module.exports=router