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

      test(`Send email as boolean`, done => {
        const usertest = {
          email: true,
          password: 12313232,
        };
        const errors = [
          {
            message: `Must be an email`
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

      test(`Input is not an email`, done => {
        const usertest = {
          email: 'not email',
          password: 'abc123'
        };
        const errors = [
          {
            msg: `Must be an email`
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
              expect(response.body).toHaveProperty('token');
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

  describe('Find user', () => {
    describe('Success', () => {
      test('Sucess find user', done => {
        request(app)
          .get('/users')
          .end((err, response) => {
            if (err) {
              done(err)
            } else {
              expect(response.status).toBe(200)
            }
          })
      })
    })
  })
  
  afterAll(function() {
    queryInterface.bulkDelete('Users')
  })
})