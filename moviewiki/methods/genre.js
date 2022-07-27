addGenre=(id,name)=>{
    let genre={};
    genre.id=id;
    genre.name=name;
    let msg='genre added';
    return msg;
};
deleteGenre=(id,arr)=>{
    let genre=arr.filter(ar=>{
        return ar.id==id;
    });
    let delGenre=genre[0];
    let index=arr.indexOf(delGenre);
    arr.splice(index,1);
    let msg='genre deleted';
    return msg;

};
getGenre=(id,arr)=>{
    let genre=arr.filter(ar=>{
        return ar.id==id;
    });
    let selGenre=genre[0];
    return selGenre;
};
updateGerne=(id,name,arr)=>{
    let genre=arr.filter(ar=>{
        return ar.id==id;
    });
    let newGenre=genre[0];
    let index=arr.indexOf(newGenre);
    arr.splice(index,1);
    newGenre.id=id;
    newGenre.name=name;
    arr.push(newGenre);
    
};
getAllGenre=(arr)=>{
    return arr;
};
module.exports={
    addGenre,
    deleteGenre,
    getGenre,
    updateGerne,
    getAllGenre
};