
const productDetail = '.ProductDetail'
const addToBasketBtn = 'button.Button.AddToBag'
const sizeDropdown = '.Select-select'
const viewBagBtn = 'button.Button.AddToBagConfirm-viewBag'

export const addProductToBasket = () => {
        browser.scroll(addToBasketBtn,10,10);
        browser.click(addToBasketBtn);
        browser.pause(5000);
        var viewCart = $(viewBagBtn);
        viewCart.waitForExist(4000);
}

export const viewBag = () => {
        browser.scroll(viewBagBtn,10,10);
        browser.click(viewBagBtn);
        browser.pause(5000);
}

export const selectSize = (product) => {
        browser.scroll(sizeDropdown,10,10);
        browser.selectByIndex(sizeDropdown,4);
        browser.pause(2000);
}


export const shouldBeonProductDetailPage = () => browser.isVisible(productDetail)