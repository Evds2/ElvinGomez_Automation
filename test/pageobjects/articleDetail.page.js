const Page = require("./page");

class articleDetailPage extends Page{
    get descriptionTextBox() {return $('<textarea />')};
    get postCommentButton() {return $("//*[@class='btn btn-sm btn-primary']")};
    get deleteCommentButton() {return $("//*[@class='mod-options']")};

    getDescriptionTextBox() {
        return this.descriptionTextBox;
    }

    getPostCommentButton() {
        return this.postCommentButton;
    }

    getDeleteCommentButton(){
        return this.deleteCommentButton;
    }

}

module.exports = new articleDetailPage();