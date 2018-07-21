const User = require('../models/User')
module.exports = (app) => {
    
   require('./newUrl/newUrl')(app);

   require('./register/register')(app);

   require('./signin/signin')(app);

   require('./removeUrl/removeUrl')(app);   

   require('./checkAuth/checkAuth')(app);      
}

