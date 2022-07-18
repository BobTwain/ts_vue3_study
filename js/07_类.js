"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 类中默认public
// protected 类外不能访问，类内可以访问
// 
class Person {
    constructor(name) {
        this.myage = 15;
        this.myname = name;
    }
    getmyname() {
        console.log('this', this);
        return this.myname;
    }
}
Person.count = 0;
let p = new Person("张三");
let q = new Person("李四");
console.log('p', p.myname);
console.log('q', q.getmyname());
class male extends Person {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    getmyname() {
        console.log('myage', this.myage);
        return this.myname + "111";
    }
}
let k = new male("王五", 15);
console.log('k', k.getmyname());
Person.count++;
console.log('Person.count', Person.count);
male.count++;
console.log('male.count', male.count);
