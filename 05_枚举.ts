export{}
// 枚举不是类型，列举数据

enum StatusCode{
  success=200,
  paramsError=400,
  serverError=500
}

let code:string|number=200
if(code===StatusCode.success){
    console.log("成功")
}else if(code=StatusCode.paramsError){
    console.log('失败，参数问题')
}else if(code=StatusCode.serverError){
    console.log("失败，服务器问题")
}