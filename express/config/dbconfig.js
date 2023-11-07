const mysql = require('mysql2'); // 导入 mysql2 包

const config = require('./config.json'); // 导入数据库连接配置信息

// 创建数据库连接池
let pool = mysql.createPool({
  host: config.host, // 数据库主机名
  user: config.user, // 数据库用户名
  port: config.port, // 数据库端口号
  password: config.password, // 数据库密码
  database: config.database, // 数据库名
  waitForConnections: config.waitForConnections, // 等待连接的最大数量
  connectionLimit: config.connectionLimit, // 连接池最大连接数量
  queueLimit: config.queueLimit // 队列最大数量
});

// 获取数据库连接的函数
let connect = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      // 从连接池中获取连接
      !err ? resolve(connection) : reject(err); // 若成功获取连接，返回连接对象，否则返回错误
    });
  });
};

// 需要传入sql语句和参数
const query = (sql, params) => {
  return new Promise(async (resolve, reject) => {
    let connection = await connect(); // 获取数据库连接
    connection.query(sql, params, (err, results, fields) => {
      // 执行 SQL 查询语句
      !err ? resolve(results) : reject(err); // 若查询成功，返回查询结果，否则返回错误
      connection.release(); // 释放连接
    });
  });
};

// 导出 connect 和 query 函数
module.exports = {
  connect,
  query
};
