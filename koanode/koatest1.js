
const koa = require('koa');
const server = new koa();
server.use(async (ctx,next)=>{
    await next();//等待next执行完成
    let rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`)
})

server.use(async ctx=>{
    ctx.body = 'Hello World!'
})
server.listen(8888);