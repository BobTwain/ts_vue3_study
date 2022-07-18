export{}

function fn1<T>(n:T):T{
    return n
}

console.log('fn1(1)',fn1<boolean>(true))


type objType<K,Q>={name:K,getName:()=>Q}

let obj:objType<string,number>={
    name:"",
    getName(){
        return 1
    }
}

interface IPerson<K,V>{
    name:K
    getName:()=>V
}

type StrorNum = string|number
let obj2:IPerson<StrorNum,number>={
    name:"2",
    getName(){
        return 2
    }
}