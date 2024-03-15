 
const ConvenienceFees=99;
let bagItemObjects;

onLoad();

function onLoad() {
    loadBagItemObjects();
    displayBagItems();
    displayBagSummary();
}
function displayBagSummary(){
    
    let bagSummaryElement= document.querySelector('.bag-summary');
    let totalItem=bagItemObjects.length;
    let totalDiscount=0;
    let totalMRP=0;
    
    bagItemObjects.forEach(bagItems=>{
        totalMRP+=bagItems.price;
        totalDiscount+=bagItems.original-bagItems.price;
    })
    let finalPayment=totalMRP - totalDiscount + ConvenienceFees;
    
    bagSummaryElement.innerHTML=`<div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">₹${totalMRP}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">₹99</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">₹${finalPayment}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>
 `
}

function loadBagItemObjects() {
    bagItemObjects = bagItems.map(itemsId => {
        for (let i = 0; i < items.length; i++) {
            if (itemsId == items[i].id) { // Access the item's id property
                return items[i];
            }
        }
    });
}

function displayBagItems() {
    let containerElement = document.querySelector('.bag-items-container');
    let count = '';
    bagItemObjects.forEach(bagItem => {
        count += generateItemHTML(bagItem);
    });

    containerElement.innerHTML = count;
}

function removeFromBag(itemsId){
    bagItems=bagItems.filter(bagItemId=> bagItemId!=itemsId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems))
    loadBagItemObjects();
    displayBagIcon();
    displayBagItems();
    displayBagSummary();
}


function generateItemHTML(items) {
    return `<div class="bag-items-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="${items.image}" width="100" height="100">
    </div>
    <div class="item-right-part">
      <div class="company">${items.name}</div>
      <div class="item-name">${items.description}</div>
      <div class="price-container">
        <span class="current-price">Rs ${items.price}</span>
        <span class="original-price">Rs ${items.original}</span>
        <span class="discount-percentage">(${items.off}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${items.original} days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${items.original}</span>
      </div>
      <div class="remove-from-cart" onClick="removeFromBag(${items.id})">X</div>
    </div>
    

   
  </div>`;
}
