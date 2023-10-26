// Function to count number of words in a string
// function countwords(str){
//     return str.split(" ").length;
// }

// let result = countwords("Hi welcome to coding krishna website");
// console.log(result);


//Function to compare two string
function comparestr (str1, str2){
    if (str1.match(str2)){
        return true;
    }else {
        return false;
    }    
}

let result = comparestr("codingkrishna","codingkrishna")
console.log(result);

