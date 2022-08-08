const db=require('../config/db');
createCharacter=(req,res)=>{
   let {name,charname,age,movie}=req.body;
   let sql='insert into movie set ?';
   let body={name:name,age:age,charname:charname,movie:movie};
   db.query(sql,body,(err,result)=>{
    if(!err)
    {
       return res.status(201).json({
        msg:'Movie created'
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
deleteCharacter=(req,res)=>{
   let {id}=req.params;
   let sql='delete from movie where id=?';
   let body=[id];
   db.query(sql,body,(err,result)=>{
    if(!err)
    {
        msg='character deleted';
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
updateCharacter=(req,res)=>{
    let {id}=req.params;
    let {name,charname,age,movie}=req.body;
    let sql='update movie set name=? charname=? age=? movie=? where id=?';
    let body=[name,charname,age,movie,id];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
           return res.status(200).json({
            msg:'character deleted'
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
getCharactersbyMovie=(id)=>{
    
    let sql ='select character.id as id ,character.name as name,character.age as age ,character.charname as casted ,movie.name as movie,genre.name as genre from character left join movie on character.movie=movie.id left join genre on movie.genre=genre.id where character.movie=?';
    let body=[id];
   return db.query(sql,body);

}
getMovies=()=>{
    
    let sql ='select * from movie';
   return db.query(sql);

}
getCharacter=(req,res)=>{
    let {id}=req.params;
    let sql = 'select * from character where id=?';
    let body=[id];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            if(result.length>0)
            {
                
                return res.status(200).json({
                    character:result
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
getCharacters=(req,res)=>{
    let sql = 'select * from character';
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            if(result.length>0)
            {
                
                return res.status(200).json({
                    character:result
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
module.exports={createCharacter,deleteCharacter,updateCharacter,getCharacter,getCharacters,getCharactersbyMovie,getMovies};