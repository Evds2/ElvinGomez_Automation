const LoginPage = require('../pageobjects/login.page');
const NavigationPage = require('../pageobjects/navigation.page')
const DashboardPage = require('../pageobjects/dashboard.page');
const dashboardPage = require('../pageobjects/dashboard.page');
const { getGlobalFeedTab } = require('../pageobjects/dashboard.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        NavigationPage.open();
        browser.maximizeWindow();
        NavigationPage.goToSignIn();
        console.log(NavigationPage.getConduitText());
        LoginPage.login("alex.gonzalez@ucreativa.com", "Test1234");
        expect(browser).toHaveUrl('https://demo.realworld.io/#/');
        //expect(browser).toHaveTitle('Home — Conduit');
        expect(DashboardPage.getNoArticlesLabel()).toBeDisplayed();
    });

    // it('should Your Feed be active by default', () => {
    //     expect(DashboardPage.getYourFeedTab()).toHaveAttribute('class', 'nav-link active');
    // });

    it('should go to another tap', () => {
        dashboardPage.getGlobalFeedTab().click();
        //expect(DashboardPage.getYourFeedTab()).toHaveAttribute('class', 'nav-link active');
        expect(DashboardPage.getGlobalFeedTab()).toHaveClass('active', {message: 'Not active tab!', });
        //expect(DashboardPage.getGlobalFeedTab()).not.toHaveProperty('height', '42px');
        expect(DashboardPage.getGlobalFeedTab()).toBeClickable();
    });

});


