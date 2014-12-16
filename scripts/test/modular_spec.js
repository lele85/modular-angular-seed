var cwd = __dirname + "/../";
var expect = require("chai").expect,
	spawn = require("child_process").spawn,
	selenium;

describe("Modular seed", function() {
	before(function(done) {
		selenium = spawn("grunt", ["selenium"], {
			cwd: cwd
		});
		setTimeout(done, 4000);
	});

	[
		"selenium_update",
		"sass",
		"build",
		"test_unit",
		"selenium_update",
		"test_e2e"
	].forEach(function(task) {
		it("should run grun task " + task, function(done) {

			var act = spawn("grunt", [task], {
				cwd: cwd
			});
			act.on("close", function(code) {
				expect(code).to.equal(0);
				done();
			});
		});
	});

	after(function() {
		selenium.kill();
	});

});
