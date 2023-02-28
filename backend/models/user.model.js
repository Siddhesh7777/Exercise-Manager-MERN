const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const userSchema= new Schema({
username:{
    type:"string",
    required:true,
    unique:true,
    trim:true,
    minLength:3
},
},
{timestamps:true

}


);
const user=mongoose.model('user',userSchema);
module.export=user;
