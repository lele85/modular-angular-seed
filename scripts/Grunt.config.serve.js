var grunt = require("grunt");
var minified = grunt.option("minified") ? true : false;
var serverDir = minified ? "../bin" : "../app";

module.exports = {
	connect: {
      server: {
        options: {
			port: 8000,
			keepalive: true,
			base: serverDir,
			onCreateServer: function() {
				grunt.log.ok(["Serving " + (minified ? "Production" : "Development") + " application"]);
			}
        }
      }
    }
};
