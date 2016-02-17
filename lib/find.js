var cv = require('opencv');

var Find = function(source_attr) {

	this.image_path = source_attr.file_path;
	this.output_name = "faces_added_" + source_attr.file_name + '.jpg';

}

Find.prototype.image = function(cb) {
	var img = this;
	cv.readImage(img.image_path, function(err, im) {
		if (err) return cb(err, false);
		im.detectObject(cv.FACE_CASCADE, {}, function(err, faces) {
			if (err) return cb(err, false);
			for (var i = 0; i < faces.length; i++) {
				var x = faces[i]
				im.ellipse(x.x + x.width / 2, x.y + x.height / 2, x.width / 2, x.height / 2);
			}
			im.save(img.output_name + ".jpg");
			console.log("Number of found faces: " + faces.length + "\n");
			cb(null, true);
		});
	})
}

module.exports = Find;