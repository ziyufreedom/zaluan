const express = require('express');
const bodyPar = require('body-parser');
let server = express();

server.listen(8888);

//server.use()方法可以使用多次
server.use(bodyPar.urlencoded({}));

server.use('/',function(req,res,next){
    //req.query  get数据
    //req.body  post数据  但是需要有中间环节先加工一次，如果不加工，就会输出undefined
    console.log(req.body) //post
    //next() 用来调用下一个use方法，如果你想继续下一个use就用，不想就不用
})
//get 简单 只需要req.query就能得到
//post 需要中间件 要两步  1.server.use(bodyPar.urlencoded({}));
// 2.req.body 得到数据
// server.use(bodyPar.urlencoded({
    // extended:false, //扩展模式,基本没什么用
    // limit:, //大小限制，默认100k 2*1024(2k)*1024(2M)
// }));