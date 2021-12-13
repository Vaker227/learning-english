const axios = require("axios");
const CryptoES = require("crypto-es").default;
// const partnerCode = "MOMOFFN920211207";
// const accessKey = "deui0DLNek8KGvqu";
// const secretkey = "LaQ9paxkJm92j4ujAHcXqmetc5lbb7uB";
// const publicKey =
//   "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAg4KK06PkKe2X0uqM3qH4o3s1x6w5dN7clab9lXunmsKAEuA5bmndjAzjTMBOBMwq7GGXwVSFx/D40m/dYV9z0k2382eOJZJPlKMqWFdDjTQfr0t1Am7YkndbvYRvN68lJKTQkvjJ/yz1yJt/mGCtwUrWwVrXWxdAp8c5anKlOq28wc/YfIvnDXlj4ioC20TwdGL4tWugm5MvXxhPE7y0sWhGv0n1XOss4qdsAcc/EqIN5q3aJziOceSSJnF2jO8gVR+NSY7VTZucbPemXDZ5HepAa3wbHB0yb2K94w7D03BOnbdVqKtuqk4HDkjZj/qeQDa1nBjNqD59ivSwJIvjV1dW6Qxsqvjrfj5vUapUfzQY7a1SM4asUY7eyjQAG5AxQBUUMwbM+36TbT1o/gPBJHA40fuJIUnn39rrQIDJZv5WrxcAJXEX4erJ4u6FZi5PTBagIgOqget4pQR9RQfA2gNa73K0evat1EgiGRNCKvLa7P+4wCdJ1W4h4vaMTX4v/Edg/Td1u+rlhAOxJnx61L3QO1T/sem+GUtqqpxdb6EzewsqHvjPjIYhhqE8ReHj+raZHMtVtki2u/SpnepSA99xjBPdccjUuq8v9m19sRC+b0HkbzK+bvg+R23gU0Jehlq1Bt2XOxFIXclyVDHuqbhB2HbcFpmhnipIRde5sOsCAwEAAQ==";

// const apiEndPoint = "https://test-payment.momo.vn/pay/app";

var partnerCode = "MOMO";
var accessKey = "F8BBA842ECF85";
var secretkey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
var requestId = partnerCode + new Date().getTime();
var orderId = requestId;
var orderInfo = "pay with MoMo";
var redirectUrl = "exp://192.168.100.12:19000";
var ipnUrl = "14.231.171.40:3000/ipn";
// var ipnUrl = redirectUrl = "https://webhook.site/454e7b77-f177-4ece-8236-ddf1c26ba7f8";
var amount = "1000";
var requestType = "captureWallet";
var extraData = ""; //pass empty value if your merchant does not have stores

var rawSignature =
  "accessKey=" +
  accessKey +
  "&amount=" +
  amount +
  "&extraData=" +
  extraData +
  "&ipnUrl=" +
  ipnUrl +
  "&orderId=" +
  orderId +
  "&orderInfo=" +
  orderInfo +
  "&partnerCode=" +
  partnerCode +
  "&redirectUrl=" +
  redirectUrl +
  "&requestId=" +
  requestId +
  "&requestType=" +
  requestType;

var signature = CryptoES.HmacSHA256(rawSignature, secretkey);

console.log(signature.toString(CryptoES.enc.Hex));

module.exports.paymentRequest = () => {
  return (
    axios
      .post("https://test-payment.momo.vn/v2/gateway/api/create", {
    //   .post("https://test-payment.momo.vn/gw_payment/transactionProcessor", {
        partnerCode: partnerCode,
        accessKey: accessKey,
        requestId: requestId,
        amount: amount,
        orderId: orderId,
        orderInfo: orderInfo,
        redirectUrl: redirectUrl,
        ipnUrl: ipnUrl,
        extraData: extraData,
        requestType: requestType,
        signature: signature.toString(CryptoES.enc.Hex),
        lang: "en",
      })
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err.response.data);
      })
  );
};
