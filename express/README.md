### 项目运行


```js
npm install  //安装依赖

npm start   //启动项目
```


### 项目目录
```js
- bin
  - www               // 启动服务器的脚本文件
- config
  - config.json       // 用于存储数据库连接信息
  - dbconfig.js       // 一些与数据库相关的配置
- controllers         //包含路由控制器的主要逻辑，用于处理路由请求
  - admin             // 管理员
  - user              // 用户
- public
  - images            //存放前端页面使用的图片文件
  - javascripts       //存放前端页面的JavaScript文件
  - stylesheets       //存放前端页面的CSS样式文件
- routes              //包含了主要的路由控制器，用于处理根路径的请求
  - admin             // 管理员
  - user              // 用户
- services            //包含了一些主要的服务，用于处理数据库连接
  - admin             // 管理员
  - user              // 用户
- views
  - index.ejs         //存放主页的模板文件
  - error.ejs         //存放错误页面的模板文件
- app.js              //Express应用的入口文件，包含了应用的配置和启动代码
- package.json
```


### 数据库配置
```js
  host: 'localhost',        // 数据库所在的主机地址
  user: 'your_username',    // 数据库连接时使用的用户名
  password: 'your_password', // 数据库连接时使用的密码
  database: 'your_database_name', // 要连接的数据库名称
  waitForConnections: true,  // 当连接池中的所有连接都被占用时，新的连接会被加入等待队列，直到有可用的连接为止
  connectionLimit: 10,       // 连接池的最大连接数
  queueLimit: 0             // 等待队列的最大限制
```
