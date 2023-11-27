//even partition using lodash
// var _=require("lodash");
// let res=_.partition([2,3,6,7,4,9],x=>x%2);
// console.log(res);


var lodashObj = require('lodash');
isEven = (n) => {
    var x = n % 2;
    return x;
}

var result = lodashObj.partition([1,2,3,4], isEven);
console.log(result);

var r1 = lodashObj.chunk(['a','b','c','d'], 3);
console.log(r1);
