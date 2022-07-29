let express=require('express');
let port =8080;
let app=express();
let genre=require('./routes/genre');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/genre',genre);
app.listen(port,()=>{
    console.log(`server started on ${port}`);
});  