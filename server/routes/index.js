var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express APIs' });
});

router.get('/testJson', function(req, res, next) {
  res.send({ testJson: 'success' });
});

module.exports = router;
