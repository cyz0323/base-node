//引入http模块
const http = require('http');
//创建服务器
const app = http.createServer();
//设置端口 端口的长度最大值：65535
app.listen(8080);

//访问web服务器
//http://127.0.0.1:8080
//web做出响应
//事件：一旦浏览器请求进行，自动触发回调函数
//request 请求的意思
app.on('request', (req, res) => {
    // console.log("请求进入");
    //做出响应
    res.write("Hello Friend");
    res.end();
})