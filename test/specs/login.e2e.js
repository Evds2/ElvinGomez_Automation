const LoginPage = require('../pageobjects/login.page');
const NavigationPage = require('../pageobjects/navigation.page')

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        NavigationPage.open();
        browser.maximizeWindow();
        NavigationPage.goToSignIn();
        console.log(NavigationPage.getConduitText());
        LoginPage.login("Text", "hola123");
    });
});


