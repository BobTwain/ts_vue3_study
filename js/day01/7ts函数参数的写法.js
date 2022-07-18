"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fn(a, b = 3) {
    return a + b;
}
console.log('fn(1,2)', fn(1, 2));
console.log('fn(5)', fn(5));
function fn1(a, b) {
    return a;
}
console.log('fn1(1,2)', fn1(1, 2));
console.log('fn1(1)', fn1(1));
function fn2(a, b, ...arr) {
    console.log(a, b, arr);
}
fn2(1, 2, 3, 4, 5);
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
let arr3 = arr1;
arr1[1] = 4;
console.log('arr2', arr2);
console.log('arr3', arr3);
let obj1 = { a: 1, b: 2, c: [2, 3, 4] };
let obj2 = Object.assign({}, obj1);
obj1.a = 2;
console.log('obj2', obj2);
obj1.c[0] = 0;
console.log('obj2', obj2);
// 浅拷贝
