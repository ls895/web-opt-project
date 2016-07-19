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
                  width: '100px'
              }, {
                  name: '2x',
                  width: '200px'
              }]
            },
            dist: {
                files: {
                    'dist/views/images/pizzeria.jpg': 'src/views/images/pizzeria.jpg'
                }
            }
        },
        imagemin: {
            dist: { 
                files: {
                  'dist/img/profilepic.jpg': 'src/img/profilepic.jpg',
                  'dist/views/images/pizzeria-1x.jpg': 'dist/views/images/pizzeria-1x.jpg',
                  'dist/views/images/pizzeria-2x.jpg': 'dist/views/images/pizzeria-2x.jpg'
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    
    grunt.registerTask('default', ['uglify', 'cssmin', 'responsive_images', 'imagemin', 'processhtml', 'htmlmin']);
};