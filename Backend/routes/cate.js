import express from "express";
import * as controllers from "../controllers/category-controller";


const cate = express.Router();



cate.get('/', controllers.get_all_categories);

cate.get('/:category', controllers.get_posts_by_categories)
export default cate;