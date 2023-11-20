var _=require("lodash");
let res=_.partition([2,3,6,7,4,9],x=>x%2);
console.log(res);