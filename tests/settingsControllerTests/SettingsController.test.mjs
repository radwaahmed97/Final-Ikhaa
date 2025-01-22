import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../server.js";
import { getToken } from "../token.js";

chai.use(chaiHttp);
const should = chai.should();

let testCategoryId;
let testItemId;

let userData = {
  email: "not-exist@email.com",
};

let updatedUserData = {
  name: "new name",
};

describe("Profile Settings Operations", () => {
  describe("/Get Settings", () => {
    it("it should get user settings except password", (done) => {
      chai.request
        .execute(app)
        .get("/settings/setting") // Route to get all categories
        .set("Authorization", `Bearer ${getToken("member")}`)
        .end((err, res) => {
          if (err) return done(err);
          res.should.have.status(200);
          res.body.should.be.an("object");
          res.body.should.have.property("email").eql(userData.email);
          res.body.should.not.have.property("password");
          done();
        });
    });
  });
  describe("/PUT Settings", () => {
    it("it should update an existing user settings except password", (done) => {
      chai.request
        .execute(app)
        .put("/settings/setting") // Route to get all categories
        .set("Authorization", `Bearer ${getToken("member")}`)
        .send(updatedUserData)
        .end((err, res) => {
          if (err) return done(err);
          res.should.have.status(200);
          res.body.should.be.an("object");
          res.body.user.should.have.property("name").eq(updatedUserData.name);
          res.body.should.not.have.property("password");
          done();
        });
    });
  });
});
