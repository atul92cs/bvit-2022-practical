let express=require('express');
let port =8080;
let app=express();
let genre=require('./routes/genre');
let movie=require('./routes/movie');
let char=require('./routes/char');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/genre',genre);
app.use('/movie',movie);
app.use('/char',char);
app.listen(port,()=>{
    console.log(`server started on ${port}`);
});  