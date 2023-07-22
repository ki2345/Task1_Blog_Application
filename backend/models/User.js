import mongoose from "mongoose";

//building the schema with user collection
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    blogs: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Blog",
            required: true
        }
    ]
});
export default mongoose.model("User", userSchema); //model -- collection