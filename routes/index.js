
/*
 * GET home page.
 */
exports.route = function (app) {
	app.get('/', function(req,res){
		res.render('index', {title:'Home'});
	});
};