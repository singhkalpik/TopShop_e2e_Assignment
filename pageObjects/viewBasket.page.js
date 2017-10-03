

const qtyDropdown = 'select#bagItemQuantity.Select-select'
const editProdBtn = 'button.OrderProducts-editText'
const saveBtn = 'button.Button.OrderProducts-saveButton'
const addedProd = '.OrderProducts-product'
const productLabelString = '.OrderProducts-label'
const deleteProdBtn = '.OrderProducts-deleteIcon'
const deleteconfirmBtn = 'button.Button.OrderProducts-deleteButton'
const emptyBagLbl = '.MiniBag-emptyLabel'

export const changeProductQty = () => {
        browser.scroll(editProdBtn,5,5);
        browser.click(editProdBtn);
        browser.pause(2000);
        browser.scroll(qtyDropdown,5,5);
        browser.selectByValue(qtyDropdown,3);
        browser.pause(2000);
        browser.click(saveBtn);
        browser.pause(3000);
}

export const removeProductBasket = () => {
        browser.scroll(deleteProdBtn,10,10);
        browser.click(deleteProdBtn);
        browser.pause(2000);
        browser.click(deleteconfirmBtn);
        browser.pause(5000);
}



export const isProductAddedtoBasket = () => browser.isVisible(addedProd)

export const isBasketEmpty = () => browser.isVisible(emptyBagLbl)

export const shouldSeeSelectedQty = () => {
    var productLabel = (browser.getText(productLabelString)).toString();
//    console.log("Quantity "+ productLabel);
    var blnflag = false;
        if(productLabel.includes("3 x")){
            blnflag = true;
          }
    return blnflag;
}





