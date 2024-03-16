import express from "express";

const user = express.Router();

const users=[
    {
    uid: 'yxu404',
    user_name: 'Yuexin Xu',
    description: 'third year CS major'
},
{
    uid: 'skj3',
    user_name: 'Seki Jun',
    descripton: 'made up person'
}];

user.get('/', (req, res) => {
    res.status(200).json({message: "success!"});
});

user.get('/:uid', (req, res) => {
    const usr_id = req.params.uid;
    const user = users.find((usr) => {return usr.uid === usr_id;});
    res.status(200).json(user);
});



export default user;