const {con}=require('../model/db')
async function getProductDetails(req,res){
    try {
     con.query(`SELECT * FROM product_specification where product_id=${req.params.id} `,(err,resolve)=>{
          if(err){
            console.log(err);
            return res.status(err.code).send({message:err.message })
          }
          return res.status(200).send({message:"Data Retrieved Successfully",data:resolve })

       //   console.log(resolve);
     })

    // con.query('SELECT * FROM product_list').then((result)=>{
    //    console.log(result);
    // }).catch((err)=>{
    //     console.log(err)
    // })
    } catch (error) {
        console.log(error);
    }
}
module.exports.getProductDetails=getProductDetails;