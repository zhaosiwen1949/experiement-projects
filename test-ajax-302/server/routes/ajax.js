var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/redirect.action', function (req, res, next) {
  res.send('重定向请求响应成功');
});

module.exports = router;
