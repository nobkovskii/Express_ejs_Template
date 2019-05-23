const express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  res.render('signup', {
    title: 'Sign up'
  });
})

router.post('/', (req, res) => {
  var userName = req.body.user_name;
  var password = req.body.password;
  res.redirect('/signin')
})

module.exports = router;
