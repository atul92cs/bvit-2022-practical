
 createGenre=(db,name)=>{
    let sql='insert into genre set ?';
    let body={name:name};
    let msg;
   db.query(sql,body,(err,result)=>{
   });
 }
 getGenres=(db)=>{
    let sql='select * from genre';
    let msg;
    let result=  db.query(sql,(err,result)=>{
        if(!err)
        {
            if(result>0)
            {
                msg = {msg:'error occured',
             error:err};
             return msg;
            
            }
            else
            {
                msg='no data found';
                return msg;
            }
        }
        else
        {
            msg = {msg:'error occured',
             error:err};
             return msg;
            
        }
    });
    return result;
 }
 getGenre=(db,id)=>{
    let sql='select * from genre where id=?';
    let body=[id];
    
    let result=  db.query(sql,body,(err,result)=>{
        if(!err)
        {
            if(result>0)
            {
                msg=result;
                return msg;
            }
            else
            {
                msg = {msg:'error occured',
             error:err};
                return msg;
            }
        }
        else
        {
            msg = {msg:'error occured',
             error:err};
            return msg;
        }
    });
    return result;
 }
 updateGenre=(db,id,name)=>{
    let sql='update genre set name=? where id=?';
    let body=[name,id];
    let msg;
    let result= db.query(sql,body,(err,result)=>{
        if(!err)
        {
            msg='genre updated';
            return msg;
        }
        else
        {
            msg = {msg:'error occured',
             error:err};
             return msg;
        
        }
    });
    return result;
 }
 deleteGenre=(db,id)=>{
    let sql ='delete from genre where id=?';
    let body=[id];
    let result= db.query(sql,body,(err,result)=>{
        if(!err)
        {
            msg='genre updated';
            return msg;
        }
        else
        {
            msg = {msg:'error occured',
             error:err};
             return msg;
        
        }
    });
    return result;
 
 }
 module.exports={deleteGenre,createGenre,updateGenre,getGenre,getGenres};