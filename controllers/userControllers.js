var models = require('../models/user');
var bcrypt = require('bcrypt');

exports.createUser = function(req,res){
    var details = {
        email:req.body.email,
        password:req.body.password
    }
    models.create(details, function(err){
        if(err) res.json({err:err, message:'error signing up new user'})
        res.json({message:'NEw user Signup Successful'});

    })

}