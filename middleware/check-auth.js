const jwt = require('jsonwebtoken');
const config = require('../config/config');    
module.exports = (req,res,next) => {
    // console.log(req.headers.authorization)  
   try {
        const token = req.headers.authorization.split(' ')[1];           
        const decoded = jwt.verify(token,config.SECRET);
        req.userData = decoded;
        next();
}
catch{
    res.json({message: '1009'});
}
}