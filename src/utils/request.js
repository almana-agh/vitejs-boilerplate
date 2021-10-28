import { extend } from "umi-request";
import { message } from "antd";
import { BASE_URL } from "./constants";
// import { clearStorage } from "./localStorage";

const codeMessage = {
  200: "The server successfully returned the requested data.",
  201: "New or modified data is successful.",
  202: "A request has entered the background queue (asynchronous task).",
  204: "Data deleted successfully.",
  400: "There was an error in the request sent, and the server did not create or modify data.",
  401: "The user does not have permission (the token, username, password is wrong).",
  403: "The user is authorized, but access is forbidden.",
  404: "The request sent was for a record that did not exist, and the server did not operate.",
  406: "The requested format is not available.",
  410: "The requested resource is permanently deleted and will no longer be available.",
  422: "When creating an object, a validation error occurred.",
  500: "An error occurred in the server, please check the server.",
  502: "Gateway error.",
  503: "The service is unavailable, the server is temporarily overloaded or maintained.",
  504: "The gateway timed out.",
};

const errorHandler = (error) => {
  const { response } = error;

  // todo: throw server errors (low priority)

  if (response && response.status) {
    const { status, url, statusText } = response;
    if (status === 401) {
      // message.error(`Authentication failed!`);
      clearStorage();
      setTimeout(() => {
        if (!window.location.href.includes("login")) {
          //   history.replace({
          //     pathname: "/auth/login",
          //   });
        }
      }, 1000);
    }
    message.error(`${statusText}`);

    // message.error(`Request error ${status}: ${url}`);
  } else if (!response) {
    message.error("Your network is abnormal and cannot connect to the server");
  }
  return response;
};

const request = extend({
  // todo: pull out this baseurl in .env file.
  prefix: `${BASE_URL}`,
  errorHandler,
  // credentials: 'include',
});

request.use(async (ctx, next) => {
  const idleTime = localStorage.getItem("idleTime");
  if (idleTime) {
    const timeDifferenceInMinutes =
      (new Date().getTime() - new Date(idleTime).getTime()) / 1000 / 60;
    if (
      sessionStorage.getItem("token") &&
      Math.abs(Math.round(timeDifferenceInMinutes)) > 60
    ) {
      //   message.error("Session Expired");
      console.error("Session Expired");
      clearStorage();
      //   history.push("/auth/login");
    } else {
      localStorage.setItem("idleTime", new Date());
      await next();
    }
  } else {
    localStorage.setItem("idleTime", new Date());
    await next();
  }
});
export default request;
