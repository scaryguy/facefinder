var Source = require('./../lib/source');
var Find = require('./../lib/find');
var fs = require('fs');

var expect = require('chai').expect;

describe('Find', function() {
	it('should process image', function() {

		var source = new Source(__dirname + "/fixtures/child_faces.jpg");
		var my_process = new Find(source);
		my_process.image();
		// try {
		// 	fs.accessSync("./out.jpg", fs.F_OK);
		// 	done();
		// } catch (err) {
		// 	done(new Error(err));
		// }
	});
});