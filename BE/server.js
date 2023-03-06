require('dotenv').config();

const { createApp } = require('./app');
const { sequelize, client } = require('./models');
const { logger } = require('./utils/winston');
const port = process.env.SERVER_PORT;

const start = async () => {
  const app = createApp();

  // Mysql 연결
  // sync() : 존재하지 않는 경우 테이블을 생성합니다. (이미 존재하는 경우 아무 작업도 수행하지 않음)
  // sync({ force: true }) : 서버 실행시마다 테이블 재생성. 테이블을 잘못 만든 경우에 true 설정.
  // sync({ alter: true }) : 데이터베이스에 있는 테이블의 현재 상태 (어떤 열이 있는지, 데이터 유형은 무엇인지 등)를 확인한 다음 모델과 일치하도록 테이블에서 필요한 변경을 수행.
  await sequelize
    .sync({ force: false })
    .then(() => {
      console.log('Database has been connected');
    })
    .catch((err) => {
      console.log(err);
    });

  // Redis 연결
  await client
    .connect()
    .then(() => {
      console.log('Redis is Ready');
    })
    .catch((err) => {
      console.log(err);
    });

  // 서버 시작
  try {
    app.listen(port, () => logger.info(`Server is listening on ${port}`));

    console.log('Development Mode');
    if (process.env.NODE_ENV === 'production') {
      console.log('Production Mode');
    } else if (process.env.NODE_ENV === 'test') {
      console.log('Test Mode');
    }
  } catch (err) {
    console.error(err);
  }
};

start();
