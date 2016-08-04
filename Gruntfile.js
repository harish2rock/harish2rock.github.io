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
      resume: 'resume'
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
        tasks: ['sass:resume', 'autoprefixer:main']
      },
      scripts: {
        files: ['<%= config.src %>/assets/scripts/*.js','<%= config.src %>/assets/scripts/{,*/}*/{,*/}*.js', '<%= config.resume %>/assets/scripts/*.js'],
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
          '<%= config.resume %>/{,*/}*.html',
          '<%= config.resume %>/assets/{,*/}*.css',
          '<%= config.resume %>/assets/{,*/}*.js',
          '<%= config.resume %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
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
            '<%= config.resume %>'
          ]
        }
      }
    },
 
    assemble: {
      pages: {
        options: {
          flatten: true,
          assets: '<%= config.resume %>/assets',
          layout: '<%= config.src %>/templates/layouts/home-layout.hbs',
          data: '<%= config.src %>/data/*.{json,yml}',
          helpers: ['<%= config.src %>/assets/scripts/template_helpers.js'],
          partials: '<%= config.src %>/templates/partials/{,*/}/{,*/}/{,*/}*.hbs'
        },
        files: {
          '<%= config.resume %>/': ['<%= config.src %>/templates/pages/*.hbs']
        }
      }
    },
     
    assemblePages: {
      pages: {
        options: {
          flatten: true,
          assets: '<%= config.resume %>/assets',
          layout: '<%= config.src %>/templates/layouts/home-layout.hbs',
          data: '<%= config.src %>/data/*.{json,yml}',
          helpers: ['<%= config.src %>/assets/scripts/template_helpers.js'],
          partials: '<%= config.src %>/templates/partials/{,*/}/{,*/}/{,*/}*.hbs'
        },
        files: {
          '<%= config.resume %>/': ['<%= config.src %>/templates/pages/*.hbs']
        }
      }
    },
    copy: {
       //include copy tasks here
       css: {
        expand: true,
        cwd: '<%= config.src %>/assets/styles/*.css',
        src: '**',
        dest: '<%= config.resume %>/assets/styles/',
        flatten: true,
        filter: 'isFile'
      },
      js: {
        expand: true,
        cwd: '<%= config.src %>/assets/scripts/main.js',
        src: '**',
        dest: '<%= config.resume %>/assets/script/',
        flatten: true,
        filter: 'isFile'
      },
      images: {
        expand: true,
        cwd: '<%= config.src %>/assets/images/',
        src: '**',
        dest: '<%= config.resume %>/assets/images/',
        filter: 'isFile',
        flatten: true
      },
      jquery: {
        expand: true,
        cwd: 'bower_components/jquery/',
        src: 'jquery.min.js',
        dest: '<%= config.resume %>/assets/scripts/lib/',
        flatten: true,
        filter: 'isFile'
      },
      fonts: {
        expand: true,
        cwd: 'bower_components/font-awesome/fonts/',
        src: '*',
        dest: '<%= config.resume %>/assets/styles/fonts/',
        flatten: true,
        filter: 'isFile'
      },
      validate: {
        expand: true,
        cwd: 'bower_components/jquery-validate/resume/',
        src: 'jquery.validate.min.js',
        dest: '<%= config.resume %>/assets/scripts/lib/',
        flatten: true,
        filter: 'isFile'
      },
      handlebars: {
        expand: true,
        cwd: 'bower_components/handlebars/',
        src: 'handlebars.min.js',
        dest: '<%= config.resume %>/assets/scripts/lib/',
        flatten: true,
        filter: 'isFile'
      }
    },
    sass: { // Task
      resume: { // Target
 
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
        dest: '<%= config.resume %>/assets/scripts/main.js'
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
//      resume: {
//        options: {
//          ignore: ['[class*=" icon-"]:before, [class^=icon-]:before, [data-icon]:before, .dataTables_wrapper']
//                    //ignoreSheets: [/fonts.googleapis/],
//        },
//        files: {
//          '<%= config.resume %>/assets/styles/main.css': ['<%= config.resume %>/*.html']
//        }
//      }
//    },
    concat: {
 
      resume: {
        files: {
          '<%= config.resume %>/assets/scripts/lib.js': ['<%= config.resume %>/assets/scripts/lib/jquery.min.js',
                                                       '<%= config.resume %>/assets/scripts/lib/jquery.validate.min.js',
                                                       '<%= config.resume %>/assets/scripts/lib/handlebars.min.js']
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
        dest: '<%= config.resume %>/assets/styles/'
    }
    },
 
    clean: ['<%= config.resume %>/**/*.{html,xml}']
 
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