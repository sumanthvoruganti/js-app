// console.log ("The sequence of numbers are ")
// for (let i = 0; i <= 20; i++){
//     console.log(i+",");
// }


// console.log ("The sequence of numbers are ")
// for (let i = 20; i >= 0; i--){
//     console.log(i+",")
// }


// var i = 0;
// while (i<10){
//     console.log (i);
//     i++;
// }


// for (i = 0; i < 10; i = i + 2){
//     console.log(i+",");
// }


// for (i = 0; i < 10; i++){
//     if (i%2 == 0){
//         console.log(i);
//     }
// }


// for (i = 0; i < 10; i++){
//     if (i%2 != 0){
//         console.log (i);
//     }
// }


// for (i = 0; i < 100; i++){
//     if (i%7 == 0){
//         console.log (i);
//     }
// }


let n1 = 0;
let n2 = 1;
let n3 = 0;
var count = 10;
console.log (n1,n2);
for (i = 0; i <= count; i++){
    n3 = n1+n2;
    console.log(n3);
    n1 = n2;
    n2 = n3;
}
