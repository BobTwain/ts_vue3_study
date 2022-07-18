"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*{
    keyof T name|age
    {
        name?:string|undefined
        age?:number|undefined
    }


    for key in obj
}*/
let obj = {
    name: "111"
};
// type Required<T> = { [P in keyof T]-?: T[P]; }
// -去除问号
let obj2 = {
    name: "111",
    age: 14,
    height: 111
};
