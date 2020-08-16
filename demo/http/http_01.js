//引入http模块
const http = require('http');
//创建服务器
const app = http.createServer();
//设置端口 端口的长度最大值：65535
app.listen(8080);