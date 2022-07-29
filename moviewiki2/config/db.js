require('dotenv').config();
const mysql = require('mysql');
  const db=mysql.createConnection({
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
    multipleStatements: true 
     
});
  
  db.connect((err)=>{
      if(!err)
      {
          console.log('db connected');
      }
      else
      {
           console.log(`Error occured err: ${err}`);
      }
  });
module.exports = db;