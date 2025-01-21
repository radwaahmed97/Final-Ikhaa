import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../server.js"; // Include .js extension
import { setToken } from "../token.js";

chai.use(chaiHttp);
const should = chai.should();

describe("Auth Operations", () => {
  describe("/Post SignUp", () => {
    it.skip("it should register a new user", (done) => {
      let userData = {
        name: "newUser",
        email: "not-exist@email.com",
        role: "member",
        phone: "201020850021",
        password: "12345",
      };
      chai.request
        .execute(app)
        .post("/auth/signup")
        .send(userData)
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });

    it("it should not register a new user with an exisiting email", (done) => {
      let userData = {
        name: "newUser",
        email: "not-exist@email.com",
        role: "member",
        phone: "201020850021",
        password: "12345",
      };
      chai.request
        .execute(app)
        .post("/auth/signup")
        .send(userData)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
  describe("/Post Login", () => {
    it("it should login a member user", (done) => {
      let userData = {
        email: "not-exist@email.com",
        password: "12345",
      };
      chai.request
        .execute(app)
        .post("/auth/login")
        .send(userData)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("token");

          setToken("member", res.body.token);

          done();
        });
    });
    it("it should login a needer user", (done) => {
      let userData = {
        email: "radwaneeder@test.com",
        password: "newPassword123",
      };
      chai.request
        .execute(app)
        .post("/auth/login")
        .send(userData)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("token");

          setToken("needer", res.body.token);

          done();
        });
    });
    it("it should not login a user with incorrect password", (done) => {
      let userData = {
        email: "not-exist@email.com",
        password: "wrong-password",
      };
      chai.request
        .execute(app)
        .post("/auth/login")
        .send(userData)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
});
