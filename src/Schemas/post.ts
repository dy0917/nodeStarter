import mongoose from 'mongoose';
const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required: '{PATH} is required!'
    },
    subtitle :{
        type: String
    },
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{
    timestamps:true
})

export default mongoose.model('Post',PostSchema);