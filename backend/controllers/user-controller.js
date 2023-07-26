import User from "../models/User.js";
import bcrypt from "bcryptjs";

//http requests are always async tasks, always use try-catch block while implementing database as database can fail also
export const getAllUser = async(req, res, next) => {
    let users;
    try{
        users = await User.find();
    } 
    catch(err){
        console.log(err);
    }  
    if(!users){
        return res.status(404).json({message: "No User Found"});
    }
    return res.status(200).json({users});
}

export const signup = async(req, res, next) => {
    const {name, email, password} = req.body;
    let existUser;
    try{
        existUser = await User.findOne({email});
    }
    catch(err){
        return console.log(err);
    }
    if(existUser){
        return res.status(400).json({message: "User Already Exists!! Login Again"});
    }
    //bycript is helping in creating random password
    const hashedPassword = bcrypt.hashSync(password);
    //creating new user
    const user = new User({
        name,
        email, 
        password: hashedPassword,
        blogs: [],
    });

    try{
        //for saving the document inside the database
        await user.save();
    }
    catch(err){
        return console.log(err);
    }
    return res.status(201).json({user})
}

export const login = async(req, res, next) => {
    const {email, password} = req.body;
    let existUser;
    try{
        existUser = await User.findOne({email});
    }
    catch(err){
        return console.log(err);
    }
    if(!existUser){
        return res.status(404).json({message: "Invalid User!! Signup Again"});
    }
    //comparing the existing password with the current password
    const isPasswordCorrect = bcrypt.compareSync(password, existUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message: "Incorrect Password"});
    }
    return res.status(200).json({message: "Login Successfull!!", user: existUser});
}
