import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../server.js";
import { getToken } from "../token.js";

chai.use(chaiHttp);
const { expect } = chai;

let neederToken;

describe("Notifications Controller", () => {
  before(async () => {
    neederToken = getToken("needer");
  });

  describe("/GET Get Notifications", () => {
    it("it should fetch all notifications for a needer", (done) => {
      chai.request
        .execute(app)
        .get("/notifications")
        .set("Authorization", `Bearer ${neederToken}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
