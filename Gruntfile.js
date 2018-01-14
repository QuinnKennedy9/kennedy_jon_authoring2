module.exports = function(grunt) {
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'js/main.js',
        dest: 'prod/main.min.js'
      }
    },
    watch: {
      sass: {
        files: "sass/main.scss",
        tasks: ['sass']
      }
    },
    sass: {
        dev: {
            files: {
                "css/main.css" : "sass/main.scss"
            }
        }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
