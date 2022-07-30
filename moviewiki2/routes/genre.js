let express=require('express');
let {createGenre,getGenres,getGenre,updateGenre,deleteGenre}=require('../methods/genre');
let router=express.Router();

router.post('/add',(req,res)=>{  
    createGenre(req,res);
});
router.get('/',(req,res)=>{
   getGenres(req,res);
});
router.get('/:id',(req,res)=>{
  getGenre(req,res);
});
router.put('/:id',(req,res)=>{
    updateGenre(req,res);
});
router.delete('/:id',(req,res)=>{
    deleteGenre(req,res);
});
module.exports=router;