
const query = require('querystring')
module.exports = function(req,res,next){
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

    //module.exports = function(){  return function(){} }这个时候外面调用(server5.js)时就变成test()
}