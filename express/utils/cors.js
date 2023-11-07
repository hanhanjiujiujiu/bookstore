const cors = require('cors');

/**
 * cors参数
 * @param {*} origin                        -允许来自特定源的请求
 * @param {String} methods                  -允许的请求方法
 * @param {Number} optionsSuccessStatus     -预检请求成功的状态码
 * @param {String} exposedHeaders           -允许客户端访问的响应头
 * @param {String} allowedHeaders           -允许的请求头
 * @param {Boolean} credentials             -允许包含凭证信息的请求（如 cookies,token）
 */
const corsOptions = {
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
  optionsSuccessStatus: 200,
  exposedHeaders: 'Content-Range,X-Content-Range',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;
