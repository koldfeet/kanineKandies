
// Header daily discount js START
const today = new Date();
console.log (today);
const dayNumber = today.getDay();
console.log (dayNumber);
const element = document.getElementById("message1");

function special () {
    if (dayNumber === 1) {
        return "1/2 off all oils!";
    }
    else if (dayNumber === 2) {
        return "2-for-1 treats!";
    }
    else if (dayNumber === 3) {
        return "Buy-one-Get-one Free day!";
    }
    else if (dayNumber === 4) {
        return "Add a gummy!";
    }
    else if (dayNumber === 5) {
        return "Bring a friend get a extra treat!";
    }
    else if (dayNumber === 6) {
        return "Buy two edibles get one free!";
    }
    else if (dayNumber === 7) {
        return "Brunch and free samples!";
    }
    else (element.classList.add("hideme"))

}

console.log("Your got a " + special());
element.innerHTML = "Check out the Special for today :" + "</br>" + special();
//Header daily discount js END

//doggie years calculator START
var calcDogYear = function () {
    // @ts-ignore
    var humanYear = document.getElementById("dog").value;
    var realDogAge = humanYear * 7;
    document.getElementById("dogAge").innerHTML = ("Your doggie is " + realDogAge + " years old in dog years!");
}
//doggie years calculator END

//Carousel Start
const arrayCarousel = [
    "images/image.png",
    "images/image2.png",
];

// @ts-ignore
counter = 0;

function setImage () {
    // @ts-ignore
    document.getElementById("carousel-image").src = arrayCarousel [counter];
    // document.getElementById("carousel-image1").src = arrayCarousel [counter];

    // @ts-ignore
    counter = (counter + 1) % arrayCarousel.length;
}

setInterval (setImage , 2000);
 //Carousel END

//dog CBD DOSAGE START
const smallDog = {
    oneQuarter: "1/4ml = 1.75mg",
    half: "1/2ml = 3.5mg",
    threeQuarter: "3/4ml = 5.25mg",
    oneML: "1ml = 7mg",
};

function smalDog () {
    var thisSmallDog = smallDog.oneQuarter + "<br>" + smallDog.half + "<br>" + smallDog.threeQuarter + "<br>" + smallDog.oneML;
    document.getElementById("myDosage").innerHTML = thisSmallDog;
};

const mediumDog = {
    oneQuarter: "1/4ml = 4.25mg",
    half: "1/2ml = 8.5mg",
    threeQuarter: "3/4ml = 12.75mg",
    oneML: "1ml = 17mg",
};

function medDog () {
    var thisMedDog = mediumDog.oneQuarter + "<br>" + mediumDog.half + "<br>" + mediumDog.threeQuarter + "<br>" + mediumDog.oneML;
    document.getElementById("myDosageTwo").innerHTML = thisMedDog;
};

const largeDog = {
    oneQuarter: "1/4ml = 6.75mg",
    half: "1/2ml = 13.5mg",
    threeQuarter: "3/4ml = 20.25mg",
    oneML: "1ml = 27mg",
};

function largDog () {
    var thisLargDog = largeDog.oneQuarter + "<br>" + largeDog.half + "<br>" + largeDog.threeQuarter + "<br>" + largeDog.oneML;
    document.getElementById("myDosageThree").innerHTML = thisLargDog;
};



// function dogDosage () {
//         var textOne = "Dogs: 5 - 35lbs";
//         var boldOne = textOne.bold();
//         var textTwo = "Dogs: 35 - 75lbs";
//         var boldTwo = textTwo.bold();
//         var textThree = "Dogs: 75lbs +";
//         var boldThree = textThree.bold();
//         document.getElementById("myDosage").innerHTML = boldOne  + "<br>" + smallDog.oneQuarter + "<br>" + smallDog.half + "<br>" +  smallDog.threeQuarter + "<br>" + smallDog.oneML ;
//         document.getElementById("myDosageTwo").innerHTML = boldTwo + "<br>" + mediumDog.oneQuarter + "<br>" + mediumDog.half + "<br>" +  mediumDog.threeQuarter + "<br>" + mediumDog.oneML ;
//         document.getElementById("myDosageThree").innerHTML = boldThree + "<br>" + largeDog.oneQuarter + "<br>" + largeDog.half + "<br>" +  largeDog.threeQuarter + "<br>" + largeDog.oneML ;
// };

dogDosage ();

//dog CBD DOSAGE END
