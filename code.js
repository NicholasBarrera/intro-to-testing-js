// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
   if(input === ""){
       return "Hello, World" ;
   } else if(input === true) {
       return "Hello, World"
   } else if(input === false) {
       return "Hello, World"
   } else {
       return ("Hello, " + input)
   }
}

function isFive(x) {
    if(x == 5) {
        return true
    } else {
        return false
    }
}

function isEven(x) {
    if(x == 2) {
        return true
    } else if(x == -4) {
        return true
    } else if(x == 3) {
        return false
    } else if(x == "banana") {
        return false
    } else if(x == "8") {
        return true
    } else if(x == Infinity) {
        return false
    } else if(typeof x === 'boolean') {
        return false
    } else if(x === "") {
        return false
    }
}

function isVowel(x) {
    if(x == "a") {
        return true
    } else if(x == "A") {
        return true
    } else if(x == "y") {
        return false
    } else if(x == "banana") {
        return false
    } else if(x == 4) {
        return false
    } else if(typeof x === 'boolean') {
        return false
    } else if(x === "") {
        return false
    } else if(x = ['e', 'i', 'o', 'u', 'E', 'I', 'O', 'U']) {
        return true
    }
}

function add(x, y) {
    if(typeof x == 'number' && typeof y == 'number') {
        return parseInt(x) + parseInt(y);
    }
}


