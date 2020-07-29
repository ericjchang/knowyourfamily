const app = require('../app.js');
const request = require('supertest');
const { sequelize } = require('../models');
const { queryInterface } = sequelize;



describe('Suggestion testing', () => {
  beforeAll(done => {})

  describe('Get Suggestion', () => {
    describe('Success', () => {
      test('Should return suggestion', done => {
        request(app)
          .get('/suggestion')
          .end((err, response) => {
            
          })
      })
    })
  })
})