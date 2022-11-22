require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan =require('morgan');

const app = express();
const routes = require('./routes');
const { globalErrorHandler } = require('./utils/error');
const { sequelize, client } = require('./models');
const { logger } = require('./utils/winston');
const port = process.env.SERVER_PORT

app.use(cors());
app.use(morgan('short', {stream : logger.stream}));
app.use(express.json());
app.use(routes);
// 에러 핸들링을 위해 routes 실행 코드 밑에 작성
app.use(globalErrorHandler);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const start = async () => {
  // Mysql 연결
  // force: true 서버 실행시마다 테이블 재생성. 테이블을 잘못 만든 경우에 true 설정.
  await sequelize.sync({ force: false })
    .then(() => {
      console.log('Database has been connected');
    })
    .catch((err) => {
      console.log(err)
    })

  // Redis 연결
  await client.connect()
    .then(() => {
      console.log('Redis is Ready');
    })
    .catch((err) => {
      console.log(err)
    })

  // 서버 시작
  try {
    app.listen(port, () => logger.info(`Server is listening on ${port}`));
  } catch (err) {
    console.error(err);
  }
}

start();