import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../server.js";
import { getToken } from "../token.js";

chai.use(chaiHttp);
const should = chai.should();

let testCategoryId;
let testItemId;

describe("Item Operations", () => {
  before((done) => {
    // Checking if the test category already exists
    chai.request
      .execute(app)
      .get("/categories") // Route to get all categories
      .set("Authorization", `Bearer ${getToken("member")}`)
      .end((err, res) => {
        if (err) return done(err);

        const existingCategory = res.body.find(
          (category) => category.name === "Test Category"
        );

        if (existingCategory) {
          // Use existing category ID as testing category ID
          testCategoryId = existingCategory._id;
          console.log("Using existing Test Category ID:", testCategoryId);
          done();
        } else {
          // Create a new test category
          chai.request
            .execute(app)
            .post("/categories/add")
            .set("Authorization", `Bearer ${getToken("member")}`)
            .send({ name: "Test Category" })
            .end((err, res) => {
              if (err) return done(err);
              testCategoryId = res.body._id;
              console.log("Created new Test Category ID:", testCategoryId);
              done();
            });
        }
      });
  });

  describe("/POST Add Item", () => {
    it("should add a new item to a category", (done) => {
      const itemData = {
        name: "Test Item",
        description: "Test item description",
        quantity: 10,
        photo: "http://example.com/item.jpg",
      };

      chai.request
        .execute(app)
        .post(`/items/categories/${testCategoryId}/items/add`)
        .set("Authorization", `Bearer ${getToken("member")}`)
        .send(itemData)
        .end((err, res) => {
          if (err) return done(err);
          res.should.have.status(201);
          res.body.should.be.an("object");
          res.body.should.have.property("name").eql("Test Item");
          testItemId = res.body._id;
          done();
        });
    });
  });

  describe("/GET Get Items by Category", () => {
    it("should fetch all items in a category", (done) => {
      chai.request
        .execute(app)
        .get(`/items/categories/${testCategoryId}/items`)
        .set("Authorization", `Bearer ${getToken("member")}`)
        .end((err, res) => {
          if (err) return done(err);
          res.should.have.status(200);
          res.body.should.be.an("array");
          res.body.some((item) => item._id.toString() === testItemId).should.be
            .true;
          done();
        });
    });
  });

  describe("/GET Get Item by ID", () => {
    it("should fetch an item by ID", (done) => {
      chai.request
        .execute(app)
        .get(`/items/${testItemId}`)
        .set("Authorization", `Bearer ${getToken("member")}`)
        .end((err, res) => {
          if (err) return done(err);
          res.should.have.status(200);
          res.body.should.be.an("object");
          res.body.should.have.property("name").eql("Test Item");
          done();
        });
    });
  });

  describe("/PUT Update Item", () => {
    it("should update an item", (done) => {
      const updatedItemData = {
        name: "Updated Test Item",
        description: "Updated item description",
        quantity: 5,
        photo: "http://example.com/updated_item.jpg",
      };

      chai.request
        .execute(app)
        .put(`/items/update/${testItemId}`)
        .set("Authorization", `Bearer ${getToken("member")}`)
        .send(updatedItemData)
        .end((err, res) => {
          if (err) return done(err);
          res.should.have.status(200);
          res.body.should.be.an("object");
          res.body.should.have.property("name").eql("Updated Test Item");
          done();
        });
    });
  });

  describe("/DELETE Delete Item", () => {
    it("should delete an item", (done) => {
      chai.request
        .execute(app)
        .delete(`/items/delete/${testItemId}`)
        .set("Authorization", `Bearer ${getToken("member")}`)
        .end((err, res) => {
          if (err) return done(err);
          res.should.have.status(200);
          done();
        });
    });
  });
});
