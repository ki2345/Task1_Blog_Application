import mongoose from "mongoose";
import Blog from "../models/Blog";
import User from "../models/User";

export const getAllBlogs = async(req, res, next) => {
    let blogs;
    try{
        blogs = await Blog.find().populate("user");
    }
    catch(err){
        return console.log(err);
    }
    if(!blogs){
        return res.status(404).json({message: "No Blogs Found"});
    }
    return res.status(200).json({blogs});
}

export const addBlog = async(req, res, next) => {
    const {title, description, image, user} = req.body;
    let existUser;

    try{
        existUser = await User.findById(user);
    }
    catch(err){
        return console.log(err);
    }
    if(!existUser){
        return res.status(400).json({message: "Unable to find User by this Id"});
    }
    //create a new blog
    const blog = new Blog({
        title,
        description,
        image,
        user,
    });
    //saving the blog to the user also
    try{
        const session = await mongoose.startSession();
        session.startTransaction();
        //saving the blog from the current session 
        await blog.save({session});
        //pushing the blog's data to the array blogs, if he/she is an existing user
        existUser.blogs.push(blog);
        await existUser.save({session});
        await session.commitTransaction();
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message: err});
    }
    return res.status(200).json({blog});
}

export const updateBlog = async(req, res, next) => {
    const {title, description} = req.body;
    const blogId = req.params.id;
    let blog;
    try{
        blog= await Blog.findByIdAndUpdate(blogId, {
            title,
            description,
        })
    }
    catch(err){
        return console.log(err);
    }
    if(!blog){
        return res.status(500).json({message: "Unable to update the Blog"});
    }
    return res.status(200).json({blog});
}

export const getById = async(req, res, next) => {
    const id = req.params.id;
    let blog;
    try{
        blog =  await Blog.findById(id);
    }
    catch(err){
        return console.log(err);
    }
    if(!blog){
        return res.status(404).json({message: "No Blog Found!!"});
    }
    return res.status(200).json({blog});
}

export const deleteBlog = async(req, res, next) => {
    const id = req.params.id;
    let blog;
    try{
        blog = await Blog.findByIdAndRemove(id).populate('user');
        //remove the id of blog from user's blog array
        await blog.user.blogs.pull(blog);
        await blog.user.save();
    }
    catch(err){
        return console.log(err);
    }
    if(!blog){
        return res.status(500).json({message: "Unable to delete the blog!!"});
    }
    return res.status(200).json({message: "Deleted Successfully!!"});
}

export const getByUserId = async(req, res, next) => {
    const userId = req.params.id;
    let userBlogs;
    try{
        userBlogs = await User.findById(userId).populate("blogs");
    }
    catch(err){
        return console.log(err);
    }
    if(!userBlogs){
        return res.status(404).json({message: "No Blog Found"});
    }
    return res.status(200).json({user: userBlogs});
}