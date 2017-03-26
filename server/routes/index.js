var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/gundam', function (req, res) {
  res.json(['unicorn', 'atlas', 'banshee', 'bael'])
})

router.get('/meals', function (req, res) {
  res.json(['bakmie', 'baso', 'soto', 'sate'])
})

module.exports = router;
