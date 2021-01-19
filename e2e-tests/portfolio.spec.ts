describe('portfolio interface', function () {
    beforeEach(function () {
        browser.get('http://localhost:' + (process.env.PORT || 8000) + '/#/tabs/portfolio');
        //element.all(by.tagName('md-tab-item')).get(1).click();
    });

    it('runs through the basic stock functions', function () {
        //navigate to the portfolio page
        var nothing