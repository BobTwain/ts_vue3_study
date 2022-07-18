export { }
interface ResItf{
    code:number;
    data:{a:number,b:number}[];
    message:string
}
let p:Promise<ResItf> = new Promise((resolve, reject) => {
    resolve({
        code: 0,
        data: [{a:1,b:2},{a:11,b:22}],
        message: ""
    })
})
p.then(
    res=>{
        res.code==0?res.data.map(item=>item.a):console.error("error")
    }
)