let express=require('express');
let router=express.Router();
let movies=[];
let {updateMovie,
    getMovies,
    getMovie,
    deleteMovie,
    addMovie
}=require('../methods/movie');
router.post('/add',(req,res)=>{
    let {id,name,genre,releaseyear}=req.body;
    let response=addMovie(id,name,genre,releaseyear,movies);
    res.status(200).json({
        msg:response
    });
});
router.put('/:id',(req,res)=>{
    let {id}=req.params;
    let {name,genre,releaseyear}=req.body;
    let response=updateMovie(id,name,genre,releaseyear,movies);
    res.status(200).json({
        msg:response
    });
});
router.get('/',(req,res)=>{
    let response=getMovies(movies);
    res.status(200).json({
        msg:response
    });
});
router.get('/:id',(req,res)=>{
    let {id}=req.params;
    let response=getMovie(id,movies);
    res.status(200).json({
        msg:response
    });
});
module.exports={movies,router};