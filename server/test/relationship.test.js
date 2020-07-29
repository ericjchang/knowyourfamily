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

const individuals = require('../data/dummy_individuals.json').map(individual => {
  individual.createdAt = new Date();
  individual.updatedAt = new Date();
  return individual;
})

const roles= require('../data/role.json').map(role => {
  role.createdAt = new Date();
  role.updatedAt = new Date();
  return role
})

describe('Relationship Test', () => {
  beforeAll(done)
})