module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    dest: 'dist',
                    src: ['**/*.js'],
                    ext: '.min.js',
                    extDot: 'first'
                }]
            }
        },
        cssmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    dest: 'dist',
                    src: ['**/*.css'],
                    ext: '.min.css'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {                                 
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'dist/index.html',
                }
            }
        },
        processhtml: {
            options: {
              // Task-specific options go here.
            },
            dist: {
                files: {
                    'dist/index.html': ['src/index.html']
                }
            },
        },
        responsive_images: {
            options: {
              engine: 'im',
              sizes: [{
                  name: '1x',
                  width: '128px'
              }, {
                  name: '2x',
                  width: '256px'
              }]
            },
            dist: {
                files: {
                    'dist/views/images/pizzeria.jpg': 'src/views/images/pizzeria.jpg'
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-responsive-images');
    
    grunt.registerTask('default', ['uglify', 'cssmin', 'responsive_images', 'processhtml', 'htmlmin']);
};