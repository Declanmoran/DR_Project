import  mongoose  from "mongoose";
import PostMessage from "../models/postMessage.js";

//Enter router and ask for request and repond
export const getPosts = async (req, res) => {
    try {
        //Await needed for asynchronous action
        const postMessages = await PostMessage.find();

        //If status 200, all works and return posts
        res.status(200).json(postMessages);
    } catch (error) {
        //Status 404 if errors encountered, return error message
        res.status(404).json({message: error});
        
    }

}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error});
        
    }
}

export const updatePost = async (req, res) => {
    const {id: _id} = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true});

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({message: 'Post Deleted Successfully'});
}