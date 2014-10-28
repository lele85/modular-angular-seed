module.exports = {
	shell: {
		options: {
			stdout: true
		},
		serve: {
			stdin: true,
			command: 'node_modules/.bin/nodemon server/app.js DEV'
		}
	}
};