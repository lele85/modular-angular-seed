exports.config = {
	seleniumAddress: "http://localhost:4444/wd/hub",
	seleniumArgs: ["-browserTimeout=60"],
	baseUrl: "http://localhost:8000/",
	specs: [
		"../app/modules/**/test/e2e/*Spec.js"
	]
};
