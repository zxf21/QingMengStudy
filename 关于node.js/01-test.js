// console.log('Hello world')
var http = require('http'); //require把原生模块加载 同事文件加载-->object

http.createServer(function (req, res) { //chrome请求  req  chrome发回相应 res
  //http://localhost:3000  数据（包头、包体） 包头 Status Code Content-type200
  // res.writeHead(200, {'Content-type': 'text/plain'});
  res.writeHead(200, {
    'Content-type': 'text/html'
  });
  res.end('<h1>Hello World</h1>');
}).listen(3000);

console.log('server start port 3000');


//mime 返回值数据浏览器渲染方式 取决于Content-type后面的值 text-plain
//<meta htt-equiv='Content-type' content='text/html;charset=utf-8'>
//中文浏览器 GBK GB8030 GB2312 UTF-7 浏览器解码
//ASCII  Unicode UTF-8 文件编码  Mysql Monogdb  数据库解码  三码一致  UTF-8


//http js buffer stream