const axios = require("axios");
const helper = require("../../helper");

module.exports.searchWord = (text) => {
  return axios
    .get(`http://${helper.getUrl()}/search?word=${text}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};

module.exports.getWord = (text) => {
  return axios
    .get(`http://${helper.getUrl()}/get-word?word=${text}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return {};
    });
};
