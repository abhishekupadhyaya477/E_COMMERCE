const {con}=require('../model/db')
const Joi = require('joi');
async function updateProductList(req,res){
    try {
        let {product_name,product_desc,product_id,product_mrp,product_offer_price,delete_flag}=req.body
        let query=''
        let data=''
        const schema=Joi.object({
            product_name:Joi.string().required(),
            product_desc:Joi.string().required(),
            product_mrp:Joi.number().required(),
            product_offer_price:Joi.number().required(),
            product_id:Joi.number().required(),
            delete_flag:Joi.string(),
        })
        const result=schema.validate(req.body)
        if(result.error){
            return res.status(400).send({'message':result.error.message })
        }
        if(product_id!=0){
            if(delete_flag!='Y'){
                query=`Update product_list set product_name=?,product_desc=?,product_mrp=?,product_offer_price=? where product_id=? `;
                data=[product_name,product_desc,product_mrp,product_offer_price,product_id]
            }else{
                query=`Update product_list set delete_flag=? where product_id=? `;
                data=['Y',product_id]
            }
                
        }
        else{
            query=`INSERT INTO product_list(product_name,product_desc,product_mrp,product_offer_price,delete_flag) VALUES (?,?,?,?,?)`
            data=[product_name,product_desc,product_mrp,product_offer_price,'N']
        }
        
     con.query(query,data,(err,resolve)=>{
          if(err){
            console.log(err);
            return res.status(400).send({message:err.message })
          }
          return res.status(200).send({message:"Data Saved Successfully",data:resolve })

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
module.exports.updateProductList=updateProductList;
