module.exports.q3 = function(req, res)
{
	res.render('q3', {title: 'Quake III', user: req.user});
}

module.exports.jsgl = function(req, res)
{
	res.render('jsgl', {title: 'JSGL', user: req.user});
}

module.exports.html = function(req, res)
{
	res.render('html', {title: 'HTML5', user: req.user});
}

module.exports.reactor = function(req, res)
{
	res.render('reactor', {title: 'Reactor', user: req.user});
}

module.exports.howto = function(req, res)
{
	res.render('howto', {title: 'How to Play', user: req.user});
}

module.exports.hiscore = function(req, res)
{
	res.render('hiscore', {title: 'Global hiscores', user: req.user});
}

module.exports.elite = function(req, res)
{
	res.render('elite', {title: 'Elite corner', user: req.user});
}

module.exports.about = function(req, res)
{
	res.render('about', {title: 'About this site', user: req.user});
}

module.exports.design = function(req, res)
{
	res.render('design', {title: 'Site design', user: req.user});
}

module.exports.valid = function(req, res)
{
	res.render('valid', {title: 'Site validation', user: req.user});
}

module.exports.feedback = function(req, res)
{
	res.render('feedback', {title: 'Feedback', user: req.user});
}