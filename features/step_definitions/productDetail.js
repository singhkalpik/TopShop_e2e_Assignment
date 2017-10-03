import * as prodDetailpage from '../../pageObjects/productDetail.page'
const assert = require('assert');

const proDetailPage = function () {

   this.When(/^I add the selected product to the basket$/, () => {
        prodDetailpage.selectSize()
        prodDetailpage.addProductToBasket()
        prodDetailpage.viewBag()
    });

    this.Then(/^I should be taken to the product detail page$/, () => {
       assert.ok(prodDetailpage.shouldBeonProductDetailPage())
    });


};

module.exports = proDetailPage;