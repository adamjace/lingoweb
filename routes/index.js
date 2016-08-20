var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Mucho Lingo', 
    showHeader: false, 
    showFooter: true 
  });
});

module.exports = router;
