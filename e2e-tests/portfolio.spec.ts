describe('portfolio interface', function () {
    beforeEach(function () {
        browser.get('http://localhost:' + (process.env.PORT || 8000) + '/#/tabs/portfolio');
        //element.all(by.tagName('md-tab-item')).get