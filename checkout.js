//========make sure page load before JS load (if not it will not find these element)==========
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
        button.addEventListener(`click`, removeCartItem)  //function on line 30
    }

    var quantityInput = document.getElementsByClassName(`cart-quantity-input`) //change cart quantity input
    for (var i = 0; i < quantityInput.length; i++) {
        var input = quantityInput[i]
        input.addEventListener(`change`, quantityChanged) //function on line 37
    }

    var addToCartButtons = document.getElementsByClassName(`shop-item-button`) //add to cart botton
    for ( var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener(`click`, addToCartClicked) //function on line 46
    }

    document.getElementsByClassName(`btn-purchase`)[0].addEventListener(`click`, purchaseClicked)
}

//the PURCHASE button
function purchaseClicked () {
    alert(`Thanks you for your purchase`)
    var cartItems = document.getElementsByClassName(`cart-items`)[0]
    while (cartItems.hasChildNodes() ) { //this while loop will remove all cart items until empty
        cartItems.removeChild(cartItems.firstChild)
    }

    updateCartTotal() //this function update cart price after purchase
}

//remove button removing item
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

//change quantity and price
function quantityChanged (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0 ) {
        input.value = 1
    }
    updateCartTotal()
}

//add to cart button clicked
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName(`shop-item-title`)[0].innerText
    var price = shopItem.getElementsByClassName(`shop-item-price`)[0].innerText
    var imageSrc = shopItem.getElementsByClassName(`shop-item-image`)[0].src
    console.log(title , price , imageSrc) 
    addItemToCart(title, price, imageSrc) //making a row for image,price,name (function on line 56)
    updateCartTotal()
}  

function addItemToCart (title, price, imageSrc) {  //this function is to add name,price,image, and also warn customer that item is alerady added to cart
    var cartRow = document.createElement(`div`)
    cartRow.classList.add(`cart-row`)
    var cartItems = document.getElementsByClassName(`cart-items`)[0]
    var cartItmeNames = cartItems.getElementsByClassName(`cart-item-title`)
    for (var i = 0; i < cartItmeNames.length; i++) {
        // @ts-ignore
        if (cartItmeNames[i].innerText == title ) {
            alert(`This item is already added to cart`)
            return
        }
    }
    //adding all new items into car as a new row
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
    cartRow.getElementsByClassName(`btn-danger`)[0].addEventListener(`click`, removeCartItem) //making remove button work
    cartRow.getElementsByClassName(`cart-quantity-input`)[0].addEventListener(`change`, quantityChanged) //change quantity price
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

//=========== function for price difference with button used for adding/removing============
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName(`cart-items`)[0]
    var cartRows = cartItemContainer.getElementsByClassName(`cart-row`)
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName(`cart-price`)[0]
        var quantiyElement = cartRow.getElementsByClassName(`cart-quantity-input`)[0]
        // @ts-ignore
        var price = parseFloat(priceElement.innerText.replace(`$`, ``))
        // @ts-ignore
        var quantity = quantiyElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100 //round total price to 2 decimal place
    // @ts-ignore
    document.getElementsByClassName(`cart-total-price`)[0].innerText = `$` + total
}
