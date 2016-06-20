"use strict";
/*
var http = require('http');

let promise = new Promise((resolve, reject) => {
    http.get("http://www.filltext.com?rows=10&f={firstName}", function(res) {
        var size = 0;
        var chunks = [];
        res.on('data', function(chunk){
            size += chunk.length;
            chunks.push(chunk);
        });
        res.on('end', function(){
            resolve(chunks.toString());
        });
    }).on('error', (e) => {
        reject(e)
    });
});
promise.then((res) => {
    //成功回调
    console.log("成功回调");
    console.log(res);
}, (e) => {
    //失败回调
    console.log("失败回调");
    console.log(e);
});
*/

/*new Promise((resolve, reject) => {
    setTimeout(function() {
        console.log("0");
        resolve();
    }, 2000);
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("1");
            resolve("args");
        }, 2000);
    })
}).then((res) => {
    console.log(res)
});*/

/*
new Promise((resolve, reject) => {
    resolve();
}).then(() => {
        xxxxxx("xxxx");
}).then(() => {

}).catch((reson) => {
    console.log(reson);
})
*/

//1:Promise.all;
/*
Promise.all([
    new Promise((resolve, reject) => {
        setTimeout(resolve,2000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(resolve,3000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(resolve,4000);
    })
]).then(() => {
    console.log("success")
})
*/

//2:Promiss.race;
/*
Promise.race([
    new Promise((resolve, reject) => {
        setTimeout(resolve,2000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(resolve,3000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(resolve,4000);
    })
]).then(() => {
    console.log("success")
})
*/