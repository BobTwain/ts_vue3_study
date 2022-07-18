export{}
class Person{
    myname:string;
    constructor(name:string){
        this.myname=name
    }

    getmyname(){
        console.log('this',this)

        return this.myname
    }
    
}

let p=new Person("张三")
let q=new Person("李四")
console.log('p',p.myname)
console.log('q',q.getmyname())
console.log(this)