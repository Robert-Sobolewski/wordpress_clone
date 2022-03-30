import express from 'express';
import User from '../schema/User';


const userRouter = express.Router();

//get all users
userRouter.get('/', async( req:express.Request, res:express.Response)=>{
    try {
        const users = await User.find()
        res.json(users);
    } catch (error:any) {
        res.status(500).json({message: error.message})
    }
});

//create a new user




export default userRouter;