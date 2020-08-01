const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class navigationPage extends Page {
    /**
     * define selectors using getter methods
     */
    get conduitLabel () { return $('a.navbar-brand.ng-binding') }
    get signInLink () { return $('=Sign in') }
    get signUpLink () { return $('*=up') }

    goToSignIn(){
        this.signInLink().click();
    }

    goToSignUp(){
        this.signUpLink().click();
    }

    getConduitText(){
        return this.conduitLabel.getText();
    }
}

module.exports = new navigationPage();
