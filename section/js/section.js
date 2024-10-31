function userInput(){
    let number=
    window.prompt ('add number 0-9');
    console.log(number);
    return number;
}


let numberFirst = userInput();
let numberSecond = userInput();

console.log('number first is '+numberFirst)
console.log('number first is' +numberSecond)

results= numberFirst + numberSecond;
document.writeln('Your numbers were '+numberFirst+' and '+numberSecond+' = ');
$('.simple').append(results);
console.log(results);