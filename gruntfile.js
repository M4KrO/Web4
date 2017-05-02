module.exports = function(grunt)
{
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            systemjs: {
                files:
                    [
                        {
                            expand: true,
                            cwd: 'node_modules/systemjs/dist/',
                            src: 'system.js',
                            dest: 'build/'
                        }
                    ]
            },
            react: {
                files:
                    [
                        {
                            expand: true,
                            cwd: 'node_modules/react/dist/',
                            src: 'react.js',
                            dest: 'build/'
                        },
                        {
                            expand: true,
                            cwd: 'node_modules/react-dom/dist/',
                            src: 'react-dom.js',
                            dest: 'build/'
                        }
                    ],
            }
        },

        react: {
            single_file_output:
            {
                files:
                    {
                        'build/index.js': 'jsx/index.jsx'
                    }
            }
        },

        connect: {
            server: {
                options: {
                    open: true
                }
            }
        },

        concat: {
            dist: {
                src: ['js/**/*.js'],
                dest: 'build/script.js'
            }
        },

        uglify: {
            build: {
                src: 'build/script.js',
                dest: 'build/scripts.js'
            }
        },

        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },

            target: {
                files: {
                    'build/styles.css': [
                        'node_modules/bootstrap/dist/css/bootstrap.min.css',
                        'css/style.css'
                    ]
                }
            }
        },

        eslint: {
            target: ['js/**/*.*']
        },

        hashres: {
            options: {
                fileNameFormat: '${name}.[${hash}].${ext}'
            },

            prod: {
                src: [
                    'build/scripts.js',
                    'build/styles.css'
                ],

                dest: ['index.html']
            }
        },

        watch: {

            css: {
                options: {livereload: true},
                files: ['css/**/*.*'],
                tasks: ['cssmin', 'hashres:prod'], 
            },

            scripts: {
                options: {livereload: true},
                files: ['js/**/*.*'],
                tasks: ['concat', 'uglify', 'eslint', 'hashres:prod'],
            },

            html: {
                options: {livereload: true},
                files: ['*.html'],
            },
        },
	});

    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');  
    grunt.loadNpmTasks('grunt-hashres');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'eslint', 'copy:react', 'hashres:prod', 'connect:server', 'watch']);
};