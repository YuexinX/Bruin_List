import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        hi: true,
        name: "name",
        age: 6})
});

export default router;