const { Router } = require('express');

const userRouter = require('express').Router();
const verify = require('./verifyToken');

userRouter.get('/', verify, (req,res) => {
    res.json({posts: {title: 'My posts'}, description: 'some random posts'});
})

module.exports = userRouter;