let express=require('express');
let router=express.Router();
let {movies}=require('./movie');
let {genres}=require('./genre');
let {casts}=require('./cast');
let {getAllCast,
    updateCast,
    deleteCast,
    getCast,
    addCast}=require('../methods/cast');
let {addGenre,
    deleteGenre,
    getGenre,
    updateGerne,
    getAllGenre
}=require('../methods/genre');
let {updateMovie,
    getMovies,
    getMovie,
    deleteMovie,
    addMovie
}=require('../methods/movie');

router.get('/',(req,res)=>{
    let almovies= getMovies(movies);
    res.status(200).json({
        movies:almovies
    });
});
router.get('/:id',(req,res)=>{
    let {id}=req.params;
    let movie=getMovie(id,movies);
    let genre=movie[0].genre;
    let newgenre=getGenre(genre,genres);
    let {name}=newgenre[0];
    movie[0].genre=name;
    let casts=getCast(id,casts);
    movie[0].cast=casts[0];
    res.status(200).json({
        movie:movie
    });
    

});
module.exports=router;