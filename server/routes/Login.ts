import express from 'express';
import User from '../schema/User';
import bcrypt from 'bcrypt'
const loginRouter =  express.Router();


loginRouter.post('/', async (req: express.Request, res: express.Response) => {


    try {
        let user = await User.findOne({
            email: req.body.email,
        }).exec();
        //console.log('login user=',user)
        if(!user)return res.status(401).json({success: false, message:"user not found"})
        bcrypt.compare(req.body.password, user.password, function (err:any,result:any) {
            if(err){
                console.log(err)
                return res.status(401).json({success: false, message: "wrong login or password!!!"})
            }
            
            if(result){
                console.log('result', result)
                return res.status(200).json({success:true, user: user})
            }
            else{
                return res.status(401).json({success:false, message: "wrong password!!!"})
            }
        })
        
    
    } catch (error:any) {
        return res.status(500).json({success: false, message: error.message})
    }
})



export default loginRouter;
