const jwt = require('jsonwebtoken');
const config = require('../config/config');    
module.exports = (req,res,next) => {
    // console.log(req.headers.authorization)  
    const token = req.headers.authorization.split(' ')[1];
   try {           
        const decoded = jwt.verify(token,config.secret);
        req.userData = decoded;
        next();
}
catch{
    res.json({message: 'failed to authorize request'});
}
}