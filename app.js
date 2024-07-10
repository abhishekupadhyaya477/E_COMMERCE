require('./model/db')
const express=require('express')
const router=require('./routes/index')
const app=express()
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/api',router)

const port=process.env.PORT||3000
app.listen(port,()=>{
    console.log("Server is running on http://localhost:3000");
})
