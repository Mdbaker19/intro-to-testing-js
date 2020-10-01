// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name){
    if(typeof name === "boolean"){
        return "Hello, World!";
    } else {
        return "Hello, " + name + "!";
    }
}

function add(x, y){
    if(typeof x === "number" && typeof y === "number") {
        return x + y;
    } else {
        return "NaN";
    }
}

function double(x){
    return x * 2;
}

function isFive(input){
    return(input === 5);
}

function isEven(x){
    return (x % 2 === 0);
}

function isVowel(input){
    if(input === undefined){
        return false;
    } else {
        let check = input.charAt(0);
        if (check.match(/[aeiou]/i)) {
            return true;
        }
        return false;
    }
}
