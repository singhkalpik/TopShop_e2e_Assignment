const brandLogo = '.BrandLogo-img'
const searchButton = 'img.Header-searchIcon'
const searchBarIcon = 'img.SearchBar-icon'
const searchInput = 'input.SearchBar-queryInput'
const cartBtn = '.Header-shoppingCartIcon'

export const goToPage = () => {
    browser.url('/')
    browser.pause(5000);
    var cartIcon = $(cartBtn);
    cartIcon.waitForExist(9000);
//    var handle = browser.windowHandle();
//    browser.windowHandleMaximize();
//    browser.pause(3000);
}


export const searchProduct = (product) => {

    browser.click(searchButton);
//    console.log("Product "+product);
    browser.pause(5000);
    browser.setValue(searchInput,product);
    browser.pause(1000);
    browser.click(searchBarIcon);
    browser.pause(5000);
}

export const hasLogo = () => browser.isVisible(brandLogo)