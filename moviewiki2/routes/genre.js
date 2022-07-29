let express=require('express');
let {createGenre,getGenres,getGenre,updateGenre,deleteGenre}=require('../methods/genre');
let router=express.Router();
const db=require('../config/db');
router.post('/add',(req,res)=>{
    let {name}=req.body;
    createGenre(db,name).then(result=>{
        res.status(200).json({
            msg:'genre created'
           });
          
    }).catch(err=>{
        res.status(400).json({
            msg:'error occured',
            err:err
        });
    });
    console.log(result);
    
    if(msg=='data inserted')
    {
        
        
    }
    else
    {
        let {error}=result
       
    }
});
router.get('/',(req,res)=>{
    let result=getGenres(db);
    let {msg}=result
    if(msg=='error occured')
    {
        let {error}=result
        res.status(400).json({
            msg:'error occured',
            err:error
        });
    }
    else
    {
        res.status(200).json({
            msg:result
        });
    }
});
router.get('/:id',(req,res)=>{
    let {id}=req.params;
    let result=getGenre(db,id);
    let {msg}=result;
    if(msg=='error occured')
    {
        let {error}=result;
        res.status(400).json({
            msg:'error occured',
            err:error
        });  
    }
    else
    {
        res.status(200).json({
            msg:result
        });
    }
});

module.exports=router;