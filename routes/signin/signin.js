const User = require('../../models/User');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');    

module.exports = (app) => {
    app.post('/signin',(req,res)=>{
    let {username,password} = req.body
        User.findOne({username}).then((user)=>{
            if(user){ 
                isPass = bcrypt.compareSync(password,user.password)
                if(isPass){
                    const token = jwt.sign(
                    {
                        username: user.username,
                        userId: user._id
                    },
                    config.secret,
                    {
                        expiresIn : '30d'
                    }
                    );
                    res.json({token,message: "Success"});
                }
                else{
                    res.json({token: null,message: "Wrong Username or Password"});
                }
            }
            else{
                res.json({token: null,message: "Wrong Username or Password"});                           
            }
            
        })  
    })
}