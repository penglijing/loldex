var Champ = require('../models/Champions');

exports.get_add_Champion = function(req, res){
	res.render('contribute', {title: 'Contribute'});
};

exports.get_search_champion = function(req, res){
	res.render('searchChampion', {title: 'Search Champion'});
};

exports.post_add_champion = function(req, res){
	Champ.get(req.body.champName, function(err, champ){
		if(err){
			return res.send(err);
		}
		if(champ[0]){
			err = {err:'duplicate'};
			return res.send(err);
		}
		var newChamp = new Champ({champName:req.body.champName,
			title: req.body.title,region:req.body.region, type:req.body.type});
		newChamp.save(function(err, champ){
			if(err){
				return res.send(err);
			}
			return res.send({success:'success'});
		})
	});
};