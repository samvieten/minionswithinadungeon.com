module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.initConfig({
		sass: {
			dist: {
				options: {
					style: 'comnpressed'
				},
				files: {
					'./dist/main.css': './src/main.scss'
				}
			}
		}
	});
	grunt.registerTask('default', ['sass']);
};
