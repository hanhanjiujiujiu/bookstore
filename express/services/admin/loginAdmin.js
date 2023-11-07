const db = require('../../config/dbconfig'); //引入数据库封装模块

const LoginAdminService = {
  // 管理员登录 
  Login: async (username, password) => {
    const sql = `SELECT * FROM user WHERE username = ? AND password = ?`;
    const data = await db.query(sql, [username, password]);
    return data;
  },

  // 新增管理员
  add: async (username, password, phone) => {
    const sql = `INSERT INTO user (username, password,phone) VALUES (?, ?,?)`;
    const data = await db.query(sql, [username, password, phone]);
    return data;
  },

  // 管理员列表
  List: async () => {
    const sql = 'select * from user';
    const data = await db.query(sql, '');
    return data;
  },
};

module.exports = LoginAdminService;
