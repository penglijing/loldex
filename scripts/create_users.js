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
		connection.query('CREATE TABLE IF NOT EXISTS Users('
			+ 'UserID INT NOT NULL AUTO_INCREMENT,'
			+ 'PRIMARY KEY(UserID),'
			+ 'UserName VARCHAR(30),'
			+ 'UserFavoriteRole VARCHAR(30),'
			+ 'UserFavoriteChampionID INT'
			+ ');', function (err) {
			if (err) throw err;
		});
	});
});

