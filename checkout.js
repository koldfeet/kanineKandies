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
}

//remove button removing item
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal
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
    console.log(title) 
}  //=============start here at 27:06 ======= add price and quantity====================


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
        var price = parseFloat(priceElement.innerText.replace(`$`, ``))
        var quantity = quantiyElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100 //round total price to 2 decimal place
    document.getElementsByClassName(`cart-total-price`)[0].innerText = `$` + total
}

//==========add to cart button=============
