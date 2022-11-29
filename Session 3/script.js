// let firstName;
// const lastName = "Demolli";

// let job;


// console.log(firstName);
// let value1 = Boolean(null);
// let value2 = "20";

// console.log(value1);
// // firstName;

// if (firstName) {
//     console.log("my name is Jon");
// } else {
//     console.log("I don't have a name yet");
// }

// let score = prompt("What's your score?");

// if (score < 50) {
//     console.log("You didn't pass the exam");
// } else if (score < 60) {
//     console.log("Your grade is 6");
// } else if (score < 70) {
//     console.log("Your grade is 7");
// } else if (score < 80) {
//     console.log("Your grade is 8");
// } else if (score < 90) {
//     console.log("Your grade is 9");
// } else if (score <= 100) {
//     console.log("Your grade is 10");
// } else {
//     console.log("Wrong input");
// }

// functions

// function logger() {
//     console.log("Something");
// }


// function calcNumbers(number1, number2) {
//     console.log(number1 + number2)
// }

// calcNumbers(15, 20);

// function calcAge(birthYear) {
//     return `You are ${2022 - birthYear} years old`;
// }

// calcAge(1998);
// const cars = ["Audi", "BMW", "Mercedes"];

// console.log(cars[2]);

// const arditArr = [
//     "Ardit",
//     "Demolli",
//     24,
//     ["Altin", "Agon", "Leart"]
// ];

// const arditObj = {
//     firstName: "Ardit",
//     lastName: "Demolli",
//     age: 24,
//     friends: ["Altin", "Agon", "Leart"]
// }

// console.log(arditObj.friends)

// const car = {
//     brand: "Mercedes",
//     model: "G-class",
//     color: "black",

//     startEngine: function () {
//         console.log("Car is on");
//     },

//     stopEngine: function () {
//         console.log("Car is off");
//     }
// }

// car.startEngine();
// car.stopEngine();

// car.brand = "Audi";
// console.log(car.brand);

// document.querySelector("h1").innerText = "JavaScript is Fun!!";

// document.querySelector("button").addEventListener("click", function () {
//     document.querySelector("h1").style.color = "red";
// })


// function houseOne() {
//     console.log("Paper was delivered in house 1");
// }
// function houseTwo(callback) {
//     setTimeout(() => {
//         console.log("Paper was delivered in house 2");
//         callback();
//     }, 3000);
// }
// function houseThree() {
//     console.log("Paper was delivered in house 3");
// }

// function houseOne() {
//     setTimeout(() => {
//         console.log("Paper was delivered in house 1");
//     }, 4000);
// }
// function houseTwo(callback) {
//     setTimeout(() => {
//         console.log("Paper was delivered in house 2");
//         callback();
//     }, 3000);
// }
// function houseThree() {
//     setTimeout(() => {
//         console.log("Paper was delivered in house 3");
//     }, 3000);
// }

function deliver() {
    setTimeout(() => {
        console.log("Paper was delivered in house 1");
        setTimeout(() => {
            console.log("Paper was delivered in house 2");
            setTimeout(() => {
                console.log("Paper was delivered in house 3")
            }, 3000);
        }, 3000);
    }, 4000);
}

// houseOne();
// houseTwo(houseThree);

// deliver();

function houseOne() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Paper was delivered in house 1");
            reject("Paper couldn't be delivered");
        }, 5000);
    });
}
function houseTwo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Paper was delivered in house 2");
            reject("Paper couldn't be delivered");
        }, 3000);
    });
}
function houseThree() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Paper was delivered in house 3");
            reject("Paper couldn't be delivered");
        }, 4000);
    });
}

// houseOne()
//     .then(data => console.log(data))
//     .then(houseTwo)
//     .then(data => console.log(data))
//     .then(houseThree)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

async function getPaid() {
    const houseOneWait = await houseOne();
    const houseTwoWait = await houseTwo();
    const houseThreeWait = await houseThree();

    console.log(houseOneWait);
    console.log(houseTwoWait);
    console.log(houseThreeWait);
}

getPaid();