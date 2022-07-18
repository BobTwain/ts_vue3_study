export{}
type objType={
    myname:string;
    Person:(m:string)=>void
}
let obj:objType={
    myname:"zhangsan",
    Person:():void=>{}
}
function Person(this:Window|objType,name:string){
    this.myname=name
}

obj.Person=Person
obj.Person("xxx")

window.Person=Person
window.Person("xxx")