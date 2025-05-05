import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import productRouter from './routes/productRouter.js';
import userRouter from './routes/userRouter.js';
import  Jwt from 'jsonwebtoken';
import orderRouter from './routes/orderRouter.js';



const app = express();  
app.use(bodyParser.json());
app.use((req, res, next) => {
    const tokenString = req.header('Authorization');
    if (tokenString != null) {
        const token = tokenString.replace("Bearer ", "");
        console.log(token);

        Jwt.verify(token, 'lightning-sword-galaxy', (err, decoded) => {
           if(decoded != null) {
                console.log(decoded);
                req.user = decoded;
                next();
            }else {res.json({
                message: 'Invalid token',
            })}
        })
    }else{
        next();
    }
    
})

mongoose.connect("mongodb+srv://vihass:123@cluster0.7crae.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to database");
}).catch(()=>{
    console.log("Connection failed");
})


app.use('/product', productRouter);
app.use('/user', userRouter);
app.use('/order', orderRouter);


app.listen(5000, ()=>{
    console.log('Server is running on port 5000');
})

// npm init -y
// npm install express
// npm install nodemon --save-dev
// npm install body-parser
// npm start cmond type in cmd you  can start the project
// npm install mongoose
// npm install dotenv
// npm install bcrypt
// npm install jsonwebtoken
// npm install express-validator
// npm install express-validator
// npm install cookie-parser
//mongodb+srv://Admin:12345@cluster0.7crae.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0