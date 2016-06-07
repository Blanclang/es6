"use strict";
//let , const

//let
/*
var obj = {};
let obj1 = {};
*/
//区别1：块作用域
/*for(var p in {key:"value"}) {
    console.log(p);
}
console.log(p);

for(let l in {key:"value"}) {
    console.log(l);
}
console.log(l);*/

//区别二：声明提前
/*console.log(obj);
var obj = {};
console.log(obj1);
let obj1 = {};*/

//区别三：不能重复声明
/*
var obj = {};
var obj = [];
console.log(obj);

let obj1 = {};
let obj1 =[];
console.log(obj1);
*/

//const
/*
const obj = {};
Object.freeze(obj);
obj.key = "value";
console.log(obj);
*/

