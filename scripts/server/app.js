var express = require("express"),
	app = express();

var env = {
	"PROD": {
		directory: __dirname + '/../../bin/',
		message: "\nSERVING MINIFIED APP"
	},
	"DEV": {
		directory: __dirname + '/../../app/',
		message: "\nSERVING NOT MINIFIED DEV APP"
	}
};

var selected_env = process.argv[2] || 'DEV';

console.log(env[selected_env].message);

app.use(express.static(env[selected_env].directory));


console.log("http://localhost:8000");
app.listen(8000);