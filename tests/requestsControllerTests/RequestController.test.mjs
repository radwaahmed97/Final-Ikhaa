import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../server.js";
import Request from "../../models/Requests.js";
import { getToken } from "../token.js";
import Item from "../../models/Items.js";

chai.use(chaiHttp);
const { expect } = chai;

let neederToken;
let memberToken;
let testRequestId;
let testItemId;
let testCategoryId;

describe("Requests Controller", () => {
  before(async () => {
    memberToken = getToken("member");
    neederToken = getToken("needer");

    // Fetch or create a test category
    const categoryRes = await chai.request
      .execute(app)
      .get("/categories")
      .set("Authorization", `Bearer ${memberToken}`);

    const existingCategory = categoryRes.body.find(
      (category) => category.name === "Test Category"
    );

    if (existingCategory) {
      testCategoryId = existingCategory._id;
    } else {
      const newCategoryRes = await chai.request
        .execute(app)
        .post("/categories/add")
        .set("Authorization", `Bearer ${memberToken}`)
        .send({ name: "Test Category" });
      testCategoryId = newCategoryRes.body._id;
    }

    // Create a test item
    const itemRes = await chai.request
      .execute(app)
      .post(`/items/categories/${testCategoryId}/items/add`)
      .set("Authorization", `Bearer ${memberToken}`)
      .send({
        name: "Test Item",
        description: "This is a test item for needer.",
        quantity: 10,
      });
    testItemId = itemRes.body._id;
  });

  describe("/POST submit request", () => {
    it("should submit a new request for a needer", async () => {
      const res = await chai.request
        .execute(app)
        .post("/requests/submit")
        .set("Authorization", `Bearer ${neederToken}`)
        .send({
          items: [
            {
              itemId: testItemId,
              quantity: 2,
            },
          ],
        });

      expect(res).to.have.status(201);
      expect(res.body.success).to.be.true;
      expect(res.body.request).to.have.property("_id");
      testRequestId = res.body.request._id;
    });

    it("should fail to submit a request with insufficient item quantity", async () => {
      const res = await chai.request
        .execute(app)
        .post("/requests/submit")
        .set("Authorization", `Bearer ${neederToken}`)
        .send({
          items: [
            {
              itemId: testItemId,
              quantity: 20,
            },
          ],
        });

      expect(res).to.have.status(400);
      expect(res.body.success).to.be.false;
    });
  });

  describe("/GET all requests", () => {
    it("should fetch all requests for a member", async () => {
      const res = await chai.request
        .execute(app)
        .get("/requests")
        .set("Authorization", `Bearer ${memberToken}`);

      expect(res).to.have.status(200);
      expect(res.body.success).to.be.true;
      expect(res.body.requests).to.be.an("array");
    });
  });

  describe("/PATCH update request status", () => {
    it("should update request status to 'collected'", async () => {
      const res = await chai.request
        .execute(app)
        .patch(`/requests/update-status/${testRequestId}/collect`)
        .set("Authorization", `Bearer ${memberToken}`);

      expect(res).to.have.status(200);
      expect(res.body.success).to.be.true;
      expect(res.body.message).to.include("collected");
    });
  });

  describe("/GET latest requests", () => {
    it("should fetch the latest 10 requests for a member", async () => {
      const res = await chai.request
        .execute(app)
        .get("/requests/latest")
        .set("Authorization", `Bearer ${memberToken}`);

      expect(res).to.have.status(200);
      expect(res.body.success).to.be.true;
      expect(res.body.requests).to.be.an("array").that.has.length.at.most(10);
    });
  });
});
