const express = require("serverless-express/express");
const handler = require("serverless-express/handler");
const router = express.Router();
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./resources/serverless-swagger.json");
const fs = require("fs");

// app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerDocument));
app.use("/api", async (_req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  fs.createReadStream("./resources/serverless-swagger.json").pipe(res);
});
exports.api = handler(app);
