let users=[];
let {addUser,showUsers,deleteUsers,updateUser}=require('../methods/users');
let express=require('express');

let router=express.Router();
router.post('/add',(req,res)=>{
    let {email,name,id}=req.body;
    let msg=addUser(users,name,id,email);
    res.status(200).json({
        msg:msg
    });
});
router.get('/',(req,res)=>{
    let result=showUsers(users);
    res.status(200).json({
        users:result
    });
});
router.delete('/:id',(req,res)=>{
    let {id}=req.params;
    let result=deleteUsers(id,users);
    res.status(200).json({
        msg:result
    });
});
router.put('/:id',(req,res)=>{
    let {id}=req.params;
    let {name,email}=req.body;
     let result=updateUser(id,email,name,users);
     res.status(200).json({
        msg:result
     });
});
module.exports=router;
