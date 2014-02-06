var settings = require('../dbSettings');
var mysql = require('mysql');
var connection =  mysql.createConnection(settings.config);
connection.query('USE '+ settings.db);
module.exports = connection;
