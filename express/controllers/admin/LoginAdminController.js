const Token = require('../../utils/Token');
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
};

module.exports = LoginAdminController;
