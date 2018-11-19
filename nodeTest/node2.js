
//内置模块fs读取文件和写入文件函数
const fs = require('fs');

fs.readFile('file/test.txt',function(err,data){
    if(err){
        console.log('读取失败')
    }else{
        //得到的原始数据是buffer二进制的数据，用toString来转成字符串
        console.log(data.toString())
    }
})
fs.writeFile('file/test1.txt','i am a bad people.',function(err){
    if(err){console.log('写入失败')}
})