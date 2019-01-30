

const express = require('express');
let server = express();
//当用户请求根目录时
server.use('/',function(req,res){
    //这里面的req和res和原来的不一样，express对它们进行了封装，并没有删除原来的方法，
    //只是在其上添加了其他方法
    //express中的send方法和原来的res.write方法差不多
    res.send('这是根目录');
    //也需要一个end方法
    res.end();
});
server.listen(8888)