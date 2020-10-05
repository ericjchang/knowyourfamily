const request = require("supertest"); /* 
const app = require("../app");
const { sequelize } = require("../models");
const { queryInterface } = sequelize;
const { decodeToken } = require("../helpers/jwt.js"); */

/* GET : /user/:id  --> find user by id
POST : /user --> register
PUT : /user/:id --> edit user
GET : /user/search?=

GET : /individual --> fetch semua individual dari user
POST : /individual --> create individual baru
PUT : /individual/:id --> edit individual
DELETE : /individual/:id --> delete individual

GET : /family
POST : /family/:id  --> untuk add relationship, default status 'false', id yg di pake, id user yg add
PUT : /family/:id  --> untuk accept relationship, id yg di pake, id relationship
DELETE : /family/:id --> untuk decline relationship, id yg di pake, id relationship 
*/

let user = {
  email: "travis@mail.com",
  password: "Blink182",
};

describe("Register", () => {
  afterAll((done) => {
    queryInterface
      .bulkDelete("Users")
      .then((_) => done())
      .catch((err) => done(err));
  });

  describe("SUCCESS", () => {
    describe("success process register user", () => {
      test("respond status 200 with access_token user", (done) => {
        let { email, password } = user;
        request(app)
          .post("/user/")
          .send({ email, password })
          .end((err, response) => {
            if (err) return done(err);
            else {
              expect(response.status).toBe(200);
              expect(response.body).toHaveProperty(
                "access_token",
                expect.any(String)
              );
              let decoded = decodeToken(response.body.access_token);
              let { id, email } = decoded;
              expect(typeof id).toBe("number");
              expect(email).toBe(data[1].email);
              done();
            }
          });
      });
    });
  });

  describe("FAILED", () => {
    describe("wrong password", () => {
      test("respond status 400 with error message", (done) => {
        let { email } = user;
        let wrongPassword = "auwdnaoubhsd";
        request(app)
          .post("/login")
          .send({
            email,
            password: wrongPassword,
          })
          .end((err, response) => {
            if (err) return done(err);
            else {
              expect(response.status).toBe(400);
              expect(response.body).toHaveProperty(
                "message",
                "invalid email or password"
              );
const app = require('../app.js');
const request = require('supertest');
const { sequelize } = require('../models');
const { queryInterface } = sequelize;
const { encrypt } = require('../helpers/bcrypt.js');

const users = require('../data/dummy_users.json').map(user => {
  user.password = encrypt(user.password);
  user.createdAt = new Date();
  user.updatedAt = new Date();
  return user;
})

describe('User Router', () => {
  beforeAll(function() {
    queryInterface.bulkInsert('Users', users)
  })
  describe('Register', () => {
    describe('Success', () => {
      test('return code 201 and success created user info with id and email', done => {
        const usertest = {
          email: 'kipasangin@mail.com',
          password: 'abc123'
        }
        request(app)
          .post('/register')
          .send(usertest)
          .end((err, response) => {
            if (err) {
              return done(err)
            } else {
              expect(response.status).toBe(201);
              expect(response.body).toHaveProperty('id', expect.any(Number));
              expect(response.body).toHaveProperty('email', usertest.email);
              expect(response.body).not.toHaveProperty('password');
              return done();
            }
          })
      })
    })

    describe('Error', () => {
      test('Missing required email and password', done => {
        const errors = [
          {
            message: `Email is required`
          },
          {
            message: `Password is required`
          }
        ];
        request(app)
          .post('/register')
          .end((err, response) => {
            if (err) {
              return done(err);
            } else {
              expect(response.status).toBe(400);
              expect(response.body).toHaveProperty('errors', errors.error);
              return done();
            }
          });
      });

      test(`Email and Password is empty`, done => {
        const usertest = {
          email: '',
          password: ''
        };
        const errors = [
          {
            message: `Must be an email`
          },
          {
            message: `Email cannot empty`
          },
          {
            message: `Password cannot empty`
          }
        ];
        request(app)
          .post('/register')
          .send(usertest)
          .end((err, response) => {
            if (err) {
              return done(err);
            } else {
              expect(response.status).toBe(400);
              expect(response.body).toHaveProperty('errors', errors.error);
              return done();
            }
          });
      });
    });

    describe("unregistered email", () => {
      test("respond code 400 with error message", (done) => {
        let unregisteredEmail = "james@mail.com";
        let { password } = user;
        request(app)
          .post("/login")
          .send({
            email: unregisteredEmail,
            password,
          })
          .end((err, response) => {
            if (err) return done(err);
            else {
              expect(response.status).toBe(404);
              expect(response.body).toHaveProperty(
                "message",
                "email is unregistered, please register first"
              );

      test(`Email already exist`, done => {
        const errors = 
          {
            msg: `Email already exists`
          };
        const userexist = {
          email: 'tinymogwai@mail.com',
          password: 'abc123',
        };
        request(app)
          .post('/register')
          .send(userexist)
          .end((err, response) => {
            if (err) {
              return done(err);
            } else {
              expect(response.status).toBe(400);
              expect(response.body).toHaveProperty('errors', errors.error);
              return done();
            }
          });
      });
    });
  });
});

describe("Login", () => {
  afterAll((done) => {
    queryInterface
      .bulkDelete("Users")
      .then((_) => done())
      .catch((err) => done(err));
  });

  describe("SUCCESS", () => {
    describe("success process login user", () => {
      test("respond status 200 with access_token user", (done) => {
        let { email, password } = user;
        request(app)
          .post("/login")
          .send({ email, password })
          .end((err, response) => {
            if (err) return done(err);
            else {
              expect(response.status).toBe(200);
              expect(response.body).toHaveProperty(
                "access_token",
                expect.any(String)
              );
              let decoded = decodeToken(response.body.access_token);
              let { id, email } = decoded;
              expect(typeof id).toBe("number");
              expect(email).toBe(data[1].email);
              done();
            }
          });
      });
    });
  });

  describe("FAILED", () => {
    describe("wrong password", () => {
      test("respond status 400 with error message", (done) => {
        let { email } = user;
        let wrongPassword = "auwdnaoubhsd";
        request(app)
          .post("/login")
          .send({
            email,
            password: wrongPassword,
          })
          .end((err, response) => {
            if (err) return done(err);
            else {
              expect(response.status).toBe(400);
              expect(response.body).toHaveProperty(
                "message",
                "invalid email or password"
              );
              return done();
            }
          });
      });
    });

    describe("unregistered email", () => {
      test("respond code 400 with error message", (done) => {
        let unregisteredEmail = "james@mail.com";
        let { password } = user;
        request(app)
          .post("/login")
          .send({
            email: unregisteredEmail,
            password,
          })
          .end((err, response) => {
            if (err) return done(err);
            else {
              expect(response.status).toBe(404);
              expect(response.body).toHaveProperty(
                "message",
                "email is unregistered, please register first"
              );
              return done();
            }
          });
      });
    });
  });
});
=======
    })
  })

  describe('Login', () => {
    describe('Success', () => {
      test('Return user token', done => {
        const usertest = {
          email: 'tinymogwai@mail.com',
          password: 'abc123'
        }
        request(app)
          .post('/login')
          .send(usertest)
          .end((err, response) => {
            if (err) {
              return done(err);
            } else {
              expect(response.status).toBe(200);
              expect(response.body).toHaveProperty('access_token');
              return done();
            }
          })
      })
    })

    describe('Error', () => {
      test('Password does not match', done => {
        const usertest = {
          email: 'tinymogwai@mail.com',
          password: 'abcsatu'
        }
        const errors = {
          code: 401,
          msg: 'Password does not match!'
        }
        request(app)
          .post('/login')
          .send(usertest)
          .end((err, response) => {
            if (err) {
              return done(err)
            } else {
              expect(response.status).toBe(401);
              expect(response.body).toHaveProperty('errors', errors.error);
              return done();
            }
          })
      })

      test('Email is not registered', done => {
        const usertest = {
          email: 'bambang@mail.com',
          password: 'abc911'
        }
        const errors = {
          code: 404,
          msg: 'User is not registered'
        }
        request(app)
          .post('/login')
          .send(usertest)
          .end((err, response) => {
            if (err) {
              return done(err)
            } else {
              expect(response.status).toBe(404);
              expect(response.body).toHaveProperty('errors', errors.error);
              return done();
            }
          })
      })
    })
  })
  
  afterAll(function() {
    queryInterface.bulkDelete('Users')
  })
})
