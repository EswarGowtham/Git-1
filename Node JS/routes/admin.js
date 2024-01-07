const express =require('express')
const path=require('path')
const router =express.Router()
const productController=require('../controllers/products')

router.get('/add-product',productController.getAddProduct
    //res.sendFile(path.join(rootdir,'views','add-product.html'))
)
  
router.post('/add-product',productController.postAddProduct)

module.exports=router