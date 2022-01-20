//========make sure page load before JS load (if not it will not find these element)==========
if (document.readyState ==`loading`) {
    document.addEventListener(`DOMContentLoaded`, ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName(`btn-danger`)
    console.log(removeCartItemButtons)
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener(`click`, removeCartItem) 
    }

    var quantityInput = document.getElementsByClassName(`cart-quantity-input`) 
    for (var i = 0; i < quantityInput.length; i++) {
        var input = quantityInput[i]
        input.addEventListener(`change`, quantityChanged)
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
    total = Math.round(total * 100) / 100
    document.getElementsByClassName(`cart-total-price`)[0].innerText = `$` + total
}

//==========cart quantity input change + price=============