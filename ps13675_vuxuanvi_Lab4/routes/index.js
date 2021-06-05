var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var checkLogin = require('../common/authenticate');

///LOGIN
const users = [
  {id: 1, username: 'aaa', password:'111'},
  {id: 2, username: 'bbb', password:'222'},
]

/* GET Index page. */
router.get('/', checkLogin.check, function(req, res, next) {
  res.redirect('/products')
});

/* GET Login page. */
router.get('/login', function(req, res, next) {
  res.render('login')
});

/* POST Login page. */
router.post('/login', function(req, res, next) {
  let {username, password} = req.body
  let user = users.find(us => us.username == username && us.password == password)
  // console.log(user)
  if (user){
    let token = jwt.sign({user}, process.env.JWT_KEY);
    req.session.token = token;
    res.redirect('/products')
  }
  else{
    res.redirect('/login')
  }
});

/* GET Logout page. */
router.get('/logout', function(req, res, next) {
  req.session.destroy(function(err){
    res.redirect('/logout');
  })
});

module.exports = router;
