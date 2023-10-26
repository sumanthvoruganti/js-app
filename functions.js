// Function to add two numbers
function add(x,y){
    z = x + y;
    return z;
}

//Function to find even number
function isEven(x){
    var result = x%2 == 0;
    return result;
}

//Function to multiply array elements with 2
function multiplyarrwith2(arr){
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i]*2;
    }
    return arr;
}


//Function to find maximun of two given numbers
function max(x,y){
    let max = x;
    if (x < y){
        max = y;
    }
    return max;
}


//Function to print 1 to 10 numbers without using loop
function display(x){
    let i = 0;
    if (i<=x){
        return i;
        i++;
    }
}


// let result = add (5,8);
// console.log(result);
// let result1 = add (10,25);
// console.log(result1);


// let result = isEven(90);
// console.log(result);

// var arr = [2,5,9,12];
// let result = multiplyarrwith2(arr);
// console.log(result);

// let result = max(42,58);
// console.log(result);

let x = 5;
let result = display(x);
console.log(result);
