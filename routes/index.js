const express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Express + EJS'
  });
})

module.exports = router;
