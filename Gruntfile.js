module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      css: {
        files: ['assets/sass/**/*.scss'],
        tasks: 'default'
      },
      js: {
        files: ['assets/js/app.js'],
        tasks: 'uglify'
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'assets/css/style.css': 'assets/sass/style.scss'
        }
      },
      dev: {
        options: {
          style: 'expanded'
        },
        files: {
          'assets/css/style.css': 'assets/sass/style.scss'
        }
      }
    },

    uglify: {
      my_target: {
        files: {
          'assets/js/app.min.js': ['assets/js/app.js']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass:dev']);
  grunt.registerTask('release', ['sass:dist', 'uglify']);
};