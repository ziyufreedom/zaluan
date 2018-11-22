
// http模块与js模块结合判断url等
const fs = require('fs');
const http = require('http');

http.createServer(function(req,res){
    //req.url是浏览器访问的地址，我们把所有能访问的文件都放在www文件夹中，这样每次浏览器访问时直接找www文件夹中的对应的文件即可
    let filename = 'www'+req.url;
    fs.readFile(filename,function(err,data){
        if(err){
            res.write('404');
        }else{
            //用write打印数据的时候可以直接用二进制的data，浏览器会自动转换
            res.write(data);
        }
        res.end();
    })
}).listen(8888) //一定要记得listen！！！要监听