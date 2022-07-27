let express=require('express');
let router=express.Router();
let {addGenre,
    deleteGenre,
    getGenre,
    updateGerne,
    getAllGenre
}=require('../methods/genre');
let genres=[];
router.post('/add',(req,res)=>{
    let {id,name}=req.body;
    let response=addGenre(id,name,genres);
    res.status(200).json({
        msg:response
    });
});
router.delete('/:id',(req,res)=>{
    let {id}=req.params;
    let response=deleteGenre(id,genres);
    res.status(200).json({
        msg:response
    });
});
router.put("/:id",(req,res)=>{
    let {id}=req.params;
    let {name}=req.body;
    let response=updateGerne(id,name,genres);
    res.status(200).json({
        msg:response
    });
});
router.get('/',(req,res)=>{
    let response=getAllGenre(genres);
    res.status(200).json({
        msg:response
    });
});
router.get('/:id',(req,res)=>{
    let {id}=req.params;
    let response=getGenre(id,genres);
    res.status(200).json({
        msg:response
    });
});
module.exports={genres,router};
