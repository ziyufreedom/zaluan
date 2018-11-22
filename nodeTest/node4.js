
//测试前端get请求
const http = require('http');
const qs = require('querystring');
const httpurl = require('url');

http.createServer(function(req,res){
    console.log(httpurl.parse(req.url))
    //第二个参数为true时，就会把地址的参数解析为一个对象放在query属性中
    console.log(httpurl.parse(req.url,true))
    //req来获取前端请求数据
    if(req.url.indexOf('?')!== -1){
        let par = req.url.split('?')[1];
        let param = qs.parse(par);
        // console.log(param);
        res.write('param');
    }
    res.end();
}).listen(8888)