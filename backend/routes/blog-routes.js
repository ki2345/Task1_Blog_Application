import express from 'express';
import { addBlog, deleteBlog, getAllBlogs, getById, getByUserId, updateBlog } from '../controllers/blog-controller';

const blogrouter = express.Router();

blogrouter.get("/", getAllBlogs);
blogrouter.post("/add", addBlog);
blogrouter.put("/update/:id", updateBlog);
//get the blog by id
blogrouter.get("/:id", getById);
blogrouter.delete("/:id", deleteBlog);
//getting the blogs of users
blogrouter.get("/user/:id", getByUserId);

export default blogrouter;