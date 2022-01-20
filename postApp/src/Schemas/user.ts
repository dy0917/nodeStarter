import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
    username :{
        type:String,
        unique:true,
        required: [true, "User must have a username"]
    },
    password:{
        type:String,
        required: [true, "User must have a password"]
    },
    posts : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Post'
        }
    ]
},{
    timestamps: true
})

export default mongoose.model('User', UserSchema);