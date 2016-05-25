var date = new Date();

module.exports.q3 = function(req, res)
{
	res.render('q3', {title: 'Quake III', user: req.user, date: date});
}

module.exports.jsgl = function(req, res)
{
	res.render('jsgl', {title: 'JSGL', user: req.user, date: date});
}

module.exports.html = function(req, res)
{
	res.render('html', {title: 'HTML5', user: req.user, date: date});
}

module.exports.reactor = function(req, res)
{
	res.render('reactor', {title: 'Reactor', user: req.user, date: date});
}

module.exports.howto = function(req, res)
{
	res.render('howto', {title: 'How to Play', user: req.user, date: date});
}

module.exports.hiscore = function(req, res)
{
	res.render('hiscore', {title: 'Global hiscores', user: req.user, date: date});
}

module.exports.about = function(req, res)
{
	res.render('about', {title: 'About this site', user: req.user, date: date});
}

module.exports.design = function(req, res)
{
	res.render('design', {title: 'Site design', user: req.user, date: date});
}

module.exports.valid = function(req, res)
{
	res.render('valid', {title: 'Site validation', user: req.user, date: date});
}

module.exports.feedback = function(req, res)
{
	res.render('feedback', {title: 'Feedback', user: req.user, date: date});
}