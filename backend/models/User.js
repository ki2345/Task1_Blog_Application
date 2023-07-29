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
    //multiple blogs can be there, so used array of objects
    blogs: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Blog",
            required: true
        }
    ]
});
export default mongoose.model("User", userSchema); //model -- collection
//in mongodb - collection will be stored as users