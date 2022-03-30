
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/User";
const cors = require("cors");

const PORT = process.env.PORT || 4000;
const DB_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017/wp_clone"
const app = express();
app.use(cors())
app.use(express.json());

app.get('/', (req: express.Request, res: express.Response) => {
    res.send("<h1>hello world</h1>")
})
// test DB_URL
try {
    mongoose.connect(DB_URL)
} catch (error) {
    console.error('DB is not connected');
    process.exit(1);
}
const db = mongoose.connection
db.on('error', (err) => console.error(err));
db.once('open',() => console.log('Connected to MongoDB'));

app.use('/user', userRouter);

app.listen(PORT, ()=>console.log(`Server listen on port ${PORT}`));
