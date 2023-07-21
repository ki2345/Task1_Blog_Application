import express from 'express';
import mongoose from 'mongoose';
import router from "./routes/user-routes.js";
import blogrouter from './routes/blog-routes.js';


const app = express();
//middleware -- use, using this we are sending the response to the server
// app.use('/', (req, res, next) => {
//     res.send("Hello World");
// })
//eghjvNKjQcYx3mfU
//receiving the data and converting into json body
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogrouter);

//returns promise, it is a database request
mongoose.connect('mongodb+srv://reddy2002kiran:eghjvNKjQcYx3mfU@cluster0.0r9bx9o.mongodb.net/Blog')
.then(() => app.listen(5000))
.then(() => console.log("Connected to database and Listening to localhost 5000"))
.catch((err) => console.log(err))
