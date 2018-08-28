const User = require('../../models/User');
const checkAuth = require('../../middleware/check-auth')

const newUrl = app =>{

app.post('/newUrl',checkAuth,(req,res)=>{
    let {userId} = req.userData;
    let {url} = req.body;
    User.findById(userId).then(user=> {
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
            res.status(404).json({Message:"Bad request"})
        }
    }).catch(e=>{
        res.json(e.message);
        
    })
})

}

module.exports = newUrl;