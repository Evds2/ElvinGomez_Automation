const Page = require('./page');

class dashboardPage extends Page {

    get noArticlesLabel () { return $("//*[@class='article-preview']") }
    get yourFeedTab () {return $("//*[@class='nav-link active']")}
    get globalFeedTab() {return $('.nav-link=Global Feed')}
    
    getNoArticlesLabel(){
        return this.noArticlesLabel;
    }

    getYourFeedTab(){
        return this.yourFeedTab;
    }
    
    getGlobalFeedTab(){
        return this.globalFeedTab;
    }
}

module.exports = new dashboardPage();