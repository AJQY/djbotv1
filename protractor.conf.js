exports.config = {
    allScriptsTimeout: 60000,
    getPageTimeout: 60000,
    capabilities: {
        'browserName': 'chrome',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        'build': process.env.TRAVIS_BUILD_NUMBER,
        'name': 'Build #' + process.env.TRAVIS_BUILD_NUMBER
    },
    framework: 'jasmine',
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,
    specs: ['e2e-tests/**/*.spec.ts'],
    onPrepare: function () {
        browser.get('http://localhost:' + (process.env.PORT || 8000));

        element(by.model('ctrl.email')).se