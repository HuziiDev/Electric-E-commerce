
let bagItems=[];


  onLoad();




function onLoad(){
    let bagItemStr=localStorage.getItem('bagItems')
    bagItems=bagItemStr ? JSON.parse(bagItemStr) : [];
        showCards();
        displayBagIcon()
}



  

  function addToBag(itemsId){
    bagItems.push(itemsId)
    localStorage.setItem('bagItems', JSON.stringify(bagItems))
    displayBagIcon()
  }
  
  
function displayBagIcon(){
    let bagItemCount=document.querySelector('.bag-count')
    if(bagItems.length>0){
        bagItemCount.style.visibility='visible'
        bagItemCount.innerHTML=bagItems.length
    }else{
        bagItemCount.style.visibility='hidden'
    }
    
}



function showCards(){
    var count='';
    let itemContainer=document.querySelector('#product-container');
    if(!itemContainer){
        return;
    }
    items.forEach(function(items){
        count+=`<div class="main-product-container">
        <img src="${items.image}" alt="" >
        <div class="company-name">${items.name}</div>
        <div class="product-description">${items.description}</div>
        <div class="price">
            <span class="actual">${items.price}</span>
            <span class="original">${items.original}</span>
            <span class="off">${items.off}</span>
        </div>
        <button class="add-to-bag" onClick="addToBag(${items.id})">Add to bag</button>
    </div>`
    })
    itemContainer.innerHTML=count;
}

