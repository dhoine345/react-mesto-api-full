const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const { errors } = require('celebrate');
const { resCodes, errorMessages } = require('./utils/constants');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const cors = require('./middlewares/cors');
const routes = require('./routes/index')

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

app.use(requestLogger);

app.use(cors);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(routes);

app.use(errorLogger);

app.use(errors());

app.use((err, req, res, next) => {
  const { statusCode = resCodes.INTERNAL_SERVER_ERROR, message } = err;
  res
    .status(statusCode)
    .send({
      message: statusCode === resCodes.INTERVAL_SERVER_ERROR
        ? errorMessages.server
        : message,
    });
  next();
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
