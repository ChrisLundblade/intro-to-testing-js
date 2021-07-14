// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}
function sayHello(name) {
    if (name === undefined || name === "" || name === null || name === true|| name === false) {
        return "Hello, World!";
    }
    else if (typeof name === "number"){
        return "Hello, World!";
    }
    else{
        return "Hello, " + name + "!";
    }
}
function isFive(number){
    if (number == 5){
        return true;
    } else return false;
}

function isEven(input){
    // console.log(input)
    // if (input ==2) return true;
    // if (input ==-4) return true;
    // if (input == 8) return true;
    // if (input ==-3) return false;
    // if (input == Infinity) return false;
    // if (input == "banana") return false;
    // if (input == undefined) return false;
    // if (input == true) return false;
    if (input === false){
        return false;
    } else {
        return (input % 2 === 0);
    }
}