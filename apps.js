// Header daily discount js Start
const today = new Date();
console.log (today);
const dayNumber = today.getDay();
console.log (dayNumber);
const element = document.getElementById("message1");

function special () {
    if (dayNumber === 1) {
        return "1/2 off all oils";
    }
    else if (dayNumber === 2) {
        return "2-for-1 treats";
    }
    else if (dayNumber === 3) {
        return "Buy-one-Get-one Free day";
    }
    else if (dayNumber === 4) {
        return "Add a gummy";
    }
    else if (dayNumber === 5) {
        return "Bring a friend get a extra treat";
    }
    else if (dayNumber === 6) {
        return "Buy two edibles get one free";
    }
    else if (dayNumber === 7) {
        return "Brunch and free samples";
    }
    else (element.classList.add("hideme"))

}
//Header daily discount js END

console.log("Your got a " + special());
element.innerHTML = "Check out the Special today" + "</br>" + special();
//Header daily discount js END

//doggie years calculator START

var calcDogYear = function () {
    // @ts-ignore
    var humanYear = document.getElementById("dog").value;
    var realDogAge = humanYear * 7;
    document.getElementById("dogAge").innerHTML = ("Your doggie is " + realDogAge + " years old in dog years!");
}

//doggie years calculator END