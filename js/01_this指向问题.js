"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 加了export{}，这里不是全局，这里扩展的window接口就失效了，需要写到global.d.ts
// 在ts中提供了Window类型，window就是Window类型的对象
// 在全局上，给window扩展这个属性
function Person(name) {
    // 在ts书写中，需要指明this指向，在函数第一个形参位置
    // Window类型中美元myname这个属性，需要我们自己扩展
    this.myname = name;
}
window.Person = Person;
window.Person("");
