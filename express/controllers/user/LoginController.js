const Token = require('../../utils/Token');
const LoginService = require('../../services/user/login');

const LoginController = {
  // 用户登录
  login: async (req, res) => {
    try {
      const { username, password } = req.body.values;
      const data = await LoginService.Login(username, password);
      Token.sendLoginResponse(data, res, username, password);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  },
  // 用户登录
  register: async (req, res) => {
    try {
      const { username, password } = req.body.values;
      const data = await LoginService.Register(username, password);
      res.send(data);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  },
};

module.exports = LoginController;
