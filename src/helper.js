const serverUrl = "192.168.100.12:3000";

module.exports.getUrl = () => {
  return serverUrl;
};

module.exports.capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

