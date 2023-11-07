var express = require('express');
var router = express.Router();

const LoginAdminController = require('../../controllers/admin/LoginAdminController');

// 管理员登录（不为管理员添加注册权限）
router.post('/loginadmin', LoginAdminController.login);


module.exports = router;
