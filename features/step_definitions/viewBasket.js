import * as viewbasketpage from '../../pageObjects/viewBasket.page'
const assert = require('assert');

const viewBasketPage = function () {

   this.When(/^I change the product quantity$/, () => {
        viewbasketpage.changeProductQty()
    });

   this.When(/^I open the basket and remove the added product$/, () => {
        viewbasketpage.removeProductBasket()
    });

   this.Then(/^my basket should be empty$/, () => {
        assert.ok(viewbasketpage.isBasketEmpty())
    });

   this.Then(/^I should see the product added to the basket$/, () => {
        assert.ok(viewbasketpage.isProductAddedtoBasket())
    });

   this.Then(/^I should see the selected quantity for the product$/, () => {
        assert.ok(viewbasketpage.shouldSeeSelectedQty())
    });


};

module.exports = viewBasketPage;