
//引入模块
const fs = require("fs");
//创建可读取的流 : 需要读取的压缩包文件
let readStream = fs.createReadStream("../../public/text.rar");
//读取数据
//事件：一旦读取到数据，自动触发回调函数
//监听数据流，data 是固定的
//初始化变量记录读取的次数
let limit = 0;
readStream.on('data', (chunk) => {
    //chunk 就是获取到的数据，分段的
    limit ++;
})

//当读取文件内容结束以后打印执行的次数
//事件：当读取结束后，自动触发回调函数
readStream.on('end', () => {
    console.log(limit);
});

//文件写入流
// let writeStream = fs.createWriteStream("2.zip");
// //pipe 管道
// rs.pipe(ws);