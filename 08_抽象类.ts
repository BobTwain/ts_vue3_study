export{}
abstract class  Person {
    abstract name:string;
    abstract getName():string;
    getAge(){
        return 11
    }
}


class Male extends Person{
    name:string="";
    getName(){
        return this.name;
    };
}


let a=new Male()
// let p= new Person()抽象类不能被实例化
console.log('a.getAge',a.getAge())
// 抽象类中普通方法可以直接继承

interface PerItf{
    name:string;
    age:number;
    getName:()=>string
}

class M implements PerItf{
    name:string=""
    age:number=14;
    getName(){
        return this.name
    }
}


let m=new M