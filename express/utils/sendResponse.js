// responseUtil.js

const sendResponse = (res, msg, code, data, token) => {
  try {
    const responseObject = {
      msg: msg,
      code: code,
      data: data
    };

    if (token) {
      responseObject.token = token;
    }

    res.json(responseObject);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = sendResponse;
