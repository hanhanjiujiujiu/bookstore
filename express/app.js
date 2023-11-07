// 引入依赖模块
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var Token = require('./utils/Token');
var corsMiddleware = require('./utils/cors');

var loginAdminRouter = require('./routes/admin/loginAdmin');
var loginRouter = require('./routes/user/loginuser');
var listRouter = require('./routes/user/list');

var app = express();

// 设置视图引擎和模板文件夹路径
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 使用日志中间件
app.use(logger('dev'));

// 解析 post 请求体
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 使用 cookie 解析器
app.use(cookieParser());

// 设置public为静态资源文件夹
app.use(express.static(path.join(__dirname, 'public')));

// 配置 CORS 中间件,解决跨域问题
app.use(corsMiddleware);

// 使用 Token 检测中间件,判断请求头中是否携带token
app.use(Token.checkToken);

// 使用路由中间件
app.use('/admin', loginAdminRouter);
app.use('/', loginRouter);
app.use('/', listRouter);


// 捕获 404 并转发到错误处理程序
app.use(function (req, res, next) {
  next(createError(404));
});

// 错误处理程序
app.use(function (err, req, res, next) {
  // 设置本地变量，仅在开发环境提供错误信息
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // 渲染错误页面
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
