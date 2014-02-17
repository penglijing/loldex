
exports.get_add_Champion = function(req, res){
	res.render('contribute', {title: 'Contribute'});
};

exports.get_search_champion = function(req, res){
	res.render('searchChampion', {title: 'Search Champion'});
};