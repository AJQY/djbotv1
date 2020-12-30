describe('about modal', function () {
    beforeEach(function () {
        browser.get('http://localhost:' + (process.env.PORT || 8000));
    });

    it('opens a modal', function () {
        var openButton = element(by.css('button[aria-label=About]'));
        openButton.click();

        var dialog = element(by.tagName('md-dialog'));
        expect(dialog.isPresent()).toBe