module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'angular.js',
      'angular-mocks.js',
      'index.html',
      'src/**/*.js',
      'src/*.js',
      'src/**/*.html',
      'src/**/**/*.html',
      'test/*spec.js'	    
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.html': ['ng-html2js'],
      'src/**/!(*.mock|*.spec).js': ['coverage']
    },


    ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'src/',
      // create a single module that contains templates from all the files
      moduleName: 'templates'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'junit', 'coverage'],

	junitReporter: {
      type: 'xml',
      dir: 'test-results'
    },

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
