"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fn1(n) {
    return n;
}
console.log('fn1(1)', fn1(true));
let obj = {
    name: "",
    getName() {
        return 1;
    }
};
let obj2 = {
    name: "2",
    getName() {
        return 2;
    }
};
