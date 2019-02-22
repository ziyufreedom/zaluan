
const express = require('express');
const exstatic = require('express-static')
let server = express();
let userlist = {
    'caicai':'123456',
    'hehe':'234567'
}
//express-static是一个函数,用来处理静态文件。www是项目目录
server.get('/login',function(req,res){
    //express新增的query得到请求的参数
    let user = req.query['user'];
    let pass = req.query['pass'];
    if(!userlist[user]){
        res.send({ok:false,msg:'用户不存在'});
    }else if(userlist[user] !== pass){
        res.send({ok:false,msg:'密码错误'})
    }else{
        res.send({ok:true,msg:'登录成功'}) 
    }
    res.end();
})
server.use(exstatic('./www'));
server.listen(8888);