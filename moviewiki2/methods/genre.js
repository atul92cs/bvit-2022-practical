const db=require('../config/db');
 createGenre=(req,res)=>{
    let {name}=req.body;
    let sql='insert into genre set ?';
    let body={name:name};

   db.query(sql,body,(err,result)=>{
    if(!err)
    {
       return res.status(201).json({
        msg:'Genre created'
       }); 
        
    }
    else
    {
        return res.status(400).json({
            msg:'error occured',
            error:err
           });
       
    }
    });
 }
 getGenres=(req,res)=>{
    let sql='select * from genre';
    let msg;
    db.query(sql,(err,result)=>{
        
        if(!err)
        {
            if(result.length>0)
            {
            return res.status(200).json({
                genre:result
             });
            
            }
            else
            {
                return res.status(404).json({
                    msg:'no data found',
                    
                });
            }
        }
        else
        {
            return res.status(400).json({
                msg:'error occured',
                error:err
            });
        }
    });
    
 }
 getGenre=(req,res)=>{
    let {id}=req.params;
    let sql='select * from genre where id=?';
    let body=[id];
    
     db.query(sql,body,(err,result)=>{
        if(!err)
        {
            if(result.length>0)
            {
                
                return res.status(200).json({
                    genre:result
                });
            }
            else
            {
                return res.status(404).json({
                    msg:'no data found'
                });
            
            }
        }
        else
        {
            return res.status(400).json({
                msg:'error occured',
                error:err
            });
        
        }
    });
    
 }
 updateGenre=(req,res)=>{
    let {id}=req.params;
    let {name}=req.body;
    let sql='update genre set name=? where id=?';
    let body=[name,id];
    let msg;
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            msg='genre updated';
            return res.status(200).json({
                msg:msg
            });
        }
        else
        {
            msg='error occured';
            return res.status(400).json({
                msg:msg,
                error:err
            });
        
        }
    });
    
 }
 deleteGenre=(req,res)=>{
    let {id}=req.params;
    let sql ='delete from genre where id=?';
    let body=[id];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            msg='genre deleted';
            return res.status(200).json({
                msg
            }) ;
        }
        else
        {
            msg ='error occured';
             return res.status(400).json({
                msg:msg,
                error:err
             });
        
        }
    });
    
 
 }
 module.exports={deleteGenre,createGenre,updateGenre,getGenre,getGenres};