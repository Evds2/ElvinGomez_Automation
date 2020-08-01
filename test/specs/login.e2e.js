const LoginPage = require('..\pageobjects/login.page');
const NavigationPage = require('../pageobjects/navigation.page')

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        NavigationPage.open();
        NavigationPage.goToSignIn();
        console.log(NavigationPage.getConduitText());
        browser.pause()
    });
});


