module.exports = {
	shell: {
		options: {
			stdout: true
		},
		npm_install: {
			command: 'npm install'
		}
	},
	bower: {
		install: {
			targetDir:'../app/vendor'
		}
	}
};