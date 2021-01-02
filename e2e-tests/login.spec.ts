describe('authentication interface', function () {
    var dialog = element(by.tagName('md-dialog'));
    var buttons = element(by.tagName('md-dialog-actions')).all(by.tagName('button'));

    beforeEach(function () {
        browser.get('http://localhost:' + (process.env.PORT || 8000));
    });

   