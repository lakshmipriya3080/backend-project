const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://lakshmi:lakshmi@cluster0.s842ipy.mongodb.net/db1?retryWrites=true&w=majority")
.then(()=>{console.log("Db connected")})
.catch(err=>console.log(err));

let sc=mongoose.Schema;
const studschema=new sc({
    Admno:String,
    Sname:String,
    age:Number,
    Status:String
});
var studmodel=mongoose.model("Student",studschema)
module.exports=studmodel;
