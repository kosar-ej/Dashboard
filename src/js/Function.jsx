import axios from "axios";
import { message } from "antd";

//define my request function to request with axios
export async function myRequest(
  config = {},
  success = undefined,
  failed = undefined
) {
  let res = await axios
    .request(config)
    .then(function (response) {
      if (typeof success == "function") {
        success(response);
      }
    })
    .catch(function (error) {
      let validationMessage = "خطا در برقراری ارتباط با سرور";
      let validationMessageData = "";

      if (typeof failed == "function") {
        failed(error);
      }

      if (error.response && error.response.status === 400) {
        console.log(error);
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          validationMessage = error.response.data.message;
          message.error(validationMessage);
        }
        if (error.response.data.messages && error.response.data.messages.data) {
          validationMessageData = error.response.data.messages.data;
        }
      }
      if (error.response && error.response.status === 403) {
        let validationMessage = "";
        let validationMessageData = "";

        if (error.response.message) {
          validationMessage = error.response.message;
          validationMessageData = error.response.data.messages.data;
        }
      }
      if (error.response && error.response.status === 500) {
      }
      switch (error.message) {
        case "timeout of 15000ms exceeded":
          return message.info("لطفا مجددا تلاش کنید.");
        case "Request failed with status code 402":
          return message.info("لطفا مجددا تلاش کنید.");
        default:
          return <div></div>;
      }
    })
    .then(function () {});
}
