const express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  req.session.destroy();
  res.redirect('/');
})

module.exports = router;
