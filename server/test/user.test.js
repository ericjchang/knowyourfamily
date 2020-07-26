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
