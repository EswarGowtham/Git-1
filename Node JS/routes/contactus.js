const express =require('express')
//const path =require('path')
const router=express.Router()
const rootDir=require('../util/path')
router.get('/contactus',(req,res)=>{
    //res.sendFile(rootDir,'views','contactus.html')
    res.send("HI")
})

router.post('/contactus',(req,res)=>{
    console.log("HI")
    res.redirect('/')
})
module.exports=router