"use strict";
/*
//定义类
class Person {
    constructor(name , age) {
        this.name = name ;
        this.age = age;
    }
    sayHi() {
        console.log("say hi");
    }
}
let p = new Person("name",11111);
console.log(p);
p.sayHi();
*/

/*
function Person(name , age) {
    this.name = name ;
    this.age = age;
}
Person.prototype.sayHi = function() {
    console.log("say hi");
}

let p = new Person("name",11111);
console.log(p);
p.sayHi();
*/
//定义类的静态属性和静态方法
/*
class Point{
    static showDefault() {
        console.log("静态方法");
    }
    showDefault() {
        console.log("实例方法");
    }
}
Point.attr = {0:1};
let p = new Point();
p.showDefault()
Point.showDefault();
console.log(Point.attr);
*/

//继承的使用
/*
class Person {
    constructor(name , age) {
        this.name = name ;
        this.age = age;
    }
    sayHi() {
        console.log("say hi");
    }
}
class SuperMan extends Person {
    constructor(name, age, power) {
        super(name, age);
        super.sayHi();
        this.power = power;
    }
    usePower() {
        console.log(`show me the ${this.power}`);
    }
};

let sm = new SuperMan("nono",11111,"dance");
sm.sayHi();
sm.usePower();
*/


/*
//生成器;
class Person {
    * gen() {
        yield [1,2];
        yield [2,3];
        yield [4,5];
        yield [6,7];
    }
}
let p = new Person();
console.log(...p.gen())
*/


/*
let name = "foo";
class Person {
    [name] () {
        console.log("hehe")
    }
}
let p = new Person();
p.foo();
*/

class Person {
    constructor(name , age) {
        this.name = name ;
        this.age = age;
    }
    sayHi() {
        console.log("say hi");
    }
}
class SuperMan extends Person {
    constructor(name, age, power) {
        super(name, age);
        super.sayHi();
        this.power = power;
    }
    usePower() {
        console.log(`show me the ${this.power}`);
    }
};

let sm = new SuperMan("nono",11111,"dance");
sm.sayHi();
sm.usePower();

