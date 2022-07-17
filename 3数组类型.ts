let arr1:number[]=[1,2,3]
arr1[0]=10;
let arr2:Array<number>=[10,20,30]//泛型
arr2[1]=20;
// 元组
let arr3:[number,number,boolean]=[10,20,true]
// 联合类型
let numAndStr:(number|string)[]=[1,"190",2]
let numAndStr2:1|"2"=1;
let obj:{a:1}|{b:'3'}
obj={a:1,b:'3'};
// 交叉类型
let obj3:{name:string,age:number}&{height:number};
obj3={name:"zhangsan",age:18,height:180}//都得有
let a:any=1
let n:unknown;
n="10";
n=[10];
n=1;
// n.toFixed(2)//报错，除非上面写number

if(typeof(n)==="number"){
    n.toFixed(2);
}