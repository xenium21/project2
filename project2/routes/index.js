var express = require('express');

// Login info.
var passport = require('passport');
var Account = require('../models/account');
var Scores = require('../models/scores');

var router = express.Router();

var sitePages = require('../routes/pages');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Home', user: req.user });
});

/* About the theme */
router.get( '/q3', sitePages.q3 );

/* About JSGL */
router.get( '/jsgl', sitePages.jsgl );

/* About HTML5 */
router.get( '/html', sitePages.html );

/* The JS game */
router.get( '/reactor', sitePages.reactor );

router.post( '/reactor', function(req, res) {
    console.log("POST score");
    // Insert into database
    var name = req.body.name;
    var diff = req.body.difficulty;
    var score = Number(req.body.score);
    console.log("Got " + name + " " + diff + " " + score);

    if( Scores.find({ username: name }) )
    {
        console.log("exists");
    }

    new Scores({
    "username": name,
    "difficulty": diff,
    "score": score
    }).save(function(err, doc) {
        if(err) res.json(err);
        else res.send("Inserted");
    });
});

/* How to play the game */
router.get( '/howto', sitePages.howto );

/* Hi-score list */
router.get( '/hiscore', sitePages.hiscore );

/* Dynamic user content */
router.get( '/elite', sitePages.elite );

/* About page */
router.get( '/about', sitePages.about );

/* Design */
router.get( '/design', sitePages.design );

/* Validation */
router.get( '/valid', sitePages.valid );

/* Feedback */
router.get( '/feedback', sitePages.feedback );

// Account handler
router.get('/register', function(req, res) {
    res.render('register', { title: 'Registration' });
});

router.post('/register', function(req, res, next) {
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

router.get('/login', function(req, res) {
    res.render('login', { title: 'Login', user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
