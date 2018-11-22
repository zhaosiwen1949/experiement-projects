var express = require('express');
var router = express.Router();

router.get('/test.action', function(req, res, next){
  res.redirect('http://192.168.61.128:5080/ajax/redirect.action');
})

module.exports = router;