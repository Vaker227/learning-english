const axios = require("axios");
const helper = require("../../helper");

module.exports.paymentRequest = (
  redirectUrl,
  amount = 1000,
  orderInfo = "order info"
) => {
  return axios
    .post(`${helper.getUrl()}/create-payment`, {
      redirectUrl,
      amount,
      orderInfo,
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
