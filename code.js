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
function isVowel(char){

    if(char=="a" || char == "A"|| char == "e"|| char == "E"|| char == "i"|| char == "I"|| char == "o"|| char == "O"|| char == "U"|| char == "u"){
        return true;
    } else return false;
    // else if(char == "y" || char == 4 || char ===true || char ===false || char === undefined || char === "banana"){
    //     return false;
    // }
}
function add(num1,num2){
    // if(num1 ===2 && num2 ===3){
    // return 5;
    // }
    // if(num1 ===-3 && num2 ===-9){
    //     return -12;
    // }
    // if(num1 ===-3 && num2 ===-9){
    //     return -12;
    // }
    // if(num1 ==="5" && num2 ===6){
    //     return 11;
    // }
    // if(num1 ==="-4" && num2 ==="10"){
    //     return 6;
    // }
    // if(num1 ==="banana" && num2 ==="split"){
    //     return NaN;
    // }
    // if(num1 ===2 && num2 ==="apples"){
    //     return NaN;
    // }
    // if(num1 ==undefined && num2 ==undefined){
    //     return NaN;
    // }

    return parseFloat(num1) + parseFloat(num2);
}