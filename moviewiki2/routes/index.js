let express=require('express');
let router=express.Router();
let db=require('../config/db');
let {getCharactersbyMovie,getMovies}=require('../methods/char');
router.get('/',(req,res)=>{
    
    //let movies=getMovies();
    let sql ='select * from movie';
    db.query(sql,(err,result)=>{
        if(!err)
        {
            if(result.length>0)
            {
                res.render('index',{movies:result});
            }
            else
            {
                let msg='no movies found';
                res.render('index',{msg:msg});
            }
        }
        else
        {
            res.render('index',{msg:err});
        }
    });    
});
router.get('/addmovie',(req,res)=>{
    let sql='select * from genre';
    db.query(sql,(err,result)=>{
        if(!err)
        {
            if(result.length>0)
            {
                res.render('addmovie',{genres:result});
            }
        }
        else
        {
            res.render('addmovie',{err:err});
        }
    });
});
module.exports=router;