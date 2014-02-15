var request = require('request');

exports.renderIndex = function(req, res){
	res.render('index', {title:'Home'});
};