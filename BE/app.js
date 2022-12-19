require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan =require('morgan');
const ipgeoblock = require("node-ipgeoblock");

const routes = require('./routes');
const { globalErrorHandler } = require('./utils/error');
const { logger } = require('./utils/winston');

const createApp = () => {
  const app = express();
  app.use(ipgeoblock({
    geolite2: "./GeoLite2-Country.mmdb",
    blockedCountries: [ "IN" ]
  }));
  app.use(cors());
  app.use(morgan('combined', {stream : logger.stream}));
  app.use(express.json());
  app.use(routes);
  // 에러 핸들링을 위해 routes 실행 코드 밑에 작성
  app.use(globalErrorHandler);
  
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  return app;
} 

module.exports = { createApp }

