let express=require('express');
let port =8080;
let app=express();
let cast=require('./routes/cast');
let genre=require('./routes/genre');
let movie=require('./routes/movie');
let index=require('./routes/index');
let cors=require('cors');
app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.use('/cast',cast.router);
app.use('/genre',genre.router);
app.use('/movie',movie.router);
app.use('/',index);
app.use(cors({
    methods:['GET','POST','DELETE','PUT'],
    origin:"*"
  }));
app.listen(port,()=>{
    console.log(`server started on ${port}`);
});  