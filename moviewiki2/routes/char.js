let express=require('express');
let router=express.Router();
let {createCharacter,getCharacter,getCharacters,deleteCharacter,updateCharacter}=require('../methods/char');
router.get('/',(req,res)=>{
    getCharacters(req,res);
});
router.get('/:id',(req,res)=>{
    getCharacter(req,res);
});
router.post('/add',(req,res)=>{
    createCharacter(req,res);
});
router.delete('/:id',(req,res)=>{
    deleteCharacter(req,res);
});
router.put('/:id',(req,res)=>{
    updateCharacter(req,res);
});
module.exports=router;