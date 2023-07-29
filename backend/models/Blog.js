import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    //tells which particular user has posted the blog
    //created the reference of user for the blog, making relation between user and blog using mongoose
    //one blog - one user
    //one user - multiple blogs
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    }
})
export default mongoose.model("Blog", blogSchema);