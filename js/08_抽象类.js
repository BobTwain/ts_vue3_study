"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    getAge() {
        return 11;
    }
}
class Male extends Person {
    constructor() {
        super(...arguments);
        this.name = "";
    }
    getName() {
        return this.name;
    }
    ;
}
let a = new Male();
// let p= new Person()抽象类不能被实例化
console.log('a.getAge', a.getAge());
class M {
    constructor() {
        this.name = "";
        this.age = 14;
    }
    getName() {
        return this.name;
    }
}
let m = new M;
