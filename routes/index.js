const express = require('express');
const router = express.Router();

// could use one line instead: const router = require('express').Router();

router.get('/', function (req, res, next) {
  res.json({working: true});
});

// router.get('/users/:name', (req, res) => {
//   // console.log(req.params.name);
//   // console.log(tweetBank.find({name: req.params.name}));
//   res.render('index', {
//     tweets: tweetBank.find({name: req.params.name}),
//     showForm: true
//   });
// });

// router.get('/tweets/:id', (req, res) => {
//   let num = Number(req.params.id);
//   // console.log(num);
//   // console.log(tweetBank.find({id: num}));
//   res.render('index', {
//     tweets: tweetBank.find({id: num}),
//     showForm: true
//   });
// });
module.exports = router;
