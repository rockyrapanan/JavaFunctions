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