module.exports = function (config) {
  config.set({
    autoWatch: false,
    basePath: '',
    browsers: ['PhantomJS'],
    colors: true,
    files: [
      'node_modules/mockfirebase/browser/mockfirebase.js',
      'build/vendors.js',
      'build/templates.js',
      'build/app.js',
      'src/**/*.spec.ts'
    ],
    frameworks: ['jasmine'],
    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-coveralls',
      'karma-sauce-launcher'
    ],
    reporters: ['dots', 'saucelabs', 'coverage', 'coveralls'],
    preprocessors: {
      'build/app.js': ['coverage']
    },
    singleRun: true,
    typescriptPreprocessor: {
      options: {
        sourceMap: false,
        target: 'ES5',
        concatenateOutput: false
      },
    },
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    },
    sauceLabs: true,
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,
  });
};