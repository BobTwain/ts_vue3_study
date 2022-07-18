"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let obj = {
    myname: "zhangsan",
    Person: () => { }
};
function Person(name) {
    this.myname = name;
}
obj.Person = Person;
obj.Person("xxx");
window.Person = Person;
window.Person("xxx");
