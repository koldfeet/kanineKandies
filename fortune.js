function tellFortune () {
    var myFortune = new Array (
        "You will get a new car",
        "You will graduate school",
        "Win a lottery",
        "Win a boat",
        "Travel to another country",
        "Make new friends",
        "Find a soulmate",
        "You will be healthy",
        "Death!",
    );

    var random = myFortune [Math.floor(Math.random() * myFortune.length)] ;
    document.getElementById("btn").innerHTML = random;
}

