//userService
const db = require('../../config/dbconfig'); //引入数据库封装模块

const ListService = {
  List: async () => {
    const sql = 'select * from stu';
    const data = await db.query(sql, '');
    return data;
  },
  add: async (name, sex) => {
    const sql = `INSERT INTO stu (name, sex) VALUES (?, ?)`;
    const data = await db.query(sql, [name, sex]);
    return data;
  }
};

module.exports = ListService;
