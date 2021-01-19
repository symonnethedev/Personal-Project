const user  =require('../models/user')
const bcrypt =require('bcryptjs')
const jwt = require('jsonwebtoken')

const registration = (req, res, next) => {
    bcrypt.hash(req.body.password,10 function(err, hashedpass) {
        if(err) {
            res.json({
                error:err
            })
        }
    })

    let user = new User ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    user.save()
    .then(user => {
        res.json({
            message: 'User Added Sucessfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password
    user.findOne({$or: [{email:username}]})
    .then(user => {
        if (user){
           bcrypt.compare(password, user.password, function(err, result) {
              if(err){
                  res.json({
                      error: err
                  })
              }
              if(result){
                  let token = jwt.sign({name:user.name}, 'verySecrectValue', {expiresIn: '1h'})
                  res,json({
                      message: 'Login Sucessful',
                      token
                  })
              }else{
                  res.json({
                      message: 'Password does not match!'
                  })
              }
           })
        }else{
            res.json({
                message: 'No user found'
            })
        }
    })
}

module.exports = {
    register, login
}