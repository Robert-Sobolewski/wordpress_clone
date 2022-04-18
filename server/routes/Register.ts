import express from 'express';
import User from '../schema/User'
const registerRouter = express.Router();


registerRouter.post('/',async(req:express.Request, res: express.Response)=>{

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avatar!= null? req.body.avatar: "",
        role: req.body.role!=null? req.body.role:"user"
    });
    try {
        const newUser = await user.save();
        res.json({success: true, user: user})
    } catch (error:any) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
});

export default registerRouter;
/**
 * 
 *  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, required:false},
  role: { type: String, required: true },
 * 
 * */