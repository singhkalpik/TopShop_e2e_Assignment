import * as prodListpage from '../../pageObjects/productList.page'
const assert = require('assert');

const proListPage = function () {

   this.When(/^I select a random product from the returned list$/, () => {
        prodListpage.selectRandomProduct()
    });

    this.Then(/^the product listing page should display a list of products$/, () => {
       assert.ok(prodListpage.showProductList('Joni Jean'))
    });

};

module.exports = proListPage;