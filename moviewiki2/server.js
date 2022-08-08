let express=require('express');
let port =8080;
const multer=require('multer');
let app=express();
let genre=require('./routes/genre');
let movie=require('./routes/movie');
let char=require('./routes/char');
let index=require('./routes/index');
let hbs=require('handlebars');
let {engine}=require('express-handlebars');
let path=require('path');
let {allowInsecurePrototypeAccess}=require('@handlebars/allow-prototype-access');
let filestroage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'images');
    },
    filename:(req,file,cb)=>{
        cb(null,new Date().toISOString().replace(/:/g,'-')+'-'+file.originalname);
}});
app.use(express.json());
app.engine('.handlebars',engine({extname:'.handlebars'}));
app.set('view engine','.handlebars');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use('/images',path.join(__dirname,'images'));
app.use(multer({storage:filestroage}).single('image'));
app.use('/',index);
app.use('/genre',genre);
app.use('/movie',movie);
app.use('/char',char);
app.listen(port,()=>{
    console.log(`server started on ${port}`);
});  