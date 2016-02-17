var Source = require('./../lib/source');
var expect = require('chai').expect;

describe('Image', function() {
	it('should be found', function(done) {
		var source = new Source(__dirname + '/fixtures/child_faces.jpg');
		source.init(function(err, source_attr) {

			expect(source_attr.file_path).to.be.equal(source_attr.file_path);
			done();
		})

	});

	it('should NOT be found', function(done) {

		var Source = require('./../lib/source');
		var source = new Source('./zzz.jpg');
		source.init(function(err, image) {
			expect(err).to.be.not.equal(null);
			done();
		})
	});
});