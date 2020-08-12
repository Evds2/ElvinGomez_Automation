const LoginPage = require('../pageobjects/login.page');
const NavigationPage = require('../pageobjects/navigation.page')
const DashboardPage = require('../pageobjects/dashboard.page');
const dashboardPage = require('../pageobjects/dashboard.page');
//const wait = require('../helpers/waits')
const ArticleDetailPage = require('../pageobjects/articleDetail.page')
const { getGlobalFeedTab } = require('../pageobjects/dashboard.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        NavigationPage.open();
        browser.maximizeWindow();
        NavigationPage.goToSignIn();
        console.log(NavigationPage.getConduitText());
        LoginPage.login("alex.gonzalez@ucreativa.com", "Test1234");
        //waits.waitUntilElementIsDisplayed(DashboardPage.getNoArticlesLabel());
        expect(browser).toHaveUrl('https://demo.realworld.io/#/');
        //expect(browser).toHaveTitle('Home — Conduit');
        expect(DashboardPage.getNoArticlesLabel()).toBeDisplayed();
    });

    // it('should Your Feed be active by default', () => {
    //     expect(DashboardPage.getYourFeedTab()).toHaveAttribute('class', 'nav-link active');
    // });

    it('should go to another tab', () => {
        browser.setTimeout({'pageload': 1});
        dashboardPage.getGlobalFeedTab().click();
        browser.setTimeout({'implicit': 1000});
        /*browser.waitUntil(
            () => DashboardPage.getArticlesList()[1].isDisplayed(),
            {
                timeout: 15000,
                timeoutMsg: 'was not found after the indicated time'
            } 
        */
        expect(DashboardPage.getGlobalFeedTab()).toHaveClass('active', {message: 'Not active tab!', });
        console.log('Get Size:  ' +DashboardPage.getArticlesList().length);
        //expect(DashboardPage.getGlobalFeedTab()).toBeClickable();
        //assert para ver si la lista hace match con el limit 10 que sale a nivel del codigo en la pagina
        
        expect(DashboardPage.getArticlesList()).toBeElementsArrayOfSize({eq: 10});
    });

    it('should open read more', () => {
        DashboardPage.getArticlesReadMore().click();
    })

    it('should add a description', () => {
        browser.setTimeout({'implicit': 1000});
        //ArticleDetailPage.getDescriptionTextBox().setValue('Hola');
        //ArticleDetailPage.getPostCommentButton().click();
        browser.pause(2000);
        browser.setTimeout({'implicit': 1000});
        ArticleDetailPage.getDeleteCommentButton().click();
        browser.pause(2000);
        
        
    })
});


