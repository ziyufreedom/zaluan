
const express = require('express');
const test = require('./testbodyparser')
let server = express();

server.listen(8888);
//使用自己写的中间件
server.use(test)

server.use('/',function(req){
    console.log(req.body)
    //那么在这里可以得到req.a
})