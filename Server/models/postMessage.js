import mongoose from 'mongoose';

//Specifies what each post requires
const postSchema = mongoose.Schema({
    team: String,
    playerName: String,
    position: String,
    creator: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

//Export Mongoose model from postMessage.js
export default PostMessage;