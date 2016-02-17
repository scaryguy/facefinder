var Source = require('./lib/source');
var Find = require('./lib/find');

var FaceFinder = function(path, output_dir) {

	path = path || process.argv[2]
	output_dir = output_dir || "/var/www/facefinder/public/"

	var source = new Source(path);
	source.init(function(err, source_attr) {
		var my_process = new Find(source_attr);
		my_process.image(function(err, result) {
			if (err) {
				console.log(err);
				return err;
			}
			return result;
		});
	})


}

module.exports = FaceFinder;