//========make sure page load before JS load (if not JS it will not find these element)==========
if (document.readyState ==`loading`) {
    document.addEventListener(`DOMContentLoaded`, ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName(`btn-danger`)  //remove button
    console.log(removeCartItemButtons) 
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener(`click`, removeCartItem)  
    }

    var quantityInput = document.getElementsByClassName(`cart-quantity-input`) //change cart quantity input
    for (var i = 0; i < quantityInput.length; i++) {
        var input = quantityInput[i]
        input.addEventListener(`change`, quantityChanged) 
    }

    var addToCartButtons = document.getElementsByClassName(`shop-item-button`) //add to cart botton
    for ( var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener(`click`, addToCartClicked) 
    }

    document.getElementsByClassName(`btn-purchase`)[0].addEventListener(`click`, purchaseClicked)
}

//the PURCHASE button
function purchaseClicked () {
    alert(`Thanks you for your purchases`)
    var cartItems = document.getElementsByClassName(`cart-items`)[0]
    while (cartItems.hasChildNodes() ) { //this while loop will remove all cart items until empty when purchase is made
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal() //this function update cart price after purchase
}

//remove button removing item
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal() //update price after removing item
}

//change quantity and price
function quantityChanged (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0 ) { //this If statement does not allow item quantity to go below 1
        input.value = 1
    }
    updateCartTotal() //update price after changing quantity
}

//item title , price, image add to shopping cart when clicked
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName(`shop-item-title`)[0].innerText //adding item name when add to cart btn is click
    var price = shopItem.getElementsByClassName(`shop-item-price`)[0].innerText //adding item price when add to cart btn is click
    var imageSrc = shopItem.getElementsByClassName(`shop-item-image`)[0].src //adding item img when add to cart btn is click
    console.log(title , price , imageSrc) 
    addItemToCart(title, price, imageSrc) //making a row for image,price,name
    updateCartTotal()
}  

function addItemToCart (title, price, imageSrc) {  //this function is to add name,price,image, and also warn customer that item is alerady added to cart
    var cartRow = document.createElement(`div`)     
    cartRow.classList.add(`cart-row`)
    var cartItems = document.getElementsByClassName(`cart-items`)[0]
    var cartItmeNames = cartItems.getElementsByClassName(`cart-item-title`)
    for (var i = 0; i < cartItmeNames.length; i++) {
        // @ts-ignore
        if (cartItmeNames[i].innerText == title ) { //this for loop is to alert user's if items is already in shopping cart
            alert(`This item is already added to cart`)
            return
        }
    }
    //adding/appending all new items into cart as a new row
    var carRowContents = ` 
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
                <span class="cart-item-title">${title}</span>
            </div>
                <span class="cart-price cart-column">${price}</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="1">
                <button class="btn btn-danger" type="button">REMOVE</button>
            </div>
    `
    cartRow.innerHTML = carRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName(`btn-danger`)[0].addEventListener(`click`, removeCartItem) //making remove button work by removing item when click
    cartRow.getElementsByClassName(`cart-quantity-input`)[0].addEventListener(`change`, quantityChanged) //updating quantity price 
}


//==================remove button JS===================
var removeCartItemButtons = document.getElementsByClassName(`btn-danger`)
console.log(removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener(`click`, function(event) {
        var buttonClicked = event.target
        // @ts-ignore
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

//=========== function for price difference when button used for adding/removing============
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName(`cart-items`)[0]
    var cartRows = cartItemContainer.getElementsByClassName(`cart-row`)
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName(`cart-price`)[0]
        var quanlityElement = cartRow.getElementsByClassName(`cart-quantity-input`)[0]
        // @ts-ignore
        var price = parseFloat(priceElement.innerText.replace(`$`, ``))
        // @ts-ignore
        var quantity = quanlityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100 //round total price to 2 decimal place
    // @ts-ignore
    document.getElementsByClassName(`cart-total-price`)[0].innerText = `$` + total
}
