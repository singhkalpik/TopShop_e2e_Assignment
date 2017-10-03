const productName = 'header.Product-name'
const randomProduct = 'header.Product-name:nth-of-type(1)'
const productDetail = '.ProductDetail'
const prodImage = 'img.ProductImages-image:nth-of-type(1)'


export const showProductList = (product) => {
    var productList = (browser.getText(productName)).toString();
//    console.log("Product List: "+ productList);
    var productArray = (productList.split(","));
//    console.log("Product Count: "+productArray.length);
    var blnflag = true;
    for (var item in productArray) {
//      console.log("Item:"+ productArray[item])
      if(!((productArray[item]).includes(product))){
        blnflag = false;
      }
    }
    return blnflag;
}


export const selectRandomProduct = () => {
        browser.scroll(prodImage,10,10);
        browser.click(prodImage);
        browser.pause(5000);
}


