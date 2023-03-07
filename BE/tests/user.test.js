const request = require('supertest');

// supertest의 request에 app을 담아 활용하기 위해 createApp 함수를 불러옵니다.
const { createApp } = require('../app');

const { sequelize, client } = require('../models');

describe('Sign Up', () => {
  let app;

  beforeAll(async () => {
    // 모든 테스트가 시작하기 전(beforeAll)에 app을 만들고, DataSource를 이니셜라이징 합니다.
    app = createApp();
    await sequelize.sync();
  });

  afterAll(async () => {
    // 테스트 데이터베이스의 불필요한 데이터를 전부 지워줍니다.
    await sequelize.query(`
      SET FOREIGN_KEY_CHECKS = 0;
    `);
    await sequelize.query(`
      TRUNCATE users;
    `);
    await sequelize.query(`
      SET FOREIGN_KEY_CHECKS = 1;
    `);

    // 모든 테스트가 끝나게 되면(afterAll) DB 커넥션을 끊어줍니다.
    await sequelize.close();
  });

  test('FAILED: invalid email', async () => {
    // supertest의 request를 활용하여 app에 테스트용 request를 보냅니다.
    await request(app)
      .post('/users/signup') // HTTP Method, 엔드포인트 주소를 작성합니다.
      .send({ email: 'wrongEmail', password: 'password001@' }) // body를 작성합니다.
      .expect(400) // expect()로 예상되는 statusCode, response를 넣어 테스트할 수 있습니다.
      .expect({ message: 'invalid email!' });
  });

  test('SUCCESS: created user', async () => {
    await request(app)
      .post('/users/signup')
      .send({
        userName: '홍길동',
        userPhoneNum: '01011112222',
        email: 'wecode001@gmail.com',
        password: 'password001@',
      })
      .expect(201)
      .expect({ message: 'USER_CREATED' });
  });

  test('FAILED: not enough info', async () => {
    await request(app)
      .post('/users/signup')
      .send({ email: 'wecode001@gmail.com', password: 'password001@' })
      .expect(400)
      .expect({ message: 'KEY_ERROR' });
  });
});
