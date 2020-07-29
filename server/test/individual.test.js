const app = require('../app.js');
const request = require('supertest');
const { sequelize } = require('../models');
const { queryInterface } = sequelize;
const { encrypt } = require('../helpers/bcrypt.js');
const { userToken } = require('../helpers/jwt.js');

const users = require('../data/dummy_users.json').map(user => {
  user.password = encrypt(user.password);
  user.createdAt = new Date();
  user.updatedAt = new Date();
  return user;
})

let token;
let token_err;
let invalid_token;
let individualId;
let indiviualSearch;
let userId;

describe('Individual Test', () => {
  beforeAll(done => {
    queryInterface.bulkInsert('Users', users, { returning: true })
      .then(result => {
        token = userToken({
          id: result[0].id,
          email: result[0].email
        })
        userId = result[0].id;
      })
      .then(result => {
        const individuals = require('../data/dummy_individuals.json').map(individual => {
          individual.createdAt = new Date();
          individual.updatedAt = new Date();
          individual.UserId = userId;
          return individual;
        })
        return queryInterface.bulkInsert('Individuals', individuals, { returning: true })
      })
      .then(result => {
        individualId = result[0].id;
        indiviualSearch = result[0];
        done();
      })
      .catch(err => {
        done(err)
      })
  })

  describe('Get All Individuals', () => {
    describe('Success', () => {
      test('Should return all individuals from database', done => {
        request(app)
          .get('/individual')
          .set('token', token)
          .end((err, response) => {
            if (err) {
              return done(err);
            } else {
              expect(response.status).toBe(200);
              expect(response.body).toHaveProperty('individuals');
              return done();
            }
          })
      })
    })
  })

  describe('Create Individual', () => {
    describe('Success', () => {
      test('Should return new individual created', done => {
        const newIndividual = {
          name: 'Jane Doe',
          gender: 'female',
          date_of_birth: '1996-12-23',
          place_of_birth: 'Hereford',
          address: '2nd Sesame St. Avenue',
          location: {
            lat: 324212.12,
            lon: 12323.97
          },
          instagram: 'JaneDoe'
        }
        request(app)
          .post('/individual')
          .send(newIndividual)
          .set('token', token)
          .end((err, response) => {
            if (err) {
              return done(err)
            } else {
              expect(response.status).toBe(201);
              expect(response.body).toHaveProperty('name', newIndividual.name)
              expect(response.body).toHaveProperty('gender', newIndividual.gender)
              expect(response.body).toHaveProperty('date_of_birth', newIndividual.date_of_birth)
              expect(response.body).toHaveProperty('place_of_birth', newIndividual.place_of_birth)
              expect(response.body).toHaveProperty('address', newIndividual.address)
              expect(response.body).toHaveProperty('instagram', newIndividual.instagram)
              return done()
            }
          })
      })
    })

    describe('Failed', () => {
      test('Should return fail with status code and error message', done => {
        const errors = [
          {
            message: 'Name cannot be empty'
          },
          {
            message: 'Gender must be choosen'
          },
          {
            message: 'Birthdate cannot be empty'
          },
          {
            message: 'Birthplace cannot be empty'
          },
          {
            message: 'Address cannot be empty'
          }
        ]
        const newIndividual = {
          name: '',
          gender: 'male',
          date_of_birth: '1996-12-23',
          place_of_birth: 'Essex',
          address: 'Big Ben'
        }
        request(app)
          .post('/individual')
          .send(newIndividual)
          .set('token', token)
          .end((err, response) => {
            if (err) {
              return done(err)
            } else {
              expect(response.status).toBe(400);
              expect(response.body).toHaveProperty('errors', errors.error);
              return done();
            }
          })
      })

      test('Should return fail with status code and error message', done => {
        const errors = [
          {
            message: 'Name cannot be empty'
          },
          {
            message: 'Gender must be choosen'
          },
          {
            message: 'Birthdate cannot be empty'
          },
          {
            message: 'Birthplace cannot be empty'
          },
          {
            message: 'Address cannot be empty'
          }
        ]
        const newIndividual = {
          name: 'James Doe',
          gender: '',
          date_of_birth: '1996-12-23',
          place_of_birth: 'Essex',
          address: 'Big Ben'
        }
        request(app)
          .post('/individual')
          .send(newIndividual)
          .set('token', token)
          .end((err, response) => {
            if (err) {
              return done(err)
            } else {
              expect(response.status).toBe(400);
              expect(response.body).toHaveProperty('errors', errors.error);
              return done();
            }
          })
      })

      test('Should return fail with status code and error message', done => {
        const errors = [
          {
            message: 'Name cannot be empty'
          },
          {
            message: 'Gender must be choosen'
          },
          {
            message: 'Birthdate cannot be empty'
          },
          {
            message: 'Birthplace cannot be empty'
          },
          {
            message: 'Address cannot be empty'
          }
        ]
        const newIndividual = {
          name: 'James Doe',
          gender: 'male',
          date_of_birth: '',
          place_of_birth: 'Essex',
          address: 'Big Ben'
        }
        request(app)
          .post('/individual')
          .send(newIndividual)
          .set('token', token)
          .end((err, response) => {
            if (err) {
              return done(err)
            } else {
              expect(response.status).toBe(400);
              expect(response.body).toHaveProperty('errors', errors.error);
              return done();
            }
          })
      })

      test('Should return fail with status code and error message', done => {
        const errors = [
          {
            message: 'Name cannot be empty'
          },
          {
            message: 'Gender must be choosen'
          },
          {
            message: 'Birthdate cannot be empty'
          },
          {
            message: 'Birthplace cannot be empty'
          },
          {
            message: 'Address cannot be empty'
          }
        ]
        const newIndividual = {
          name: 'James Doe',
          gender: 'male',
          date_of_birth: '1996-12-23',
          place_of_birth: '',
          address: 'Big Ben'
        }
        request(app)
          .post('/individual')
          .send(newIndividual)
          .set('token', token)
          .end((err, response) => {
            if (err) {
              return done(err)
            } else {
              expect(response.status).toBe(400);
              expect(response.body).toHaveProperty('errors', errors.error);
              return done();
            }
          })
      })

      test('Should return fail with status code and error message', done => {
        const errors = [
          {
            message: 'Name cannot be empty'
          },
          {
            message: 'Gender must be choosen'
          },
          {
            message: 'Birthdate cannot be empty'
          },
          {
            message: 'Birthplace cannot be empty'
          },
          {
            message: 'Address cannot be empty'
          }
        ]
        const newIndividual = {
          name: 'James Doe',
          gender: 'male',
          date_of_birth: '1996-12-23',
          place_of_birth: 'Essex',
          address: ''
        }
        request(app)
          .post('/individual')
          .send(newIndividual)
          .set('token', token)
          .end((err, response) => {
            if (err) {
              return done(err)
            } else {
              expect(response.status).toBe(400);
              expect(response.body).toHaveProperty('errors', errors.error);
              return done();
            }
          })
      })
    })

    describe('Update Individuals', () => {
      describe('Success', () => {
        test('Should return with updating data', done => {
          const newIndividual = {
            name: 'Janette Doe',
            gender: 'female',
            date_of_birth: '1996-12-23',
            place_of_birth: 'Essex',
            address: 'Big Ben'
          }
          request(app)
            .put(`/individual/${individualId}`)
            .send(newIndividual)
            .set('token', token)
            .end((err, response) => {
              if (err) {
                done(err)
              } else {
                expect(response.status).toBe(200)
                expect(response.body).toHaveProperty('name', newIndividual.name);
                expect(response.body).toHaveProperty('gender', newIndividual.gender);
                expect(response.body).toHaveProperty('date_of_birth', newIndividual.date_of_birth);
                expect(response.body).toHaveProperty('place_of_birth', newIndividual.place_of_birth);
                expect(response.body).toHaveProperty('address', newIndividual.address);
                return done();
              }
            })
        })
      })

      describe('Fail', () => {
        test('Should return 404 Not Found', done => {
          const newIndividual = {
            name: 'Janette Doe',
            gender: 'female',
            date_of_birth: '1996-12-23',
            place_of_birth: 'Essex',
            address: 'Big Ben'
          }
          const errors = {
            code: 404,
            message: 'Data Not Found'
          }
          request(app)
            .put(`/individual/${individualId}+1`)
            .send(newIndividual)
            .set('token', token)
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

        test('Should return 401 Not Authorized', done => {
          const newIndividual = {
            name: 'Janette Doe',
            gender: 'female',
            date_of_birth: '1996-12-23',
            place_of_birth: 'Essex',
            address: 'Big Ben'
          }
          const errors = {
            code: 401,
            message: 'Unauthorized'
          }
          request(app)
            .put(`/individual/${individualId}`)
            .send(newIndividual)
            .set('token', token_err)
            .end((err, response) => {
              if (err) {
                return done(err);
              } else {
                expect(response.status).toBe(401);
                expect(response.body).toHaveProperty('errors', errors.error);
                return done();
              }
            })
        })
      })
    })

    describe('Delete Individuals', () => {
      describe('Success', () => {
        test('Should return success deleting individuals', done => {
          request(app)
            .delete(`/individual/${individualId}`)
            .set('token', token)
            .end((err, response) => {
              if (err) {
                return done(err)
              } else {
                expect(response.status).toBe(200);
                return done();
              }
            })
        })
      })

      describe('Fail', () => {
        test('Should return 404 Data Not Found', done => {
          const errors = {
            code: 404,
            message: 'Data Not Found'
          }
          request(app)
            .delete(`/individual/${individualId}+1`)
            .set('token', token)
            .end((err, response) => {
              if (err) {
                return done(err);
              } else {
                expect(response.status).toBe(404);
                expect(response.body).toHaveProperty('errors', errors.error);
                return done();
              }
            })
        })
      })
    })
  })

  afterAll(done => {
    queryInterface.bulkDelete('Individuals')
      .then(() => {
        return queryInterface.bulkDelete('Users');
      })
      .then(() => {
        done();
      })
      .catch(err => {
        done(err);
      })
  })
})