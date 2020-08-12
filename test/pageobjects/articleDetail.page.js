const Page = require("./page");

class articleDetailPage extends Page{
    get descriptionTextBox() {return $('<textarea />')}

    getDescriptionTextBox() {
        return this.descriptionTextBox;
    }
}

module.exports = new articleDetailPage();