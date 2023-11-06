//Program to check an Armstrong number of three digits
// let sum = 0;
// var number = prompt('Enter a three digit positive integer: ');

// let temp = number;
// while (temp > 0) {
//     let remainder = temp%10;

//     sum += remainder*remainder*remainder;

//     temp = parseInt(temp / 10);

// }
// if (sum == number){
//     console.log(`${number} is an Armstrong number`);

// }
// else {
//     console.log(`${number} is not an Armstrong number.`);
// }


//Program to find factorial of a given number
// function factorial (n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//         return answer;
//     }
//     else if (n > 1){
//         for (var i = n; i >= 1; i--){
//             answer = answer * i;

//         }
//         return answer;
//     }
//     else {
//         return "The number has to be positive."
//     }
// }
//     let n = 4;
//     answer = factorial(n);
//     console.log ("factorial of " + n + " is: " + answer);


//Program to check is the string is palindrome or not
// function checkpalindrome(string){
//     const len = string.length;
//     for (let i = 0; i < len/2; i++){
//         if (string[i] !== string[len -1 -i]){
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// const string = prompt('Enter a string: ');
// const value = checkpalindrome(string);
// console.log(value);

//Program to print star pattern
let n = 5;
let string = "";
for (let i = 1; i <= n; i++){
    for (let j = 0; j <= n; j++){
        string += " ";
    }
    for (let k = 0; k <= n; k++){
        string += "*";
    }
    string += "\n";
}
console.log(string);


