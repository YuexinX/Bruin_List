import {db} from "../index.js";
import HttpError from "../models/http-error.js";

export const get_all_categories = async (req, res)=>{
    const result = await db.query('SELECT name FROM "categories"');
    res.json(result.rows);
};

export const get_posts_by_categories = async (req, res, next) => {
    const cur_category = req.params.category;
    const result = await db.query('SELECT id FROM categories WHERE name = $1',[cur_category]);
    if (result.rows.length !== 0){
        const data = result.rows[0];
        const cid = data.id;
        const post_result = await db.query('SELECT comments.title, comments.body, comments.post_date, comments.author FROM post_categories INNER JOIN comments on post_categories.pid = comments.id WHERE post_categories.cid = $1;', [cid])
        res.json(post_result.rows);
    }
    else{
        return next( new HttpError('Could not find the category', 404));
    }
};