//Program to sum all elements in a array
// function sumarray(arr){
//     let sum = 0;
//     for (var i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// var data = [10,34,56,78]
// var finalSum = sumarray(data);
// console.log(finalSum);


//Program to get even elements in array
// function getevennum(arr){
//     let evennumbersarr=[];
//     for (index = 0;index < arr.length; index++){
//         if (arr[index] %2 == 0){
//             evennumbersarr.push(arr[index]);
//         }
//     }
//     return evennumbersarr;
// }

// var data = [2,13,46,52,83,98];
// var result = getevennum(data);
// console.log(result);



//Program to get even index elements in array
// function getelementatevenindex(arr){
//     let numbersarr = [];
//     for (index = 0; index < arr.length; index++){
//         if (index%2 == 0){
//             numbersarr.push(arr[index]);
//         }
//     }
//     return numbersarr;
// }

// var data = [2, 4, 7, 9, 13, 25, 38, 57, 68, 72, 88, 99]
// var result = getelementatevenindex(data);
// console.log(result);


//Program to get duplicate elements in array
// function getduplicate(arr){
//     let duplicatearr = [];
//     for (var index = 0; index < arr.length; index++){
//         for (var j = index + 1; j < arr.length; j++){
//             if (arr[index] == arr[j]) {
//                 y = arr[index];
//                 duplicatearr.push(y);
//             }
//         }
//     }
//     return duplicatearr;
// }

// var data = [10, 34, 56, 78, 11, 9, 9, 11, 56];
// var result = getduplicate(data);
// console.log(result);


//Program to get Max Element in Array
// function largestnuminarr (arr){
//     let max = arr[0];
//     for (index = 1; index < arr.length; index++){
//         if (arr[index] > max);{
//             max = arr[index];
//         }
//     }
//     return max;
// }

// var data = [1, 3, 13, 21, 45, 2, 10, 6, 41]
// var result = largestnuminarr(data);
// console.log(result);

//Program to sort elements in array
// var sortarr = function (arr) {
//     for (var i = 0; i < arr.length; i++){
//         for (var j = i + 1 ; j < arr.length; j++){
//             if (arr[i] >= arr[j]) {
//                 var temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

// var data = [10, 3, 6, 78, 12, 29, 59, 11];
// result = sortarr (data);
// console.log(result);




//Program to count number of zeros in a array
function getnumberofzeros(arr){
    let count = 0;
    for (index = 0; index < arr.length; index++){
        if (arr[index] == 0){
            count++;
        }
    }
    return count;
}


var data = [10, 34, 56, 78, 11, 9, 0, 30, 0, 5, 0];
result = getnumberofzeros(data);
console.log("The number of zeros in the array is " + result);
