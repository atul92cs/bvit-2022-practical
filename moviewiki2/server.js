let express=require('express');
let port =8080;
const multer=require('multer');
let app=express();
let genre=require('./routes/genre');
let movie=require('./routes/movie');
let char=require('./routes/char');
let index=require('./routes/index');
let hbs=require('handlebars');
let exphbs=require('express-handlebars');
let {allowInsecurePrototypeAccess}=require('@handlebars/allow-prototype-access');
let filestroage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'images');
    },
    filename:(req,file,cb)=>{
        cb(null,new Date().toISOString().replace(/:/g,'-')+'-'+file.originalname);
}});
app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.use(multer({storage:filestroage}).single('image'));
app.use('/',index);
app.use('/genre',genre);
app.use('/movie',movie);
app.use('/char',char);
app.listen(port,()=>{
    console.log(`server started on ${port}`);
});  