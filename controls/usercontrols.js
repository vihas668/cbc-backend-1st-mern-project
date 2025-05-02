import User from "../models/use.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export function createUser(req, res) {

    if(req.body.role == "Admin"){
        if(req.user == null){

            if(req.body.role != "Admin"){
                res.json({
                    message:'you are not authorized to create an admin user'
                })
                return
            }        
    
        
        }else {
            
                res.status(403).json({
                    message:'unoharzied you need to be a an admin',      
            })     
            return
            
        }
    }
       
    

    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    console.log(req.body);
    const user = new User({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: hashedPassword,
        role: req.body.role,

    });
    user.save().then(() => {
        res.json({
            message: 'User created successfully',
        });
    }).catch(() => {
        res.json({
            message: 'Failed to create user',
        });
    });
};

export function loginUser(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email}).then((user) => {
        if(user == null) {
            res.status(404).json({
                message: 'User not found',
            });
        }else{
            const ispasswordCorrect = bcrypt.compareSync(password, user.password);
            const token = jwt.sign({
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                img: user.img,
            
            },"lightning-sword-galaxy");
            if(ispasswordCorrect) {
                res.status(200).json({
                    message: 'Login successful',
                    token: token,
                });
            } else {
                res.status(401).json({
                    message: 'Invalid password',
                });
            }
        };

    })

};