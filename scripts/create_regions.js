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
		connection.query('CREATE TABLE IF NOT EXISTS Regions('
			+ 'RegionID INT NOT NULL AUTO_INCREMENT,'
			+ 'PRIMARY KEY(RegionID),'
			+ 'RegionName VARCHAR(30),'
			+ 'RegionDescription VARCHAR(300)'
			+ ');', function (err) {
			if (err) throw err;
			connection.end();
		});
	});
});

