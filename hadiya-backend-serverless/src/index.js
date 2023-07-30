const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const { ProductAPI } = require('./api/product.api');
const { handleErrors } = require('./middlewares/error.handler.middleware.js');

const app = express();

app.use(cors())
app.use(express.json());

app.get('/', (_req, res, _next) => {
  res.status(200).send({
    message: 'Products service is up and running'
  });
});

ProductAPI(app);

app.use(handleErrors);
exports.handler = serverless(app);