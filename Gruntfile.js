'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // define project-specific settings (grunt templates)
        ng: {
            app: 'app',
            temp: '.tmp'
        },

        // empty folders to start fresh
        clean: {
            dev: '<%= ng.temp %>'
        },

        stylus: {
            compile: {
                options: {
                    compress: false,
                    linenos: true,
                    paths: ['<%= ng.app %>/styl']
                },
                files: {
                    '<%= ng.temp %>/stylus.css': '<%= ng.app %>/styl/*.styl'
                }
            }
        },

        autoprefixer: {

            options: {
                // Task-specific options go here.
                browsers: ['last 2 version', 'ie 8', 'ie 9']
            },

            // prefix the specified file
            main: {
                src: '<%= ng.temp %>/stylus.css',
                dest: '<%= ng.app %>/css/main.css'
            }
        },

        // start static web server
        connect: {
            options: {
                hostname: 'localhost',
                port: 9000,
                livereload: 35729
            },
            dev: {
                options: {
                    open: true,
                    base: [
                        '<%= ng.temp %>',
                        '<%= ng.app %>'
                    ]
                }
            }
        },

        // watch files for changes and run tasks based on the changed files
        watch: {
            options: {
                spawn: false,
                livereload: true
            },

            // reload the browser when changes are made
            livereload: {
                files: [
                    '<%= ng.app %>/**/*.html',
                    '<%= ng.app %>/css/main.css',
                    '<%= ng.app %>/**/*.js'
                ]
            },

            // compile CSS when Sass files are changed
            stylus: {
                files: ['<%= ng.app %>/**/*.styl'],
                tasks: ['stylus', 'autoprefixer', 'clean:dev']
            }
        }
    });

    // run development instance
    grunt.registerTask('dev', function (target) {
        
        grunt.task.run([
            'clear',
            'clean:dev',
            'connect:dev',
            'watch'
        ]);
    });
};
