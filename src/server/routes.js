const handlers = require("../server/handler");

const routes = [
  {
    path: "/predict",
    method: "POST",
    handler: handlers.postPredictHandler,
    options: {
      payload: {
        allow: "multipart/form-data",
        multipart: true,
      },
    },
  },
  {
    path: "/predict/histories",
    method: "GET",
    handler: handlers.getHistoriesHandler,
  },
];

module.exports = routes;
