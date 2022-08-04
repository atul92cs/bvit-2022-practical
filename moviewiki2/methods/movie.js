const db=require('../config/db');

createMovie=(req,res)=>{
    let {name,release,genre}=req.body;

    let filename=new Date().toISOString().replace(/:/g,'-')+'-'+req.file.originalname ;
    let sql='insert into movie set ?';
    let body={name:name,release_year:release,genre:genre,image:filename};
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            return res.status(200).json({
                msg:'movie created'
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
updateMovie=(req,res)=>{
    let {name,genre,release}=req.body;
    let {id}=req.params;
    let sql='update movie set name=? genre=? release_year=? where id =? ';
    let body=[name,genre,release,id];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            return res.status(200).json({
                msg:'movie updated'
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
deleteMovie=(req,res)=>{
    let {id}=req.params;
    let sql='delete from movie where id=?';
    let body=[id];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
           return res.status(200).json({
            msg:'movie deleted'
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
getMovies=(req,res)=>{
    let sql ='SELECT movie.id,movie.name,movie.release_year as releaseyear,genre.name as genre FROM movie left join genre on movie.genre=genre.id;';
    db.query(sql,(err,result)=>{
        if(!err)
        {
            if(result.length>0)
            {
                return res.status(200).json({
                    movies:result
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
getMovie=(req,res)=>{
    let {id}=req.params;
    let sql ='SELECT movie.id,movie.name,movie.release_year as releaseyear,genre.name as genre FROM movie left join genre on movie.genre=genre.id where movie.id=?';
    let body=[id];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            if(result.length>0)
            {
                return res.status(200).json({
                    movies:result
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

module.exports={createMovie,deleteMovie,updateMovie,getMovies,getMovie};