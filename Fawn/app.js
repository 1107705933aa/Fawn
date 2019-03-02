
//导入模块
global.express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const ejs = require('ejs');
const app = express();
const fs = require("fs");
global.multer = require('multer');

//解决跨域
//var allowCrossDomain = function(req, res, next) {
//  res.header('Access-Control-Allow-Origin', '*');
//  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//  res.header('Access-Control-Allow-Headers', 'Content-Type');
//  res.header('Access-Control-Allow-Credentials','true');
//  next();
//};
//app.use(allowCrossDomain);



//注册html模板引擎
app.engine('html',ejs.renderFile);
//指定模板位置
app.set('views', __dirname + '/views');
//将模板引擎换成html
app.set('view engine', 'html');


//app.use(function(req,res,next){
//	console.log(req.url,111111)
//	
//	next();
//})

//客户端的静态资源
app.use('/css',express.static('css'));
app.use('/js',express.static('js'));
app.use('/img',express.static('img'));
app.use('/layui',express.static('layui'));

//启用中间件  接收post数据
app.use(bodyParser.urlencoded({
    extended: true
})); //form表单数据

//将传过来的对象转化为字符串
app.use(bodyParser.json()); //form表单数据

//-----------------------------------
//登录路由
app.use('/login', require('./router/log'));
app.use('/loginn', require('./router/logn'));
app.use('/registerin', require('./router/register'));


//主菜单路由
app.use('/homein', require('./router/home'));
app.use('/orderin', require('./router/order'));
app.use('/myin', require('./router/my'));

//订单成功路由
app.use('/orderin', require('./router/order'));
app.use('/order_s', require('./router/order_s'));
app.use('/payin', require('./router/pay'));

//food路由
app.use('/breakfastin', require('./router/breakfast'));
app.use('/order_successin', require('./router/order_success'));
app.use('/yudingin', require('./router/yuding'));
app.use('/againin', require('./router/again'));
app.use('/lunchin', require('./router/lunch'));
app.use('/dinnerin', require('./router/dinner'));
app.use('/drinkin', require('./router/drink'));
app.use('/fruitsin', require('./router/fruits'));
app.use('/dessertin', require('./router/dessert'));
app.use('/night_snackin', require('./router/night_snack'));
app.use('/snackin', require('./router/snack'));

//购物车路由
app.use('/vehiclein', require('./router/vehicle'));

//订桌路由
app.use('/tablein', require('./router/table'));

//评价路由
app.use('/freviewin', require('./router/freview'));
app.use('/reviewin', require('./router/review'));

//专题路由
app.use('/specialin', require('./router/special'));

//my内容
app.use('/memberin', require('./router/member'));
app.use('/helpin', require('./router/help'));
app.use('/walletin', require('./router/wallet'));
app.use('/backin', require('./router/back'));

//------------------------------------

// 数据库连接   global全局
global.mydb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'fawn',
    port:3306,
    multipleStatements: true
});
mydb.connect();

//静态资源托管上传的  图片
app.use('/uploads', express.static(__dirname + '/uploads'));

app.listen(8888,()=>{
	console.log('服务器启动中...')
})
