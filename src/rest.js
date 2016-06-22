"use strict"
//rest 参数
/*
let fn = function (...args) {
    console.log( arguments );
    console.log( args );
};
fn( "a", "b", "c", "d");
*/

/*
let fn = function() {
    return Array.from(arguments).reduce((a, b) => {
        return a+b;
    })
}
*/

/*
let fn = function (op, ...args) {
    return args.reduce((a, b) => {
        return eval(String(a)+op+String(b));
    })
}
console.log(fn("*",1,2,3,4))
*/

/*
let fn = function () {
    let args = Array.from(arguments);
    let op = args[0];
    args = args.slice(1);

    return args.reduce((a, b) => {
        return eval(String(a)+op+String(b));
    })
}
console.log(fn("*",1,2,3,4))
*/

//扩展运算符
/*
console.log( Math.max(1,2,3,4) );
console.log( Math.max(...[1,2,3,4]) );
console.log( Math.max.apply(Math, [5,6,7,8]));

let array = [1,2,3,4];
let array2 = [5,6,7,8];
console.log([...array, 100,...array2] );
console.log( Array.prototyp.concat.apply([], [array, [100], array2]) );
*/