export { }
let str = "4";    //初始赋值推导变量类型，以后类型str不能更改
// str=2(类型已经确定，不能更改)
const num = 1;//常量不能被修改，他的值就是他的类型

// js基础类型 number string Boolean undefined null symbol
// ts原始类型就是js基础数据类型
let str1: string = "1";
let num2: number = 10;
num2.toFixed(2);
let und: undefined = undefined
let nul = null
let sym: symbol = Symbol("333")
let vo: void = undefined;
function a(): void { }
// 类型别名
type StrOrNum = string | number
let str2 :StrOrNum="aaa"
// interface和type都可以自定义类型，类型不支持重复定义 接口可以
interface AItf{
    a:string
}
type Atype=AItf['a']
let str3:Atype='10'
console.log('str3',str3)