const Page = require('./page');

class dashboardPage extends Page {

    get noArticlesLabel () { return $("//*[@class='article-preview']") }
    //elemento con selector className y text
    get yourFeedTab () {return $("//*[@class='nav-link active']")}
    get globalFeedTab() {return $('.nav-link=Global Feed')}
    //Concatenacion de elementos
    get articlesRows() {return $('<article-list />').$$('<article-preview />')}
    get articlesReadMore() {return $('<article-list />').$$('<article-preview />')[1].$('span=Read more...')}
    
    getNoArticlesLabel(){
        return this.noArticlesLabel;
    }

    getYourFeedTab(){
        return this.yourFeedTab;
    }
    
    getGlobalFeedTab(){
        return this.globalFeedTab;
    }

    getArticlesList(){
        return this.articlesRows;
    }

    getArticlesReadMore(){
        return this.articlesReadMore;
    }
}

module.exports = new dashboardPage();