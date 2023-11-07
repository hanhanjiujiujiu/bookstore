var express = require('express');
var router = express.Router();

const ListController = require('../../controllers/user/ListController');


// 获取列表
router.get('/list', ListController.getList);


// 增加列表
router.post('/list', ListController.addList);


module.exports = router;
