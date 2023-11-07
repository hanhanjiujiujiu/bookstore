const db = require('../../config/dbconfig'); //引入数据库封装模块

const LoginAdminService = {
  // 管理员登录 
  Login: async (username, password) => {
    const sql = `SELECT * FROM user WHERE username = ? AND password = ?`;
    const data = await db.query(sql, [username, password]);
    return data;
  },
};

module.exports = LoginAdminService;
