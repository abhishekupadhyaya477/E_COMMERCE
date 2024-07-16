const {con}=require('../model/db')
async function updateProductList(req,res){
    try {
        let {product_name,product_desc,product_id,product_mrp,product_offer_price,delete_flag}=req.body
        let query=''
        let data=''
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
