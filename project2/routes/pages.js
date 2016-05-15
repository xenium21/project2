module.exports.q3 = function(req, res)
{
	res.render('q3', {title: 'Quake III'});
}

module.exports.jsgl = function(req, res)
{
	res.render('jsgl', {title: 'JSGL'});
}

module.exports.html = function(req, res)
{
	res.render('html', {title: 'HTML5'});
}

module.exports.reactor = function(req, res)
{
	res.render('reactor', {title: 'Reactor'});
}

module.exports.howto = function(req, res)
{
	res.render('howto', {title: 'How to Play'});
}

module.exports.about = function(req, res)
{
	res.render('about', {title: 'About this site'});
}