"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 枚举不是类型，列举数据
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["success"] = 200] = "success";
    StatusCode[StatusCode["paramsError"] = 400] = "paramsError";
    StatusCode[StatusCode["serverError"] = 500] = "serverError";
})(StatusCode || (StatusCode = {}));
let code = 200;
if (code === StatusCode.success) {
    console.log("成功");
}
else if (code = StatusCode.paramsError) {
    console.log('失败，参数问题');
}
else if (code = StatusCode.serverError) {
    console.log("失败，服务器问题");
}
