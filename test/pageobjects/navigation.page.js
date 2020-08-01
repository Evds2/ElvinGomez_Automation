const Page = require('./page');

class navigationPage extends Page {

    get conduitLabel () { return $('a.navbar-brand.ng-binding') }
    get signInLink () { return $('=Sign in') }
    get signUpLink () { return $('*=up') }

    goToSignIn(){
        this.signInLink.click();
    }

    goToSignUp(){
        this.signUpLink.click();
    }

    getConduitText(){
        return this.conduitLabel.getText();
    }
}

module.exports = new navigationPage();
