import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email :{type:String, required:true, unique:true},
    firstName :{type:String, required:true},
    lastName :{type:String, required:true},
    password :{type:String, required:true},
    role:{type:String, required:true, default:"Coustemer"},
    isBlocked:{type:Boolean, default:false},
    img:{type:String,required:false,default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-978409_1280.png"},

});

const User = mongoose.model("User", userSchema);

export default User;  