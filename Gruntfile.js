/*
* Generated on 2015-03-10
* generator-assemble v0.5.0
* https://github.com/assemble/generator-assemble
*
* Copyright (c) 2015 Hariadi Hinta
* Licensed under the MIT license.
*/
 
'use strict';
 
// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'
 
module.exports = function(grunt) {
 
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);
 
 
  // Project configuration.
  grunt.initConfig({
 
    config: {
      src: 'src',
      dist: 'dist'
    },
 
    watch: {
      assemblePages: {
        files: ['<%= config.src %>/{content,data,templates}/{,*/}*.{md,hbs,yml}'],
        tasks: ['assemble', 'handlebars', 'jshint', 'cssmin', 'neuter:application'],
        options: {
             livereload: true   
        }
      },
      assemble: {
        files: ['<%= config.src %>/{content,data,templates}/{,*/}*/{,*/}*/{,*/}*.{md,hbs,yml}'],
        tasks: ['assemble',  'jshint', 'cssmin', 'handlebars', 'neuter:application'],
        options: {
             livereload: true   
        }
      },
      sass: {
        files: ['<%= config.src %>/assets/styles/**/*.scss'],
        tasks: ['sass:dist', 'autoprefixer:main']
      },
      scripts: {
        files: ['<%= config.src %>/assets/scripts/*.js','<%= config.src %>/assets/scripts/{,*/}*/{,*/}*.js', '<%= config.dist %>/assets/scripts/*.js'],
        tasks: ['neuter:application', 'concat', 'copy:js'],
        options: {
          spawn: false,
          livereload: true
        },
      },
 
     
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/{,*/}*.html',
          '<%= config.dist %>/assets/{,*/}*.css',
          '<%= config.dist %>/assets/{,*/}*.js',
          '<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
 
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      }
    },
 
    assemble: {
      pages: {
        options: {
          flatten: true,
          assets: '<%= config.dist %>/assets',
          layout: '<%= config.src %>/templates/layouts/home-layout.hbs',
          data: '<%= config.src %>/data/*.{json,yml}',
          helpers: ['<%= config.src %>/assets/scripts/template_helpers.js'],
          partials: '<%= config.src %>/templates/partials/{,*/}/{,*/}/{,*/}*.hbs'
        },
        files: {
          '<%= config.dist %>/': ['<%= config.src %>/templates/pages/*.hbs']
        }
      }
    },
     
    assemblePages: {
      pages: {
        options: {
          flatten: true,
          assets: '<%= config.dist %>/assets',
          layout: '<%= config.src %>/templates/layouts/home-layout.hbs',
          data: '<%= config.src %>/data/*.{json,yml}',
          helpers: ['<%= config.src %>/assets/scripts/template_helpers.js'],
          partials: '<%= config.src %>/templates/partials/{,*/}/{,*/}/{,*/}*.hbs'
        },
        files: {
          '<%= config.dist %>/': ['<%= config.src %>/templates/pages/*.hbs']
        }
      }
    },
    copy: {
       //include copy tasks here
       css: {
        expand: true,
        cwd: '<%= config.src %>/assets/styles/*.css',
        src: '**',
        dest: '<%= config.dist %>/assets/styles/',
        flatten: true,
        filter: 'isFile'
      },
      js: {
        expand: true,
        cwd: '<%= config.src %>/assets/scripts/main.js',
        src: '**',
        dest: '<%= config.dist %>/assets/script/',
        flatten: true,
        filter: 'isFile'
      },
      images: {
        expand: true,
        cwd: '<%= config.src %>/assets/images/',
        src: '**',
        dest: '<%= config.dist %>/assets/images/',
        filter: 'isFile',
        flatten: true
      },
      jquery: {
        expand: true,
        cwd: 'bower_components/jquery/',
        src: 'jquery.min.js',
        dest: '<%= config.dist %>/assets/scripts/lib/',
        flatten: true,
        filter: 'isFile'
      },
      fonts: {
        expand: true,
        cwd: 'bower_components/font-awesome/fonts/',
        src: '*',
        dest: '<%= config.dist %>/assets/styles/fonts/',
        flatten: true,
        filter: 'isFile'
      },
      validate: {
        expand: true,
        cwd: 'bower_components/jquery-validate/dist/',
        src: 'jquery.validate.min.js',
        dest: '<%= config.dist %>/assets/scripts/lib/',
        flatten: true,
        filter: 'isFile'
      },
      handlebars: {
        expand: true,
        cwd: 'bower_components/handlebars/',
        src: 'handlebars.min.js',
        dest: '<%= config.dist %>/assets/scripts/lib/',
        flatten: true,
        filter: 'isFile'
      }
    },
    sass: { // Task
      dist: { // Target
 
        files: { // Dictionary of files
          "<%= config.src %>/assets/styles/main.css": "<%= config.src %>/assets/styles/main.scss"
       }
      }
    },
    neuter: {
      options: {
        basePath: '<%= config.src %>/assets/scripts/require/'
      },
      application: {
        src: '<%= config.src %>/assets/scripts/main.js',
        dest: '<%= config.dist %>/assets/scripts/main.js'
      }
    },
 
   
   
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          '<%= config.src %>/assets/styles/main.min.css': '<%= config.src %>/assets/styles/main.css'
        }
      }
    },
//    uncss: {
//      dist: {
//        options: {
//          ignore: ['[class*=" icon-"]:before, [class^=icon-]:before, [data-icon]:before, .dataTables_wrapper']
//                    //ignoreSheets: [/fonts.googleapis/],
//        },
//        files: {
//          '<%= config.dist %>/assets/styles/main.css': ['<%= config.dist %>/*.html']
//        }
//      }
//    },
    concat: {
 
      dist: {
        files: {
          '<%= config.dist %>/assets/scripts/lib.js': ['<%= config.dist %>/assets/scripts/lib/jquery.min.js',
                                                       '<%= config.dist %>/assets/scripts/lib/jquery.validate.min.js',
                                                       '<%= config.dist %>/assets/scripts/lib/handlebars.min.js']
        }
      }
    },
    jshint: {
 
      all: ['<%= config.src %>/assets/scripts/main.js']
 
    },
   handlebars: {
      options : {
        namespace : 'SkillsApp.Templates',
        processName : function(filePath) {
          return filePath.replace(/^src\/templates\/partials\/handlebars\//, '').replace(/\.hbs$/, ''); 
         },
         partialsUseNamespace: true
      },
      all : {
        files : {
          "<%= config.src %>/assets/scripts/templates.js": ["<%= config.src %>/templates/partials/handlebars/*.hbs"]
        }
      }         

    },
    autoprefixer: {
 
     options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
    },
    main: {
        expand: true,
        flatten: true,
        src: '<%= config.src %>/assets/styles/main.css',
        dest: '<%= config.dist %>/assets/styles/'
    }
    },
 
    clean: ['<%= config.dist %>/**/*.{html,xml}']
 
  });
 
  grunt.loadNpmTasks('assemble');
 
  grunt.registerTask('server', [
    'build',
    'connect:livereload',
    'watch'
  ]);
 
  grunt.registerTask('build', [
    'clean',
    
    'assemble',
    'handlebars',
    'neuter',
    'jshint',
    'sass',
    'autoprefixer',
    //"uncss",
    'cssmin',
    'copy',
     'concat'
  ]);
 
  grunt.registerTask('default', [
    'build'
  ]);
 
};