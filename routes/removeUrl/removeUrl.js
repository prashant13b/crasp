module.exports = (app) => {

app.put('/removeUrl',(req,res)=>{
    let {username , url} = req.body;

    User.findOne({username}).then((user)=>{
     if(user){ user.urls = user.urls.filter(item => item.url !== url)
        user.save().then((user)=>{
            res.json(user)
        })}
        else{
            res.send('no user found');
        }
    });

});

}