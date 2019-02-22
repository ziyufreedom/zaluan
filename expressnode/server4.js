//自己写个中间件
const express = require('express');
const query = require('querystring')
let server = express();

server.listen(8888);

//server.use可以不写前面的路径参数，直接写一个function，写路径就是只有访问当前路径时，进入function，如果不写路径就是所有路径都进入function

//一个小的处理post数据的中间件
server.use(function(req,res,next){
    //如果在这里设置了一个参数req.a = 12
    let da = '';
    //分段得到post数据
    req.on('data',function(data){
        da += data;
    });
    //所有数据都得到完毕，把他赋值给body，这样下面就可以得到req.body属性了
    req.on('end',function(){
        // req.body = da; //user=sffs&pass=1242142&descript=vsdfsdfdsfsfs
        req.body = query.parse(da); //{ user: 'fsf', pass: '123124124', descript: 'gsgsgdsgs' }
        next();
    })
})

server.use('/',function(req){
    console.log(req.body)
    //那么在这里可以得到req.a
})