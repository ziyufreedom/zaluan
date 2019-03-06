const express = require('express');
const cookiepar = require('cookie-parser'); //用来读取cookie的,还能给cookie签名
const cookieses = require('cookie-session'); 

let server = express();

server.use(cookiepar())
//session并不能单独存在，是基于cookie的，是要用cookie存sessionid然后用sessionid查找存在服务器或者哪里的数据
//先使用cookie-parser再使用cookie-session，因为要先解析cookie才能用里面的session_id
//不然cookie解析不出来，下面就没有意义
server.use(cookieses({
    keys:['22','hh','nishicai'] //数组越长，越安全，keys是一个数组的话破解时间更长，会循环使用这个数组里的秘钥给session加密
    //还可以有name:'sess'属性，改变cookie里面key的名字，默认是session
    //maxAge过期时间毫秒单位，时间越短安全性越高，但用户越不方便
}))
server.use('/',function(req,res){
    //req是浏览器给我的，res是我给浏览器的
    //想要读取req.session必须要一个keys这个keys是用来加密的，这个keys属性是cookie-session里的
    console.log(req.session);
    //记录访问的次数
    if(req.session['cont'] === null){
        req.session['cont'] = 1;
    }else{
        req.session['cont']++;
    }
    //删除session
    // delete req.session['cont']
    res.send('ok')
})
server.listen(8888);