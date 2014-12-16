jasmine.getEnv().defaultTimeoutInterval = 50000;
describe("Modular seed", function() {
	var cwd = __dirname + "/../";

	["sass", "build", "test_unit", "selenium_update"].forEach(function(task) {
		it("should run grun task " + task, function(done) {
			var spawn = require("child_process").spawn;
			var act = spawn("grunt", [task], {
				cwd: cwd
			});
			act.on("close", function(code) {
				expect(code).toBe(0);
				done();
			});
		});
	});
});
