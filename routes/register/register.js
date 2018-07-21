const User = require('../../models/User');
const bcrypt = require('bcrypt-nodejs');

module.exports = (app) => {
    
    app.post('/register',(req,res)=>{

       let {username,password} = req.body;
        const hash = bcrypt.hashSync(password);
        
       User.findOne({username}).then((user)=>{
                if(!user){
                    User.create({
                        username,password:hash
                    }).then((user)=>{
                        res.json({message:"success"});
                    })
                }
                else{
                    res.json({message:"fail"});
                }
            })
    
    })
}   