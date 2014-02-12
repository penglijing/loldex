var User, crypto, request, login;
crypto = require('crypto');
User = require('../models/User');
login = require('./login');
exports.reigster = function (req, res) {
	console.log(req.body);
	if (req.body.password.length < 6) {
//		req.flash('danger', 'Password is too short');
		res.send({message:"failed"});
	}
	if (req.body.passwordRepeat != req.body['password']) {
		console.log('password not match');

		res.send({message:"failed"});
	}

	var md5 = crypto.createHash('md5');
	var password = md5.update(req.body.password).digest('base64');

	var newUser = new User({ username:req.body.name, password: password});
	User.get(req.body.name, function(err, user){

		if (user.length != 0)
			err = 'The username has been taken';
		if (err) {
			console.log(err);
			res.send({message:"failed"});
		}
		newUser.save(function (err, user) {
			if (err) {
				console.log(err);
				console.log(JSON.stringify(err));
				res.send({message:"failed"});
			}
			console.log('success');
			res.send({message: "success"});
			req.session.user = newUser;
		});
	});
};