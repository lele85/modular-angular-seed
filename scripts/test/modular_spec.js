var cwd = __dirname + "/../";
var expect = require("chai").expect,
	spawn = require("child_process").spawn,
	selenium;

describe("Modular seed", function() {
	before(function(done) {
		selenium = spawn("grunt", ["selenium"], {
			cwd: cwd,
			stdio: "inherit"
		});
		setTimeout(done, 4000);
	});

	[
		"selenium_update",
		"sass",
		"build",
		//"test_unit",
		"selenium_update"
	].forEach(function(task) {
		it("should run grun task " + task, function(done) {

			var act = spawn("grunt", [task], {
				cwd: cwd,
				stdio: "inherit"
			});
			act.on("close", function(code) {
				expect(code).to.equal(0);
				done();
			});
		});
	});

	xit("Should serve app with customer specific conf", function(done) {
		var serve = spawn("grunt", ["serve"], {
			cwd: cwd,
			stdio: "inherit"
		});
		setTimeout(function() {
			var test = spawn("grunt", ["test_e2e"], {
				cwd: cwd,
				stdio: "inherit"
			});
			test.on("close", function(code) {
				expect(code).to.equal(0);
				serve.kill();

				done();
			});
		}, 4000);
	});

	after(function() {
		selenium.kill();
	});

});