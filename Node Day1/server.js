let express=require('express');
let port =8080;
let app=express();
let user=require('./routes/users');
let cors=require('cors');
let path=require('path');
let handlebars=require('handlebars');
const {allowInsecurePrototypeAccess}=require('@handlebars/allow-prototype-access');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public')));
app.use(cors({
  methods:['GET','POST','DELETE','PUT'],
  origin:"*"
}));
app.use('/user',user);
app.listen(port,()=>{
    console.log(`server started on ${port}`);
});