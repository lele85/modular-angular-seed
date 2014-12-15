Modular AngularJS Seed
======================

[![Build Status](https://travis-ci.org/lele85/modular-angular-seed.svg?branch=master)](https://travis-ci.org/lele85/modular-angular-seed)

Modular Angular JS Seed is a collection of tools and best practice packed up together in order to mantain a clean project structure. The main goal of the project are:

CODEBASE CONSISTENCY AND MANTAINABILITY
---------------------------------------

MODULAR DEVELOPMENT
-------------------

DEPENDENCIES MANAGEMENT
-----------------------

CUSTOMIZABLE BUILD PROCESS
--------------------------

ADVANCED STYLING SUPPORT
------------------------

PAINLESS TESTING EXPERIENCE
---------------------------

HOW TO CREATE A MODULE
----------------------

* Create a directory with the module name inside the 'modules' directory
* Create a file called 'module.js' and create the stub for the new module
* Add the new module to the desired customers profiles in the scripts/Grunt.config.build.customers.js file

### Create a landing page for the module

* Create a 'view' directory inside the newly created module folder
* Create a template for the landing page inside 'view' directory (use the *.tpl.html pattern)
* Create the routes.js file and add a route for the landing page
* Add the route.js file to the module

### Add Style

* in the module directory add the style.scss file
* import the new style.scss in the main app.scss file

### Unit Test

* Create a file called 'module_test.js' and create a stub for the main test module of our new module
* Create a spec test module inside the test/unit directory
* add the spec test module to the 'module_test.js' file