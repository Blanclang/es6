// coffescript || typescript;

/*
//箭头函数的定义;
let fn = function () {
    return "string";
}
console.log( fn() );

let fn0 = () => {
    return "string0";
}
console.log( fn0() );

let fn1 = () => "string1";
console.log( fn1() );
*/

//利用箭头函数可以实现什么?
/*
const squre = (x) => x*x;
const add = (x ,y ) => x+y;
const isEven = (x) => x%2 == 0;
const not = (fn) => (...args)=> !fn.apply(null,args);

console.log( squre(10) );
console.log( add(10,6) );
console.log( isEven(10) );
console.log( not(isEven)(10) );
console.log([1,2,3].map(squre).reduce(add));
*/

//箭头函数和普通函数的区别:
//1：箭头函数中没有this;
/*
let person = {
    name : "nono",
    hobbies : ["internet", "dance"],
    showHobbies : function() {
        var _this = this;
        this.hobbies.forEach(function( hobby ) {
            console.log( `${_this.name} likes ${hobby}` );
        })
    }
};
person.showHobbies();
*/

/*
let person = {
    name : "nono",
    hobbies : ["internet", "dance"],
    showHobbies : function()  {
        console.log(this);
        this.hobbies.forEach(( hobby ) => {
            console.log( `${this.name} likes ${hobby}` );
        })
    }
};
person.showHobbies();
*/

//2：箭头函数不能作为构造函数？ 箭头函数没有this;
/*
let Fn = function() {
    this.name = "xx";
}
console.log(new Fn());

let Fn0 = () => {
    this.name = "xx";
}
console.log(new Fn0());
*/

//3: 箭头函数中没有arguments;
/*
let fn = function() {
    console.log("fn参数为");
    console.log(arguments);
}
fn(1,2,3,4);

let fn1 = () => {
    console.log("fn1参数为");
    console.log(typeof arguments);
}
fn1(5,6,7,8);
*/

//4：箭头函数不能作为生成器；
"use strict";