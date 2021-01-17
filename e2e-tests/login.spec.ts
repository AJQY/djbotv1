describe('authentication interface', function () {
    var dialog = element(by.tagName('md-dialog'));
    var buttons = element(by.tagName('md-dialog-actions')).all(by.tagName('button'));

    beforeEach(function () {
        browser.get('http://localhost:' + (process.env.PORT || 8000));
    });

    it('should allow you to authenticate out and back in', function () {
        //Log Out
        var logOutTab = element.all(by.tagName('md-tab-item')).last();
        expect(logOutTab.getText()).toEqual('LOG OUT');
        logOutTab.click();
        var logOutButton = element(by.buttonText('Log Out'));
        expect(logOutButton.isPresent()).toBeTruthy();
        logOutButton.click();

        var logIn = buttons.first();

        //Fail for invalid email
        element(by.model('ctrl.email')).sendKeys('example');
        element(by.model('ctrl.password')).sendKeys('examplepassword');
        logIn.click();
        expect(dialog.isPresent()).toBe(true);

        //Fail for non-existant account
        element(by.model('ctrl.email')).sendKeys('@EXAMMMPLE.com');
        logIn.click();
        expect(dialog.isPresent()).toBe(true);
    
        //Success
        element(by.model('ctrl.email')).sendKeys('a@a.com');
        element(by.model('ctrl.password')).sendKeys('a');
        logIn.click();
        return browser.driver.wait(function () {
            return dialog.isPresent().then(function (present) {
                return !present;
            });
        }, 10000);
    });
});