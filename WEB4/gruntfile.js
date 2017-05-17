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
                    port: 8080,
                    base: '',
                    open: {
                        appName: 'Chrome'
                    }
                }
            }
        },

        clean: {
            tsScripts: ['js/tsScripts.js'],
            scripts: ['build/scripts.js'],
            jsFolder: ['js'],
            js_min: ['build/*.js'],
            css_min: ['build/*.css']
        },

        ts: {
            default: {
                src: ['ts/*.ts'],
                out: 'js/tsScripts.js',
                options: {
                    noImplicitAny: true,
                    removeComments: true,
                    preserveConstEnums: true,
                    sourceMap: false,
                    module: 'system',
                    target: 'es5'
                },
                configFile: 'tsconfig.json',
                src: 'ts/*.ts'
            }
        },

        tslint: {
            options:
                {
                    configuration: "tslint.json",
                    quiet: false
                },
            target: 'ts/*.ts'
        },

        concat: {
            dist: {
                src: ['js/**/*.js'],
                dest: 'build/scripts.js'
            }
        },

        uglify: {
            build: {
                src: 'build/scripts.js',
                dest: 'build/scripts.min.js'
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

        hashres: {
            options: {
                fileNameFormat: '${name}.[${hash}].${ext}',
                renameFiles: true
            },

            prod: {
                src: [
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
                files: ['ts/**/*.*', 'jsx/**/*.*'],
                tasks: ['clean:js_min',
                        'ts',
                        'tslint',
                        'react',
                        'copy:react',
                        'concat',
                        'uglify',
                        'clean:scripts',
                        'hashres:prod',
                        'copy:systemjs',
                        'clean:jsFolder'
                ],
            },

            html: {
                options: {livereload: true},
                files: ['*.html'],
            }
        },

        shell: {
            options: {
                stderr: true
            },
            target: {
                command: 'cspell ts/*.ts'
            }
        },
	});

    grunt.loadNpmTasks('grunt-ts'),
    grunt.loadNpmTasks('grunt-tslint');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-hashres');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', [
            'clean',
            'shell',
            'ts',
            'tslint',
            'react',
            'copy:react',
            'concat',
            'uglify',
            'cssmin',
            'clean:scripts',
            'hashres:prod',
            'copy:systemjs',
            'clean:jsFolder',
            'connect:server',
            'watch'
    ]);
};