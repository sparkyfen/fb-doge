var redis = require('redis');
var settings = require('./settings.js');

client = redis.createClient(settings.redis.port, settings.redis.ip);

var store = function(data, callback) {
	client.set(data.id, JSON.stringify(data), function (error) {
		if(error) return callback(error);
		return callback(null);
	});
};

var storeMult = function(data, callback) {
	if(typeof(data) !== 'object' && data !== null) {
		return callback('Data must be an array.');
	}
	if(data.length === 0) {
		return callback('Must have 1 or more values to store.');
	}
	for(var dataCounter = 0; storyCounter < data.length; dataCounter++) {
		store(data[dataCounter], function (error) {
			if(error) return callback(error);
			return callback(null);
		});
	}
};

var read = function(key, callback) {
	if(typeof(key) !== 'string') {
		key = key.toString();
	}
	client.get(key, function (error, reply) {
		if(error) return callback(error);
		return callback(null, JSON.parse(reply));
	});
};

var getTotal = function(callback) {
	client.keys('*', function (error, keys) {
		if(error) return callback(error);
		return callback(null, keys.length);
	});
};

var backupData = function(callback) {
	client.bgsave(function (error, result) {
		if(error) return callback(error);
		return callback(null, result);
	});
};

module.exports = {
	store: store,
	storeMult: storeMult,
	read: read,
	getTotal: getTotal,
	backupData: backupData
}