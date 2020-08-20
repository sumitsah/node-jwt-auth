const authRouter = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const user = {
        name: 'John',
        email: 'john@gmail.com',
        password: 'xiuyit76hhj'
    };
authRouter.post('/login', (req, res) => {

    if(req.body.email === user.email){
        
        //create and assign a token 
        const token = jwt.sign({_email: user.email},'kjhkjiiv765c76vn');
        res.header('auth-token', token).send(token);

        res.send('LoggedIn!');
    }

    // user.save((err) => {
    //     if(err) console.log(err);
    //     else console.log('Document saved!!');
    // })
    // try{
    //     console.log(`user object ${user}`)
    //     const savedUser = await user.save();
    //     res.send(savedUser);
    // }catch(err){
    //     res.status(400).send(err);
    // }
});

module.exports = authRouter;