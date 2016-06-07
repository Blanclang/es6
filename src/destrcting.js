"use strict";

/*
let [foo, bar] = [1, 2];
console.log(foo, bar);
*/

/*
let [foo, [bar, baz]] = [ 1, [2, 3]];
console.log(foo, bar ,baz);
*/

/*
let { foo : 大姨妈 }  = {foo : "30"};
console.log(大姨妈);
*/

/*
let {foo} = {foo:30};
let {foo:foo} = {foo:30};
console.log(foo);
*/

/*
let {foo:[bar,{baz:obj}]} = {foo:[11111,{baz:{heheda:"我了"}}]};
console.log(bar, obj);
*/

/*
let [s, t, r, i , n , g] = "hello";
console.log(s, t, r, i, n, g);
*/

/*
let {valueOf} = (new Number(1)).valueOf;
console.log(valueOf);
*/

/*
var obj = {};
Object.defineProperty(obj, "foo" , {
    value : "nono",
    enumerable : false
});

//let {foo} = obj;
let subObj = {__proto__:obj};
let {foo} = subObj;
console.log(foo);
*/

/*
let {obj = 1, obj1 = 2} = {obj : "heheda"};
console.log(obj, obj1);
*/

/*
function fn([str] = ["default"]) {
    console.log(str);
};
fn(["你大爷"]);
fn();
*/

/*
var exec = require("child_process").exec;
import {exec} from "child_process";
console.log(exec);
*/

/*
import {exec} from "./exec.js"
console.log(cmd);
*/
