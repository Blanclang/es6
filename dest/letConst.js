// let
//区别1： 声明提前
/*console.log(obj);
var obj = {};

console.log(obj1);
let obj1 = {};*/
//区别二： 块作用域;
/*
for(var p in {key:0, key1:1}) {
};
console.log(p);

for(let l in {key:0, key1:1}) {
    console.log(l);
};
console.log(l);
*/
//区别三： 不能重复声明
/*var obj = {};
var obj = [];

let obj1 = {};
let obj1 = [];*/

//const
/*
const obj = {};
Object.freeze(obj);
obj.key = "value";
obj.key1 = "ddsss";
console.log(obj);
*/
"use strict";