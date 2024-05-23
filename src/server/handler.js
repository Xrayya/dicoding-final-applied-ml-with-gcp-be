const predictClassification = require("../services/inferenceService");
const storeData = require("../services/storeData");
const getData = require("../services/getData");
const crypto = require("crypto");

async function postPredictHandler(request, h) {
  const { image } = request.payload;
  const { model } = request.server.app;

  const { label, suggestion } = await predictClassification(model, image);
  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();

  const data = {
    id: id,
    result: label,
    suggestion: suggestion,
    createdAt: createdAt,
  };

  await storeData(id, data);

  const response = h.response({
    status: "success",
    message: "Model is predicted successfully",
    data,
  });
  response.code(201);
  return response;
}

async function getHistoriesHandler(_request, h) {
  const histories = await getData();
  console.log(histories)

  const response = h.response({
    status: "success",
    data: histories,
  });
  response.code(200);
  return response;
}

module.exports = { postPredictHandler, getHistoriesHandler };
