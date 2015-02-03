var express = require("express"),
	app = express();

var env = {
	"PROD": {
		directory: __dirname + "/../../bin/",
		message: "\nSERVING MINIFIED APP"
	},
	"DEV": {
		directory: __dirname + "/../../app/",
		message: "\nSERVING NOT MINIFIED DEV APP"
	}
};

var selectedEnv = process.argv[2] || "DEV";
app.use(express.static(env[selectedEnv].directory));
console.log("Serving app: http://localhost:8000");
app.listen(8000);