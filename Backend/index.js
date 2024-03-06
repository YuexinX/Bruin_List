import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/router.js";

const app = express();
const port = 4000;

app.use(bodyParser.json( ))
app.use(bodyParser.urlencoded({extended: true}));

const corsOption = {
    origin: '*',
    credential: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOption))

app.use('/', router)

app.listen(port, ()=>{console.log(`running on port: ${port}`);});