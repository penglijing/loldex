var lol = lol || {};

lol.route = lol.route || {};

lol.fileRequire = lol.fileRequire  || {};
lol.fileRequire.login = require('./login');
lol.fileRequire.register = require('./register');
lol.fileRequire.index = require('./hackIndex');
lol.fileRequire.championHandler = require('./championHandler');
lol.fileRequire.itemHandler = require('./itemHandler');
/*
 * GET home page.
 */
exports.route = function (app) {
	app.get('/', lol.route.get_index);
	app.get('/logout',lol.route.get_logout);
	app.post('/login', lol.route.post_login);
	app.post('/register', lol.route.post_register);
	app.get('/contribute', lol.route.get_add_Champion);
	app.get('/searchChampion', lol.route.get_search_champion);
	app.get('/searchItem', lol.route.get_search_item);
	app.get('/:username', lol.route.get_profile);
	app.get('/explore', lol.route.get_explore);
	app.post('/addChampion', lol.route.post_add_champion);
};

lol.route.get_index = function (req, res) {
	return lol.fileRequire.index.renderIndex(req, res);
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
};

lol.route.get_profile = function(req, res){
	res.render('profile', {title: 'Profile'});
};

lol.route.get_add_Champion = function(req, res){
	lol.fileRequire.championHandler.get_add_Champion(req, res);
};

lol.route.get_search_champion = function(req, res){
	lol.fileRequire.championHandler.get_search_champion(req, res);
};

lol.route.get_search_item = function(req, res){
	lol.fileRequire.itemHandler.get_search_item(req, res);
};

lol.route.post_add_champion = function(req, res){
	lol.fileRequire.championHandler.post_add_champion(req, res);
};