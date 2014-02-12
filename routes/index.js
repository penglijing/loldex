var lol = lol || {};

lol.route = lol.route || {};

lol.fileRequire = lol.fileRequire  || {};
lol.fileRequire.login = require('./login');
lol.fileRequire.register = require('./register');
lol.fileRequire.register = require('./hackIndex');
/*
 * GET home page.
 */
exports.route = function (app) {
	app.get('/', lol.route.get_index);
	app.get('/explore', lol.route.get_explore);
	app.get('/logout',lol.route.get_logout);
	app.post('/login', lol.route.post_login);
	app.post('/register', lol.route.post_register);
};

lol.route.get_index = function (req, res) {
	return lol.fileRequire.register.renderIndex(req, res);
};

lol.route.get_explore = function (req, res) {
	res.render('explore', {title: 'Explore'});
};

lol.route.post_login = function (req, res) {
	return lol.fileRequire.login.login(req, res);
};

lol.route.post_register = function (req, res) {
	return lol.fileRequire.register.reigster(req, res);
};

lol.route.get_logout = function(req,res){
	req.session.user = null;
	return res.redirect('/');
}
