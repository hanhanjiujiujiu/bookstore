const jwt = require('jsonwebtoken');
const sendResponse = require('./sendResponse');

const tokenKey = '216546464'; //token密匙

/**
 * 登录成功后返回token函数,所有参数必传
 * @param {String} user - 第一个参数,数据库中查取成功的用户名和密码
 * @param {String} res - 第二个参数,必传参数
 * @param {username} username - 第三个参数,数据库中的用户名
 * @param {password} password - 第二个参数,数据库中的密码
 */
const sendLoginResponse = (users, res, username, password) => {
  const user = users[0]; // 因为查询返回的是数组，我们取第一个元素

  const tokenObj = {
    username: user.username,
    password: user.password
  };

  const token = jwt.sign(tokenObj, tokenKey, { expiresIn: '1h' });

  if (user && user.username === username && user.password === password) {
    sendResponse(res, '登录成功', 200, '', token);
  } else {
    sendResponse(res, '用户名或密码错误', 401, '');
  }
};

/**
 * token中间件，忽略login
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const checkToken = (req, res, next) => {
  if (req.path === '/login') {
    next(); // 如果是登录路由，直接通过
  } else {
    const authHeader = req.headers.authorization;

    if (authHeader) {
      const token = authHeader.substring(7); // 去除'Bearer '部分，得到实际的token
      verifyToken(token);
      next();
    } else {
      res.status(401).json({ message: 'token无效或过期' });
    }
  }
};

/**
 * 解析token函数
 * @param {*} token
 * @returns
 */
const verifyToken = token => {
  try {
    const decoded = jwt.verify(token, tokenKey);
    return decoded;
  } catch (error) {
    // token验证失败
    return null;
  }
};

module.exports = { checkToken, sendLoginResponse };
