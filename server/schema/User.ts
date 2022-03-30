import mongoose from "mongoose";
import { wordpressClone } from "../types";

const userSchema = new mongoose.Schema({
  _id: String,
  username: {
    type: String,
    required: true,
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, required:false},
  role: { type: String, required: true },
});
const User = mongoose.model("User", userSchema);
export default User;
