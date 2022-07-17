export { }
function fn(a: number, b: number): number {
    return a + b
}
interface FnItf {
    (p: string): number
}
let fnn: FnItf = (p) => {
    return 1
}
type FnType = (p: string) => void
let fn2: FnType = (p: string): void => {

}
fn2("")
// 函数作为对象属性出现时候，接口直接用
interface ObjItf {
    fn: FnItf
}
let obj: ObjItf = {
    fn: (str) => {
        return 1
    }
}
obj.fn("")
type ObjType = { fn: (p: string) => number }
let obj2: ObjType = {
    fn: (str) => {
        return 1
    }
}
obj2.fn("")