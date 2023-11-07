var express = require('express');
var router = express.Router();

const LoginController = require('../../controllers/user/LoginController');

// 用户登录
router.post('/login', LoginController.login);

// 用户注册
router.post('/register', LoginController.register);

module.exports = router;
