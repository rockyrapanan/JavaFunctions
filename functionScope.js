//Function Scope
function collectEggs(){
    let totalEggs= 6;
    console.log(totalEggs)
}

// Block Scope.
let radius = 8;
if (radius > 0){
    const PI = 3.14159;
    let msg = 'HIII'
}

// Lexical Scope
function bankRobbery(){
    const heroes = ['Spiderman', 'Deadpool', 'Wolverine', 'Ironman'];
    function cryForHelp(){
        for(let hero of heroes) {
            console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
        }
    }
    cryForHelp();
}

//Function Expressions
const add = function (x,y) {
    return x + y;
}

// Higher Order Functions.
function callTwice(func){
    func();
    func();
}
//Calling function to do ten times.
function callTenTimes(f){
    for(let i = 0; i < 10; i++){
        f()
    }
}
function rollDice(){
    const roll = Math.floor(Math.random() * 6 + 1)
    console.log(roll)
}
callTwice(rollDice);
// Return Functions
function MakeMysteryFunc(){
    const rand = Math.random();
    if (rand > 0.5){
        return function(){
            console.log("Congrats yopu got the function right")
            console.log("It looks great!")
        }
    } else{
        return function(){
            alert("You got a virus in your computer!")
            alert("Good luck trying to fix your computer lol!")
        }
    }
}
// Functions between two numbers.
function isBetween(num){
    return num >= 50 && num <= 100
}

// This function will create a factory function.
/*
 if  you create const function with min and max variables is will
 store those numbers in function. 
 Example: const function child(0, 15)
          const function adult(18,50)

*/
function makeBetweenFunc(min, max){
    return function(num){
        return num >= min && num <= max;
    }
}

// Math function (METHODS)

const myMath = {
    PI: 3.14159,
    square (num){
        return num * num;
    },
    cube (num) {
        return num  ** 3;
    },
   
}
// Coding Exercise:
/*
Define an object called square, which will hold methods that have to do with the geometry of squares. It should contain two methods, 
  area and perimeter area should accept the length of a side (all sides are the same in a square) 
  and then return the side squared. perimeter should accept the length of a side and return 
  that side multiplied by 4. 

    square.area(10) //100
    square.perimeter(10) //40


*/
//Answer:
const square = {
    area(num){
        return num * num;
    },
    perimeter(num){
        return num + num + num + num;
    },
}
