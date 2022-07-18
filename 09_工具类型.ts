export{}
interface PItf{
    name:string;
    age:number
    height?:number
}

type Partial<T> = { [P in keyof T]?: T[P] | undefined; }
/*{
    keyof T name|age
    {
        name?:string|undefined
        age?:number|undefined
    }


    for key in obj
}*/

let obj:Partial<PItf>={
    name:"111"
}
// type Required<T> = { [P in keyof T]-?: T[P]; }
// -去除问号
let obj2:Required<PItf>={
    name:"111",
    age:14,
    height:111
}