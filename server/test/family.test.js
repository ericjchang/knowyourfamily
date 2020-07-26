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

let token = "";
beforeAll((done) => {
  request(app)
    .post("/register")
    .send({
      email: "travis@mail.com",
      password: "Blink182",
    })
    .then((_) => {
      return request(app).post("/login").send({
        email: "travis@mail.com",
        password: "Blink182",
      });
    })
    .then((response) => {
      const { body } = response;
      token = body.access_token;
      done();
    })
    .catch((err) => done(err));
});

let individualId = null;

let individual = {
  first_name: "travis@mail.com",
  last_name: "Blink182",
  date_of_birth: "1975-11-14",
  place_of_birth: "California",
  address: "California",
  location: "California",
  instagram: "travisbarker",
  facebook: "travisbarkerofficial",
};

describe("Create Individuals", () => {
  beforeAll((done) => {
    queryInterface
      .bulkDelete("Individuals")
      .then((_) => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
  describe("SUCCESS", function () {
    describe("success create Individual", function () {
      test("respond status 201 with obj data", function (done) {
        return request(app)
          .post("/user/")
          .send(individual)
          .set("access_token", token)
          .end((err, response) => {
            if (err) {
              return done(err);
            } else {
              individualId = response.body.individual.id;
              expect(response.status).toBe(201);
              expect(response.body).toHaveProperty(
                "individual",
                expect.any(Object)
              );
              expect(response.body.individual).toHaveProperty(
                "first_name",
                individual.first_name
              );
              expect(response.body.individual).toHaveProperty(
                "last_name",
                individual.last_name
              );
              expect(response.body.individual).toHaveProperty(
                "date_of_birth",
                individual.date_of_birth
              );
              expect(response.body.individual).toHaveProperty(
                "place_of_birth",
                individual.place_of_birth
              );
              expect(response.body.individual).toHaveProperty(
                "address",
                individual.address
              );
              expect(response.body.individual).toHaveProperty(
                "location",
                individual.location
              );
              expect(response.body.individual).toHaveProperty(
                "instagram",
                individual.instagram
              );
              expect(response.body.individual).toHaveProperty(
                "facebook",
                individual.facebook
              );
              return done();
            }
          });
      });
    });
  });

  describe("FAILED", function () {
    describe("failed create individual (no first_name)", function () {
      test("respond status 400 with error msg", function (done) {
        let {
          first_name,
          last_name,
          date_of_birth,
          place_of_birth,
          address,
          location,
          instagram,
          facebook,
        } = individual;
        return request(app)
          .post("/user/")
          .send({
            last_name,
            date_of_birth,
            place_of_birth,
            address,
            location,
            instagram,
            facebook,
          })
          .set("access_token", token)
          .end((err, response) => {
            if (err) {
              return done(err);
            } else {
              expect(response.status).toBe(400);
              expect(response.body).toHaveProperty("message", [
                "please enter first name",
              ]);
              return done();
            }
          });
      });
    });

    describe("failed create individual (no last name)", function () {
      test("respond status 400 with error msg", function (done) {
        let {
          first_name,
          last_name,
          date_of_birth,
          place_of_birth,
          address,
          location,
          instagram,
          facebook,
        } = individual;
        return request(app)
          .post("/user/add")
          .send({
            first_name,
            date_of_birth,
            place_of_birth,
            address,
            location,
            instagram,
            facebook,
          })
          .set("access_token", token)
          .end((err, response) => {
            if (err) {
              return done(err);
            } else {
              expect(response.status).toBe(400);
              expect(response.body).toHaveProperty("message", [
                `last name can't be empty`,
              ]);
              return done();
            }
          });
      });
    });

    describe("failed create individual (no date of birth)", function () {
      test("respond status 400 with error msg", function (done) {
        let {
          first_name,
          last_name,
          date_of_birth,
          place_of_birth,
          address,
          location,
          instagram,
          facebook,
        } = individual;
        return request(app)
          .post("/user/add")
          .send({
            first_name,
            last_name,
            place_of_birth,
            address,
            location,
            instagram,
            facebook,
          })
          .set("access_token", token)
          .end((err, response) => {
            if (err) {
              return done(err);
            } else {
              expect(response.status).toBe(400);
              expect(response.body).toHaveProperty("message", [
                `date of birth can't be empty`,
              ]);
              return done();
            }
          });
      });
    });

    describe("failed create individual (no place of birth)", function () {
      test("respond status 400 with error msg", function (done) {
        let {
          first_name,
          last_name,
          date_of_birth,
          place_of_birth,
          address,
          location,
          instagram,
          facebook,
        } = individual;
        return request(app)
          .post("/user/add")
          .send({
            first_name,
            last_name,
            date_of_birth,
            address,
            location,
            instagram,
            facebook,
          })
          .set("access_token", token)
          .end((err, response) => {
            if (err) {
              return done(err);
            } else {
              expect(response.status).toBe(400);
              expect(response.body).toHaveProperty("message", [
                `place of birth can't be empty`,
              ]);
              return done();
            }
          });
      });
    });

    describe("failed create individual (no address)", function () {
      test("respond status 400 with error msg", function (done) {
        let {
          first_name,
          last_name,
          date_of_birth,
          place_of_birth,
          address,
          location,
          instagram,
          facebook,
        } = individual;
        return request(app)
          .post("/user/add")
          .send({
            first_name,
            last_name,
            date_of_birth,
            place_of_birth,
            location,
            instagram,
            facebook,
          })
          .set("access_token", token)
          .end((err, response) => {
            if (err) {
              return done(err);
            } else {
              expect(response.status).toBe(400);
              expect(response.body).toHaveProperty("message", [
                `place of birth can't be empty`,
              ]);
              return done();
            }
          });
      });
    });

    describe("failed create individual (no location)", function () {
      test("respond status 400 with error msg", function (done) {
        let {
          first_name,
          last_name,
          date_of_birth,
          place_of_birth,
          address,
          location,
          instagram,
          facebook,
        } = individual;
        return request(app)
          .post("/user/add")
          .send({
            first_name,
            last_name,
            date_of_birth,
            place_of_birth,
            address,
            instagram,
            facebook,
          })
          .set("access_token", token)
          .end((err, response) => {
            if (err) {
              return done(err);
            } else {
              expect(response.status).toBe(400);
              expect(response.body).toHaveProperty("message", [
                `location can't be empty`,
              ]);
              return done();
            }
          });
      });
    });

    describe("failed create individual (no instagram)", function () {
      test("respond status 400 with error msg", function (done) {
        let {
          first_name,
          last_name,
          date_of_birth,
          place_of_birth,
          address,
          location,
          instagram,
          facebook,
        } = individual;
        return request(app)
          .post("/user/add")
          .send({
            first_name,
            last_name,
            date_of_birth,
            place_of_birth,
            location,
            address,
            facebook,
          })
          .set("access_token", token)
          .end((err, response) => {
            if (err) {
              return done(err);
            } else {
              expect(response.status).toBe(400);
              expect(response.body).toHaveProperty("message", [
                `instagram account can't be empty`,
              ]);
              return done();
            }
          });
      });
    });

    describe("failed create individual (no facebook)", function () {
      test("respond status 400 with error msg", function (done) {
        let {
          first_name,
          last_name,
          date_of_birth,
          place_of_birth,
          address,
          location,
          instagram,
          facebook,
        } = individual;
        return request(app)
          .post("/user/add")
          .send({
            first_name,
            last_name,
            date_of_birth,
            place_of_birth,
            location,
            address,
            instagram,
          })
          .set("access_token", token)
          .end((err, response) => {
            if (err) {
              return done(err);
            } else {
              expect(response.status).toBe(400);
              expect(response.body).toHaveProperty("message", [
                `facebook account can't be empty`,
              ]);
              return done();
            }
          });
      });
    });
  });

  describe("Get individual by ID", () => {
    describe("SUCCESS", function () {
      describe("success get individual by id", function () {
        test("respond status 200 with array of obj data", function (done) {
          return request(app)
            .get(`/user/${individualId}`)
            .set("access_token", token)
            .end((err, response) => {
              if (err) {
                return done(err);
              } else {
                expect(response.status).toBe(200);
                expect(response.body).toHaveProperty(
                  "result",
                  expect.any(Object)
                );
                return done();
              }
            });
        });
      });
    });
    describe("FAILED", function () {
      describe("failed get individual by id", function () {
        test("respond status 500 with error msg", function (done) {
          let token = "akubsfkjabs";
          return request(app)
            .get("/user/200")
            .set("access_token", token)
            .end((err, response) => {
              if (err) {
                return done(err);
              } else {
                expect(response.status).toBe(500);
                expect(response.body).toHaveProperty(
                  "message",
                  "internal server error"
                );
                return done();
              }
            });
        });
      });
    });
  });

  describe("Get Individuals", () => {
    describe("SUCCESS", function () {
      describe("success get data", function () {
        test("respond status 200 with array of obj data", function (done) {
          return request(app)
            .get("/user/")
            .set("access_token", token)
            .end((err, response) => {
              if (err) {
                return done(err);
              } else {
                expect(response.status).toBe(200);
                expect(response.body).toHaveProperty(
                  "result",
                  expect.any(Array)
                );
                return done();
              }
            });
        });
      });
    });

    describe("FAILED", function () {
      describe("failed get post", function () {
        test("respond status 500 with error msg", function (done) {
          let token = "kasbdkjasbfkasjbf";
          return request(app)
            .get("/user/")
            .set("access_token", token)
            .end((err, response) => {
              if (err) {
                return done(err);
              } else {
                expect(response.status).toBe(500);
                expect(response.body).toHaveProperty(
                  "message",
                  "internal server error"
                );
                return done();
              }
            });
        });
      });
    });
  });

  describe("Update Post", () => {
    describe("SUCCESS", function () {
      describe("success update user", function () {
        test("respond status 201 with msg", function (done) {
          return request(app)
            .put(`/user/${productId}`)
            .send(individual)
            .set("access_token", token)
            .end((err, response) => {
              if (err) {
                return done(err);
              } else {
                expect(response.status).toBe(200);
                expect(response.body).toHaveProperty(
                  "message",
                  "success update user"
                );
                return done();
              }
            });
        });
      });
    });
    describe("FAILED", function () {
      describe("failed update user", function () {
        test("respond status 404 with error msg", function (done) {
          return request(app)
            .put("/user/200")
            .set("access_token", token)
            .end((err, response) => {
              if (err) {
                return done(err);
              } else {
                expect(response.status).toBe(404);
                expect(response.body).toHaveProperty(
                  "message",
                  "user not found"
                );
                return done();
              }
            });
        });
      });
    });
  });

  describe("Delete Post", () => {
    describe("SUCCESS", function () {
      describe("success delete user", function () {
        test("respond status 200 with msg", function (done) {
          return request(app)
            .delete(`/user/${productId}`)
            .set("access_token", token)
            .end((err, response) => {
              if (err) {
                return done(err);
              } else {
                expect(response.status).toBe(200);
                expect(response.body).toHaveProperty(
                  "message",
                  "product has been deleted"
                );
                return done();
              }
            });
        });
      });
    });
    describe("FAILED", function () {
      describe("failed delete user", function () {
        test("respond status 404 with error msg", function (done) {
          return request(app)
            .delete("/user/200")
            .set("access_token", token)
            .end((err, response) => {
              if (err) {
                return done(err);
              } else {
                expect(response.status).toBe(404);
                expect(response.body).toHaveProperty(
                  "message",
                  "user not found"
                );
                return done();
              }
            });
        });
      });
    });
  });
});
