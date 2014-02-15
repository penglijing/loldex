var User, crypto;
crypto = require('crypto');
User = require('../models/User');

//render the login page


exports.login = function(req, res) {
	var md5 = crypto.createHash('md5');
	console.log(req.body.name);
	console.log(req.body.password);
	var password = md5.update(req.body.password).digest('base64'); // encrypt the password
	User.get(req.body.name, function (err, user) {

		if (user.length == 0) {
			var err = 'User does not exist';
			console.log(err);
			res.redirect('/');
			res.send({info:err});
			return err
		}
		console.log(user);
		console.log(password);
		if (user[0].Pwd != password) {
			var err = 'Wrong Password';
			console.log('Wrong Password')
			req.flash('info', err);
			res.redirect('/');
			res.send({info:err});
			return err;
		}
		var success = 'Login Success';
		req.session.user = user[0]; //store the user session.
		console.log('success'+user.name);
		res.send({info:success});
		return success;
	});
};
