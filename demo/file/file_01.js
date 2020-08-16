//文件读取的操作
const fs = require('fs');
//6、文件追加写入：如果文件没有会创建文件,若文件存在在对录入内容进行追加写入
// fs.appendFile("2.txt", "测试内容", (err) => {
//     if(err) throw err;
//     console.log("数据写入成功！");
// });

/* 7、文件读取 */
// let s = fs.readFileSync("2.txt");
// console.log(s.toString());
// console.log("文件读取结束");

/* 8、文件删除
 * 根据文件操作的规范可以进行路径的写入删除
 * unlink(path, callback) / unlinkSync(path) */
// fs.unlink("2.txt", (err) => {
//     if(err) throw err;
//     console.log("文件删除成功！");
// });
// console.log("删除结束");

/*
 * 监测文件是否存在
 * existsSync(path) */
// let s = fs.existsSync("2.txt")
// console.log(s);

