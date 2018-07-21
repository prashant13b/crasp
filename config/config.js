if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod')
}
else{
    module.exports = require('./dev')    
    // DB : `link for database
    //PORT : port number
    //SECRET: for bcrypt
}