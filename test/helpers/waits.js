
class waits {

    waitUntilElementIsDisplayed(element) {
        browser.waitUntil(
            () => element.isDisplayed(), 
            {
                timeout: 30000,
                timeoutMsg = element + ' Element was not found after 5s'
            }
        );
    }
}

module.exports = new waits();

