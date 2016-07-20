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
                    'dist/project-2048.html': ['dist/project-2048.html'],
                    'dist/project-mobile.html': ['dist/project-mobile.html'],
                    'dist/project-webperf.html': ['dist/project-webperf.html'],
                    'dist/views/pizza.html': ['dist/views/pizza.html'],
                }
            }
        },
        processhtml: {
            dist: {
                files: {
                    'dist/index.html': ['src/index.html'],
                    'dist/project-2048.html': ['src/project-2048.html'],
                    'dist/project-mobile.html': ['src/project-mobile.html'],
                    'dist/project-webperf.html': ['src/project-webperf.html'],
                    'dist/views/pizza.html': ['src/views/pizza.html'],
                    
                }
            },
        },
        responsive_images: {
            options: {
              engine: 'im',
              newFilesOnly: false
            },
            index: {
                options: {
                    sizes: [{
                      name: '1x',
                      width: '100px'
                    }, {
                      name: '2x',
                      width: '200px'
                    }]
                },
                files: {
                    'dist/views/images/pizzeria.jpg': 'src/views/images/pizzeria.jpg'
                }
            },
            pizza: {
                options: {
                    sizes: [{
                      rename: false,
                      width: '720px'
                    }]
                },
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
                  'dist/views/images/pizzeria-2x.jpg': 'dist/views/images/pizzeria-2x.jpg',
                  'dist/views/images/pizzeria.jpg': 'dist/views/images/pizzeria.jpg',
                  'dist/views/images/pizza.png': 'src/views/images/pizza.png'
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