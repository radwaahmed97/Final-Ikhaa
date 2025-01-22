import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../server.js";
import { getToken } from "../token.js";

chai.use(chaiHttp);
const { expect } = chai;

let memberToken;

describe("Statistics Controller", () => {
  before(async () => {
    memberToken = getToken("member");
  });

  describe("/GET Get Statistics", () => {
    it("it should fetch all requests statistics by members only to monitor requests processing and updates", (done) => {
      chai.request
        .execute(app)
        .get("/statistics")
        .set("Authorization", `Bearer ${memberToken}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
