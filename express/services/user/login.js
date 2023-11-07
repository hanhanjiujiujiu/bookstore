//userService
const db = require('../../config/dbconfig'); //引入数据库封装模块

const LoginService = {
  // 用户登录 
  Login: async (username, password) => {
    const sql = `SELECT * FROM user WHERE username = ? AND password = ?`;
    const data = await db.query(sql, [username, password]);
    return data;
  },


  // 用户注册
  Register: async (username, password) => {
    if (!username || !password) {
      const data = {
        code: 0,
        msg: "用户名与密码为必传参数...",
      }
      return data
    }

    try {
      const sqlCheck = `SELECT COUNT(*) as count FROM user WHERE username = ?`;
      const countResult = await db.query(sqlCheck, [username]);

      if (countResult[0].count >= 1) {
        // 如果有相同用户名，则注册失败，用户名重复
        return { code: 0, msg: "注册失败，用户名重复" };
      } else {
        const sqlInsert = "INSERT INTO user (username, password) VALUES (?, ?)";
        const insertResult = await db.query(sqlInsert, [username, password]);

        if (insertResult.affectedRows === 1) {
          return { code: 1, msg: "注册成功" };
        } else {
          return { code: 0, msg: "注册失败" };
        }
      }
    } catch (error) {
      throw error; // 抛出错误以便在调用处处理
    }
  }
};

module.exports = LoginService;
