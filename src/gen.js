//如何创建和使用生成器;
/*
let list = function * () {
    yield 0;
    yield 1;
    yield 2;
    yield 3;
};
let gen = list();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
*/

/*
let inc = function(value) {
    return value+1
};
console.log( inc(1) );
*/

//生成器的特性
/*
//很重要的知识点， next的参数会变为上一次yield的返回值;
let inc = function * (value) {
    return (yield value+1);
};
let gen = inc(10);
console.log(gen.next());
console.log(gen.next(1111111111));
*/

//for...of循环
/*
let list = function * () {
    yield 0;
    yield 1;
    yield 2;
    yield 3;
};
for( let p of list() ) {
    console.log(p);
}
for(let v of [1,2,3,4,5,6,7,8,9,0]) {
    console.log(v);
}
*/

//生成器函数嵌套生成器函数;
/*
let list = function * () {
    yield 0;
    yield 1;
    yield * numbers();
    yield 4;
    yield 5;
};
function * numbers(){
    yield 3;
    yield 4;
}

for( let p of list() ) {
    console.log(p);
}
*/

//生成器的例子
/*
class Tree{
    constructor(value, children = []) {
        this.value = value;
        this.children = children;
    }
    *print() {
        yield this.value;
        for(let child of this.children) {
            yield * child.print();
        }
    }
}

let tree = new Tree(0, [
    new Tree(1, [new Tree(2)]),
    new Tree(3)
]);
for( let t of tree.print()) {
    console.log(t);
}
*/

