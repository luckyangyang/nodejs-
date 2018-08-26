// 引入express模块
const express = require('express');
// 创建服务器
const app = express();
// 引入路径处理模块
const path = require('path');
// 设置静态页面访问
app.use(express.static(path.join(__dirname,'public','home')));
app.get('/index',(req,res)=>{
    res.send('首页')
})
// 设置监听端口
app.listen(3000,(err)=>{
    if(err==null){
        console.log('服务器启动成功');
    }
})