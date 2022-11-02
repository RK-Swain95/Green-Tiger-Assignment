const mongoose =require('mongoose');
const studentschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
     age:{
        type:Number,
        required:true
    },
    Dept:{
        type:String,
        required:true
    },
    Date_of_joining:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const Student =mongoose.model('Student',studentschema);
module.exports=Student;