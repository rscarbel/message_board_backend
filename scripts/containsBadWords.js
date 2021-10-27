const BadWords = require("./BadWords");

const containsBadWords = (reqBody) => {
  const formInputValues = Object.values(reqBody);
  return formInputValues.some(item => item.match(BadWords))
}

module.exports = containsBadWords