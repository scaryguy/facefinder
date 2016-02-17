var Promise = require('bluebird');
var fs = require('fs');
var p = require('path');

var Source = function(file_path) {
	this.file_path = file_path;
	this.file_name = p.basename(file_path);
}

Source.prototype.init = function(cb) {
	try {
		fs.accessSync(this.file_path, fs.F_OK);
	} catch (err) {
		return cb('File could not be found on the given path: ' + this.file_path, null);
	}
	var source_attr = {
		file_path: this.file_path,
		file_name: this.file_name
	}
	return cb(null, source_attr);
}

module.exports = Source;