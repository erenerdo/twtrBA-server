const express = require('express');
const router = express.Router();

var Twit = require('twit');

var T = new Twit({
  consumer_key: 'XbFszcwgPUEMdGcwvciK7rzcX',
  consumer_secret: 'AXdjZIvih3JpC8CDUUEeXjZB0yh6HyePKYv8BbVjfUauHEBVN8',
  access_token: '192300852-ZYHLZY9V4JTKtV6UDGDQ2fblLeNM2NqUvNuT2CFv',
  access_token_secret: 'DIgQDembz8jeAFwQ4Ru5wMngWHC9CBavFyQxj1xgqAAb0'
});


router.get('/:searchParams', function (req, res, next) {
  const search = req.params.searchParams.split('_').join(' ');

  T.get('search/tweets', { q: `${search} since:2011-07-11`, count: 50, lang: 'en'}, function(err, data, response) {
    if (err) res.statusCode(500);
    res.json(data);
  });

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
