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