
addUser=(users,name,id,email)=>{
    let user={
        name:name,
        id:id,
        email:email
    }
    users.push(user);
    let msg='user added';
    return msg;
}
showUsers=(users)=>{
    return users;
}
deleteUsers=(id,arr)=>{
    let ele=arr.filter(ar=>{
        return ar.id==id;
    });
    let index=arr.indexOf(ele[0]);
    arr.splice(index,1);
    let msg='user deleted';
    return msg;
}
updateUser=(id,email,name,arr)=>{
    let user=arr.filter(ar=>{
        return ar.id==id;
    });
    let index=arr.indexOf(user[0]);
    user.email=email;
    user.name=name;
    arr.splice(index,1);
    arr.push(user);
    let msg='user updated';
    return msg;
}
module.exports={
    addUser,
    showUsers,
    deleteUsers,
    updateUser
}
