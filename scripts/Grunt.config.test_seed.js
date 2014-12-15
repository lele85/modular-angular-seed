var grunt = require("grunt");

module.exports = {
	shell: {
		options: {
			stdout: true
		},
		testSeed: {
			command: "jasmine-node ./test"
		}
	}
};
