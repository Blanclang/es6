/*
null
undefined
string
number
boolean
object
*/
//symbol

/*
//不使用new
let symbol = Symbol("string");
console.log(symbol);
console.log(typeof symbol);

//不等于自己
console.log(Symbol("biaos") !== Symbol("biaos"));
*/

/*
let obj = {
    [Symbol()] : "value",
    [Symbol()] () {
        console.log(1111);
    }
}
console.log(obj);
console.log(Object.getOwnPropertyNames(obj));
//for in

console.log(Object.getOwnPropertySymbols(obj))
console.log(Reflect.ownKeys(obj));
*/

//Symbol.key, Symbol.keyFor
/*
 let symbol0 = Symbol("str");
 let symbol1 = Symbol("str");

 let symbol2 = Symbol.for("str");
 let symbol3 = Symbol.for("str");

 console.log(symbol0 == symbol1 );
 console.log(symbol2 == symbol3 );

 console.log(Symbol.keyFor(symbol3));
 */

const smType = {
    "blue" : Symbol("blue"),
    "red" : Symbol("red")
};

let fn = (type) => {
    switch(type) {
        case smType.blue :
            break;

        case smType.red :
            break;

        default :
            break;
    }
};

fn(smType.blue);
fn(smType.red);
fn("ssfsdf");