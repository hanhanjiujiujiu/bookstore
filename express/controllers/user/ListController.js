const sendResponse = require('../../utils/sendResponse');
const ListService = require('../../services/user/list');

const ListController = {
  /**
   * 获取列表接口
   * @param {*} req
   * @param {*} res
   */
  getList: async (req, res) => {
    try {
      const list = await ListService.List();
      sendResponse(res, '成功', 200, list);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  /**
   * 增加列表接口
   * @param {*} req
   * @param {*} res
   */
  addList: async (req, res) => {
    const { name, post } = req.body.values;
    try {
      await ListService.add(name, post);
      sendResponse(res, '成功', 200);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
};

module.exports = ListController;
