import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { wordpressClone } from "../types";
const SALT_ROUND= 10
const SECRET_KEY = process.env.SECRET_KEY || String(1111);

const userSchema = new mongoose.Schema({
  _id: String,
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, required:false},
  role: { type: String, required: true },
});

// pre hooks
userSchema.pre('save', function(next){
  const user = this.user;
    console.log('user inside save ',user);
    if(user.isModified('password')){
      // 1. salt
      bcrypt.genSalt(SALT_ROUND, function(err, salt){

        // 2. hash
        bcrypt.hash(user.password, salt, function(err, hash){
          if(err) return next(err);
          user.password = hash;
          next();
        })

      })
    }
    else{
      next();
    }
  
});

userSchema.methods.comparePasswords = async (formPass:any, dbPass:any) => {

}

userSchema.methods.generateToken = function(payload:any, expiration:any) {
  const token = jwt.sign(payload, SECRET_KEY)
}



const User = mongoose.model("User", userSchema);
export default User;
