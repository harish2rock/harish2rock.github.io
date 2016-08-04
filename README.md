# Build-Project

> A front end build project template based on atomic design, yeoman, grunt and assemble to kickstart new projects.

## Setup

Follow the below instructions to setup this project - 

* Make sure you have [node](https://nodejs.org), [grunt-cli](http://gruntjs.com) and [bower](http://bower.io) installed.
* Open Terminal and go to the directory where you want this project setup.
* git clone http://gitlab.perficientxd.com/FrontEndWorkflow/Build-Project.git
* cd Build-Project
* sudo npm i -g generator-assemble
* sudo npm install
* bower install

To build the application -
* grunt build: This generates a dist directory inside which you have the compiled, production ready, html, css and js files.

To serve the application -
* grunt server 

## Grunt Tasks

This build project includes the below grunt tasks to take care of all the configurations, while you can focus on the more important work of creating awesome, beautiful web applications.

* [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)
* [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy)
* [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
* [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass)
* [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)
* [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)
* [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer/)
* [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)

You may also add or modify the grunt tasks and other plugins for your needs.

> If you have any questions, send an email to harish.bhavanichikar@perficient.com