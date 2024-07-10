const express = require('express')
const router = express.Router()
const {getProductList}=require('../controller/getProductList')

router.get('/getProductList',(req,res)=>{
    getProductList(req,res)
})



module.exports=router