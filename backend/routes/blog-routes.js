import express from 'express';
import { addBlog, deleteBlog, getAllBlogs, getById, updateBlog } from '../controllers/blog-controller';

const blogrouter = express.Router();

blogrouter.get("/", getAllBlogs);
blogrouter.post("/add", addBlog);
blogrouter.put("/update/:id", updateBlog);
blogrouter.get("/:id", getById);
blogrouter.delete("/:id", deleteBlog);

export default blogrouter;