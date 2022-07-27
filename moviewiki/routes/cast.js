let express=require('express');
let router=express.Router();
let {getAllCast,
    updateCast,
    deleteCast,
    getCast,
    addCast}=require('../methods/cast');
let casts=[];

router.post('/add',(req,res)=>{
    let {id,name,age,charname,movie}=req.body;
    let response=addCast(id,name,age,charname,movie,casts);
    res.status(200).json({
        msg:response
    });
});
router.get('/',(req,res)=>{
    let result=getAllCast(casts);
    res.status(200).json({
        casts:result
    });
});
router.get('/:movie',(req,res)=>{
    let {movie}=req.params;
    let result=getCast(movie);
    res.status(200).json({
        cast:result
    });
});
router.put('/:id',(req,res)=>{
    let {id}=req.params;
    let {name,charname,age,movie}=req.body;
    let response=updateCast(id,name,age,charname,movie,casts);
    res.status(200).json({
        msg:response
    });
});
router.delete('/:id',(req,res)=>{
    let {id}=req.params;
    let response=deleteCast(id,casts);
    res.status(200).json({
        msg:response
    });
});
module.exports={casts,router};
