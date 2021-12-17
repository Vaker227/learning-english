const axios = require("axios");
const helper = require("../../helper");
const controller = new AbortController();

module.exports.searchWord = (text) => {
  let connectionTimeout = setTimeout(() => {
    controller.abort();
  }, 3000);
  return axios
    .get(`${helper.getUrl()}/search?word=${text}`, {
      signal: controller.signal,
    })
    .then((response) => {
      clearTimeout(connectionTimeout);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};

module.exports.getWord = (text) => {
  return axios
    .get(`${helper.getUrl()}/get-word?word=${text}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return {};
    });
};
