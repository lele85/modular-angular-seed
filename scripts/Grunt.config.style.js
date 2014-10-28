module.exports = {
	sass: {
		dist: {
			options: {
				compass: true
			},
			files: {
				'<%= devDir %>/css/app.css': '<%= devDir %>/scss/app.scss'
			}
		}
	}
};