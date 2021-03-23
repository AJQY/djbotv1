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
   