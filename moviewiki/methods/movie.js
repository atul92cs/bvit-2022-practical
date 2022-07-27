addMovie=(id,name,genre,releaseyear,arr)=>{
    let movie={};
    movie.id=id;
    movie.name=name;
    movie.genre=genre;
    movie.releaseYear=releaseyear;
    arr.push(movie);
    let msg='movie added';
    return msg;
};
deleteMovie=(id,arr)=>{
    let selectedMovie=arr.filter(movie=>{
        return movie.id==id;
    });
    let movie=selectedMovie[0];
    let index=arr.indexOf(movie);
    arr.splice(index,1);
    let msg='Movie deleted';
    return msg;
};
getMovie=(id,arr)=>{
    let movie=arr.filter(ar=>{
        return ar.id==id;
    });
    return movie;
};
getMovies=(arr)=>{
    return arr;
};
updateMovie=(id,name,genre,releaseyear,arr)=>{
    let selectedMovie=arr.filter(movie=>{
        movie.id==id;
    });
    let newMovie=selectedMovie[0];
    let index=arr.indexOf(newMovie);
    arr.splice(index,1);
    newMovie.id=id;
    newMovie.name=name;
    newMovie.releaseYear=releaseyear;
    arr.push(newMovie);
};
module.exports={
    updateMovie,
    getMovies,
    getMovie,
    deleteMovie,
    addMovie
};
