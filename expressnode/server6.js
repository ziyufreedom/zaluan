const express = require('express');
const cookiepar = require('cookie-parser'); //用来读取cookie的,还能给cookie签名

let server = express();

server.use(cookiepar('caicai'))
server.use(function(req,res){

    //req.secret = 'caicai'; //签名signed用的密钥，可以没有，因为上面server.use(cookiepar('caicai'))的时候会默认给req.secret赋值
    //发送cookie 通过res，这里可以用signed属性，此属性不能加密，但能防止篡改
    res.cookie('name','haha',{path:'/',maxAge:1000*60,signed:true});
    //读取cookie时，如果上面signed:true，下面得到的cookies就是签名后的值了，如果想得到原值，
    //需要在server.use(cookiepar())中加入参数，加入你设置的req.secret，如果没有设置，也要随便写一个，才能得到原来的值
    //但是req.cookies得到的是没有签名的cookie，req.signedCookies才能得到签过名的cookie
    //读取cookie 通过req 因为上面使用了cookiepar()这里才能拿到
    console.log('签名cookie：' , req.signedCookies);
    console.log('无签名cookie：' , req.cookies);
    //删除cookie cookie是浏览器端的，所以要用res的方法来删除，如果是session的话就直接delete就行了，因为session是我们服务器这边的所以不用res
    // res.clearCookie('要删除的cookie的key')
    res.send('ok')
})
server.listen(8888);