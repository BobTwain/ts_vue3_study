export{}
// interface
interface MyItf{
    readonly name:string;
    age:number;
    height:number;
}//给对象用
let obj:MyItf={name:"cuituo",age:18,height:180}
// obj.name="lisi" 只读，修改就报错

interface ArrItf{
    // [idx:number]:下标类型，值类型
    [idx:number]:number|string
}
let arr:ArrItf=[1,2,3,"4","5"]


interface FnItf{
    //形参及类型：返回值类型
    (p:string,a:number):void
}
let fn:FnItf=(p:string,a:number)=>{
}
fn("",1)

interface NameItf{
    name:string
}
interface AgeItf{
    age?:number //属性是可以缺省的
}
// 继承，具有父接口的属性类型
interface PersonItf extends NameItf,AgeItf{
}

let P:PersonItf={name:"zhangsan",age:19}

interface AItf{
    a:number
}
interface AItf{
    b:string
}

let obj1:AItf={
    a:1,
    b:"b"
}