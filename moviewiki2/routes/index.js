let express=require('express');
let router=express.Router();
let {getCharactersbyMovie}=require('../methods/genre');
router.get('/',(req,res)=>{
    let chars=getCharactersbyMovie(req,res);
    res.render('index',{chars:chars});
});
module.exports=router;