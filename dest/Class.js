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

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person(name, age) {
        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: "sayHi",
        value: function sayHi() {
            console.log("say hi");
        }
    }]);

    return Person;
}();

var SuperMan = function (_Person) {
    _inherits(SuperMan, _Person);

    function SuperMan(name, age, power) {
        _classCallCheck(this, SuperMan);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SuperMan).call(this, name, age));

        _get(Object.getPrototypeOf(SuperMan.prototype), "sayHi", _this).call(_this);
        _this.power = power;
        return _this;
    }

    _createClass(SuperMan, [{
        key: "usePower",
        value: function usePower() {
            console.log("show me the " + this.power);
        }
    }]);

    return SuperMan;
}(Person);

;

var sm = new SuperMan("nono", 11111, "dance");
sm.sayHi();
sm.usePower();