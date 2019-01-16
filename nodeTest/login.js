
const http = require('http');
const qs = require('querystring');
const fs = require('fs');
const urlLib = require('url');
let users = {};
let server = http.createServer(function(req,res){
    let str = '';
    req.on('data',function(dat){
        str += dat;
    });
    req.on('end',function(){
        let obj = urlLib.parse(req.url,true);
        let url = obj.pathname;
        let GET = obj.query;
        let POST = qs.parse(str);
        if(url === '/user'){ //接口
            switch(GET.act){
                case 'reg': //注册
                    //判断用户是否存在
                    if(users[GET.user]){
                        res.write('{"ok":false,"msg":"此用户已存在！"}');
                    }else{ //插入users
                        users[GET.user] = GET.pass;
                        console.log(users)
                        res.write('{"ok":true,"msg":"用户注册成功！"}');
                    }
                    break;
                case 'login': //登录
                    if(!users[GET.user]){ //判断是否存在此用户
                        res.write('{"ok":false,"msg":"此用户不存在！"}');
                    }else if(users[GET.user]!=GET.pass){ //判断密码是否输入正确
                        res.write('{"ok":false,"msg":"用户名或密码不正确！"}');
                    }else{
                        res.write('{"ok":true,"msg":"用户登录成功！"}');
                    }
                    break;
                default:
                    res.write('not found '+url);
                    break;
            }
            res.end();
        }else{  //文件
            let filename = './www'+url;
            fs.readFile(filename,function(err,da){
                if(err){
                    res.write(err+' 404');
                }else{
                    res.write(da);
                }
                res.end();
            })
        }
    });
});
server.listen(8888);