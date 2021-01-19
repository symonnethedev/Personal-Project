const User = require("../models/Users");

//show the list of Users
const index = (req, res, next) => {
User.find()
 .then((response) => {
 res.json({
   response,
  });
 })
 .catch((error) => {
  res.json({
    message: "An error Occured!",
  });
 });
};

//show single User
const show = (req, res, next) => {
let userID = req.body.userID;
User.findById(userID)
  .then((responses) => {
   res.json({
   response,
 });
 })
 .catch((error) => {
 res.json({
   message: "An error occured",
 });
 });

//add and store new User

 const store = (req, res, next) => {
  let user = new User({
  name: req.body.name,
 email: req.body.email,
  password: req.body.password,
 });
 user.save()
 .then(response => {
 res.json({
     message: 'User Added Successfully'
 })
 })
  .catch(error => {
     res.json({
        message: 'An error occured'
    })
 })

//update a User
 const update = (req, res, next) => {
  let userID = req.body.userID

 let updatedData = {
    name: req.body.name,
   email: req.body.email,
  password: req.body.password

 }
 User.findByIdAndUpdate(userID, {$set: updatedData})
  .then(() => {
      res.json ({
        message: 'User updated successfully!'
     })
 })

.catch(error => {
    res.json({
    message: 'An error occured'
    })
 })

 }

//delete a user
  const destroy = (req, res, next) => {
    let userID = req.body.userID
    User.findByIdAndRemove(userID)
    .then(() => {
       req.json({
          message:'User deleted sucessfully! '
         })
   })
  .catch(error => {
      req.json({
        message: 'An error occured!'
   })
 })

  }

module.exports = {
  index, show, store, update, destroy
}
