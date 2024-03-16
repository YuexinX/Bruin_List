import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from 'cookie-parser';
import pg from 'pg';
import user from "./routes/usr.js";
import cate from "./routes/cate.js";

const app = express();
const port = 4000;

export const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "bruin_list",
    password: "dd74747744",
    port: 5433,
})

db.connect();

app.use(bodyParser.json( ))
app.use(bodyParser.urlencoded({extended: true}));

const corsOption = {
    origin: '*',
    credential: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOption))


app.get('/', (req, res) => {
    res.json({success: "true"});
});

app.use('/usr', user);
app.use('/c', cate);

app.use((error, req, res, next)=>{
    if (res.heaerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || 'An unknown error occurred!'})
});

app.listen(port, ()=>{console.log(`running on port: ${port}`);});