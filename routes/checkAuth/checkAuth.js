const User = require('../../models/User');
const checkAuth = require('../../middleware/check-auth')

const check_Auth = app =>{

app.post('/checkAuth',checkAuth,(req,res)=>{
    
    let {username} = req.userData;
    User.findOne({username}).then((user)=> {
        if(user){
                res.json({message:"isAuth"})
        }
        else{
            res.status(404).json({message:"bad request"})
        }
    })
})

}

module.exports = check_Auth;