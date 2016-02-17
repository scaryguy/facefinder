var expect = require('chai').expect;
var FaceFinder = require('./../index');
var fs = require('fs');

describe('FaceFinder', function() {
	it('should work', function() {
		return FaceFinder('/Users/scaryguy/arge/opencv/facefinder/test/fixtures/childFaces.jpg', '/Users/scaryguy/arge/opencv/facefinder/')
	});
});