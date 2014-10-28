module.exports = {
	shell: {
		options: {
			stdout: true
		},
		npm_install: {
			command: 'npm install'
		},
		bower_install: {
			command: './node_modules/.bin/bower install'
		}
	}
};