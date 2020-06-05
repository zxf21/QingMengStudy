//操作文件  fs模块  同步和异步
//node 事件循环异步回调 异步编程（高并发） process 2M 5000 10G
var fs = require('fs');
var data = fs.readFileSync('./demo.txt');
console.log(data);
console.log('end');
