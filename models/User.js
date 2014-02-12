var db = require('../models/db');

function User(user) {
	this.UserName = user.username;
	this.Pwd = user.password
}

module.exports = User;

User.prototype.save = function (callback) {
	db.query('INSERT INTO USERS (UserName, Pwd)' +
		'Values ("'+this.UserName+'", "'+this.Pwd+'");',function(err, user){
		callback(err,user);
	});

};

User.get = function (username, callback) {
	db.query('SELECT * FROM USERS AS u WHERE u.UserName = "' + username+ '";', function (err, data) {
		if (err) {
			callback(err, null);
		} else {
			callback(err, data);
		}
	});
}