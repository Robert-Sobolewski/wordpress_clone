
import "dotenv/config";
import express from "express";
const cors = require("cors");

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors())
app.use(express.json());

app.get('/', (req: express.Request, res: express.Response) => {
    res.send("<h1>hello world</h1>")
})


app.listen(PORT, ()=>console.log(`Server listen on port ${PORT}`));
