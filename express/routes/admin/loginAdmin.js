var express = require('express');
var router = express.Router();

const LoginAdminController = require('../../controllers/admin/LoginAdminController');

// 管理员登录（不为管理员添加注册权限）
router.post('/loginadmin', LoginAdminController.login);

// 新增管理员
router.post('/addadmin', LoginAdminController.add);

// 获取管理员列表
router.get('/getadminlist', LoginAdminController.getList);


module.exports = router;
