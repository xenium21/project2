var express = require('express');

// Login info.
var passport = require('passport');
var Account = require('../models/account');
var Scores = require('../models/scores');

var router = express.Router();
var cors = require('cors');
var sitePages = require('../routes/pages');

/* GET home page. */
router.get('/', cors(), function(req, res) {
  res.render('index', { title: 'Home', user: req.user });
});

/* About the theme */
router.get( '/q3', cors(), sitePages.q3 );

/* About JSGL */
router.get( '/jsgl', cors(), sitePages.jsgl );

/* About HTML5 */
router.get( '/html', cors(), sitePages.html );

/* The JS game */
router.get( '/reactor', cors(), sitePages.reactor );

router.post( '/reactor', cors(), function(req, res) {
    console.log("POST score");
    // Insert into database
    var name = req.body.name;
    var diff = req.body.difficulty;
    var score = Number(req.body.score);
    console.log("Got " + name + " " + diff + " " + score);
    new Score({
        "username": name,
        "difficulty": diff,
        "score": score
    }).save(function(err, doc) {
        if(err) res.json(err);
        else res.send("Inserted");
    });
});

/* How to play the game */
router.get( '/howto', cors(), sitePages.howto );

/* Hi-score list */
router.get( '/hiscore', cors(), sitePages.hiscore );

/* Dynamic user content */
router.get( '/elite', cors(), sitePages.elite );

/* About page */
router.get( '/about', cors(), sitePages.about );

/* Design */
router.get( '/design', cors(), sitePages.design );

/* Validation */
router.get( '/valid', cors(), sitePages.valid );

/* Feedback */
router.get( '/feedback', cors(), sitePages.feedback );

// Account handler
router.get('/register', cors(), function(req, res) {
    res.render('register', { title: 'Registration' });
});

router.post('/register', cors(), function(req, res, next) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
          return res.render('register', { error : err.message });
        }

        passport.authenticate('local')(req, res, function () {
            req.session.save(function (err) {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        });
    });
});

router.get('/login', cors(), function(req, res) {
    res.render('login', { title: 'Login', user : req.user });
});

router.post('/login', cors(), cors(), passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', cors(), function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
