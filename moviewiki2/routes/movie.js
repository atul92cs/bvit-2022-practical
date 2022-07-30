let express=require('express');
let router=express.Router();
let {createMovie,updateMovie,getMovies,deleteMovie,getMovie}=require('../methods/movie');
router.post('/add',(req,res)=>
{
    createMovie(req,res);
});
router.get('/',(req,res)=>{
    getMovies(req,res);
});
router.get('/:id',(req,res)=>{
    getMovie(req,res);
});
router.put('/:id',(req,res)=>{
    updateMovie(req,res);
});
router.delete('/:id',(req,res)=>{
    deleteMovie(req,res);
});
module.exports=router;