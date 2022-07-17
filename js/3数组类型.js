"use strict";
let arr1 = [1, 2, 3];
arr1[0] = 10;
let arr2 = [10, 20, 30]; //泛型
arr2[1] = 20;
// 元组
let arr3 = [10, 20, true];
// 联合类型
let numAndStr = [1, "190", 2];
let numAndStr2 = 1;
let obj;
obj = { a: 1, b: '3' };
// 交叉类型
let obj3;
obj3 = { name: "zhangsan", age: 18, height: 180 }; //都得有
let a = 1;
let n;
n = "10";
n = [10];
n = 1;
// n.toFixed(2)//报错，除非上面写number
if (typeof (n) === "number") {
    n.toFixed(2);
}
