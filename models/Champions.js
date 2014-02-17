var db = require('../models/db');

function Champion(champ){
	this.champName = champ.champName;
	this.title = champ.title;
	this.region = champ.region;
	this.type = champ.type;
}

module.exports = Champion;

Champion.prototype.save = function(callback){
	db.query('INSERT INTO CHAMPIONS (ChampionName, Title, Region, type)' +
		'Values ("'+this.champName+'", "'+this.title+'", "'+this.region+'", "'+this.type+'");',function(err, user){
		callback(err,user);
	});
};

Champion.get = function(champName, callback){
	db.query('SELECT * FROM CHAMPIONS AS c WHERE c.ChampionName = "' + champName+ '";', function (err, data) {
		if (err) {
			callback(err, null);
		} else {
			callback(err, data);
		}
	});
};