const User = require('../../models/User');
const checkAuth = require('../../middleware/check-auth')

module.exports = (app) =>{

app.post('/newUrl',checkAuth,(req,res)=>{
    let {username} = req.userData;
    let {url} = req.body;
    User.findOne({username}).then((user)=> {
        if(user){
            user.urls.push({
                "url":url,
                done: false
            })
            user.save().then(()=>{
                res.json({message:"Downloading"})
            });
        }
        else{
            res.status(404).json({Message:"bad request"})
        }
    })
})

}