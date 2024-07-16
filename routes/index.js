const express = require('express')
const router = express.Router()
const {getProductList}=require('../controller/getProductList')
const {updateProductList}=require('../controller/updateProductList')

router.get('/getProductList',(req,res)=>{
    getProductList(req,res)
})
router.post('/updateProductList',(req,res)=>{
    updateProductList(req,res)
})



module.exports=router