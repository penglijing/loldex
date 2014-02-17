var express = require('express'),
	mysql = require('mysql');

// Application initialization

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Francis3711'
});

connection.query('CREATE DATABASE IF NOT EXISTS lol_db', function (err) {
	if (err) throw err;
	connection.query('USE lol_db', function (err) {
		if (err) throw err;
		connection.query('CREATE TABLE IF NOT EXISTS Items('
			+ 'ItemID INT NOT NULL AUTO_INCREMENT,'
			+ 'PRIMARY KEY(ChampionID),'
			+ 'ChampionName VARCHAR(30),'
			+ 'Title VARCHAR(30),'
			+ 'Region VARCHAR(30),'
			+ 'Type VARCHAR(30)'
			+ ');', function (err) {
			if (err) throw err;
			connection.end();
		});
	});
});

