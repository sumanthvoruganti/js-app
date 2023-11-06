//Program to assign a function to a variable
// var add = function(x,y){
//     let sum = x+y;
//     return sum;
// }

// var result = add(10,30);
// console.log(result);


//Program to pass a function to another function as argument
// function f1(fun,x,y){
//     let result = fun(x,y);
//     return result;
// }
// var add = function(x,y){
//     let sum = x + y;
//     return sum;
// }
// var sub = function(x,y){
//     let sum = x - y;
//     return sum;
// }
// var result = f1(add, 4, 5);
// console.log(result);
// var result1 = f1(sub, 9, 12);
// console.log(result1);

//Program to return a function from another function
// var isEven = function(x,y){
//     let sum = x + y;
//     return sum;
// }
// function f1(){
//     console.log("inside f1 function");
//     return isEven;
// }
// function f2(){
//     console.log("inside f2 function");
//     return function(x,y){
//         let sum = x + y;
//         return sum;
//     }
// }
// var evenFun = f1();
// var r1 = evenFun(5);
// console.log(r1);
// var evenFu = f2();
// var r2 = evenFu(10);
// console.log(r2);

//Program to write a arrow function
var add = (x,y) => {
    let sum = x + y;
    return sum;
}
var result = add(10,30);
console.log(result);
