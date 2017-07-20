const webpackTestConfig = require('./webpack.test.config')

// Karma configuration
// Generated on Wed Jul 19 2017 14:35:37 GMT+0000 (UTC)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      'test/unit/specs/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],

    plugins: [
      // Launchers
      'karma-opera-launcher',

      // Test Libraries
      'karma-mocha',

      // Preprocessors
      'karma-webpack',
      'karma-sourcemap-loader'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/unit/specs/**/*.spec.js': ['webpack', 'sourcemap']
    },


    // webpack configuration
    webpack: webpackTestConfig,

    webpackMiddleware: {
      noInfo: true
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing test whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Opera'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the test and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
