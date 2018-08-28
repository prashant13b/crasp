const User = require('../../models/User');
const checkAuth = require('../../middleware/check-auth')

const getUrls = app => {
    app.get('/getUrls',checkAuth,(req,res)=>{    
        let {userId} = req.userData;
        User.findById(userId).then(user => {
            if(user){
                const urls = user.urls.map( url => {
                    return url.url
                })
                res.json(urls)
            }
            else{
                res.status(404).json({Message:"Bad request"})
            }
        })
    })
}
module.exports = getUrls;