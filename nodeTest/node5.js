
// 测试post请求
const http = require('http');
const qs = require('querystring');
http.createServer(function(req,res){
 
    let da = ''; //存储数据，不能接受文件图片等二进制数据
    //数据分段到达
    req.on('data',function(data){
        da += data;
    });
    //数据全部到达，结束
    req.on('end',function(){
        let red = qs.parse(da)
        console.log(red);
        res.write('red')
        res.end();
    });
}).listen(8888)