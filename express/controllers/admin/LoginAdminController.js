const Token = require('../../utils/Token');
const sendResponse = require('../../utils/sendResponse');
const LoginAdminService = require('../../services/admin/loginAdmin');

const LoginAdminController = {
  // 管理员登录
  login: async (req, res) => {
    try {
      const { username, password } = req.body.values;
      const data = await LoginAdminService.Login(username, password);
      Token.sendLoginResponse(data, res, username, password);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  },
  // 新增管理员
  add: async (req, res) => {
    const { name, post, phone } = req.body.values;
    try {
      await LoginAdminService.add(name, post, phone);
      sendResponse(res, '添加管理员成功', 200);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },
  // 管理员列表
  getList: async (req, res) => {
    try {
      const list = await LoginAdminService.List();
      sendResponse(res, '成功', 200, list);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },
};

module.exports = LoginAdminController;
