import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, ()=>{console.log(`running on port: ${port}`);});

app.get("/", (req, res)=>{
    res.sendFile(__dirname + '/test.html');
});

app.post("/submit", (req, res)=>{
    console.log(req.body);
});

app.get("/about", (req, res)=>{
    res.send("<h1> About us </h1>");
});