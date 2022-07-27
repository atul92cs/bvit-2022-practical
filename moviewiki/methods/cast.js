addCast=(id,name,age,charname,movie,arr)=>{
    let char={};
    char.id=id;
    char.name=name;
    char.age=age;
    char.characterName=charname;
    char.movie=movie;
    arr.push(char);
    let msg='character added';
   return msg;

};
getCast=(movie,arr)=>{
    let cast=arr.filter(char=>{
        return char.movie==movie;
    });
    return cast;
};
deleteCast=(id,arr)=>{
    let character=arr.filter(char=>{
        return char.id==id;
    });
   let index=arr.indexOf(character[0]);
   arr.splice(index,1);
   let msg='character deleted';
   return msg;
};
updateCast=(id,name,age,charname,movie,arr)=>{
    let character=arr.filter(char=>{
        return char.id==id;
    });
   let index=arr.indexOf(character[0]);
   arr.splice(index,1);
   let newChar=character[0];
   newChar.id=id;
   newChar.name=name;
   newChar.age=age;
   newChar.characterName=charname;
   newChar.movie=movie;
   arr.push(newChar);
   let msg='character updated';
   return msg;
};
getAllCast=(arr)=>{
    return arr;
};
module.exports={
    getAllCast,
    updateCast,
    deleteCast,
    getCast,
    addCast
};