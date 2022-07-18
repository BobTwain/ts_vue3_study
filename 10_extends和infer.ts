export {

}

type Fntype<P> = P extends string | number ? P[] : P; 

let obj:Fntype<number>=[1,2,3];
// let obj2:Fntype<boolean>=[true,false]
let obj3:Fntype<string>=['true','false','true']

type booleanArray=boolean[];

let bolArray:booleanArray=[true,false,true]



type obj={name:string,age:number}



// infer 类型推断
// infer N

interface Person{
    name:string;
    age:number;
    [idx:number]:number|string
    [idx:string]:number|string
}
// key of 表现接口这些属性名
type Ptype =keyof Person;
let p1:Ptype="name"
let p2:Ptype="age"
let p3:Ptype=111


type StrOrNum=string|number
type PItf={
    [k in StrOrNum]:string
}
let obj1:PItf={
    a:"",
    10:""
}


//

let str="123"
type StrType=typeof str;
let aa:StrType="xx"