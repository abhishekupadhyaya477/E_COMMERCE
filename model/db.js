const mysql=require('mysql2')
let con=mysql.createConnection({
    host:"localhost",
    user:"localDB",
    password:"root",
    database:'first_crud_local',
})

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

// con.connect().
// then(()=>{
//     console.log('connected with mysql');
// }).catch((err)=>{
//     console.log('Getting error while connection with mysql',err);
// })

module.exports.con=con
