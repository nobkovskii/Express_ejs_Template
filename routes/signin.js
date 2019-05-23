const express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  if(req.session.user_name){
    res.redirect('/')
  }else{
    res.render('signin',{
      title:'signin'
    })
  };
})

router.post('/',(req,res) => {
  var user_name = req.body.user_name;
  var password = req.body.password;
  if(user_name){
    req.session.user_name = user_name
    res.redirect('/')
  }else{
    res.render('signin',{
      title:'Sign in',
      noUser: 'ユーザが存在しません'
    })
  }
})

module.exports = router;
