import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../server.js";
import Category from "../../models/Categories.js";
import { getToken } from "../token.js";

chai.use(chaiHttp);
const should = chai.should();

describe("Category Operations", () => {
  let categoryId;

  describe("/GET Get All Categories", () => {
    it("it should fetch all categories", (done) => {
      chai.request
        .execute(app)
        .get("/categories")
        .set("Authorization", `Bearer ${getToken("member")}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("array");
          done();
        });
    });
  });

  describe("/POST Add Category", () => {
    it("it should create a new category", (done) => {
      let categoryData = {
        name: "Technology",
        createdBy: "user123",
      };

      chai.request
        .execute(app)
        .post("/categories/add")
        .set("Authorization", `Bearer ${getToken("member")}`)
        .send(categoryData)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.have
            .property("message")
            .eql("Category created successfully.");
          res.body.category.should.have.property("_id");
          categoryId = res.body.category._id; // Save category ID for future tests
          done();
        });
    });

    it("it should not create a category without a name", (done) => {
      let categoryData = {
        createdBy: "user123",
      };

      chai.request
        .execute(app)
        .post("/categories/add")
        .set("Authorization", `Bearer ${getToken("member")}`)
        .send(categoryData)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.have
            .property("error")
            .eql("name and createdBy are required");
          done();
        });
    });
  });

  describe("/GET Get Category by ID", () => {
    it("it should fetch a category by ID", (done) => {
      chai.request
        .execute(app)
        .get(`/categories/${categoryId}`)
        .set("Authorization", `Bearer ${getToken("member")}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("name").eql("Technology");
          done();
        });
    });

    it("it should return 404 if category does not exist", (done) => {
      const invalidId = "60d4f2b1f1e4f9f1f1f1f1f1";
      chai.request
        .execute(app)
        .get(`/categories/${invalidId}`)
        .set("Authorization", `Bearer ${getToken("member")}`)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.have.property("error").eql("Category not exists");
          done();
        });
    });
  });

  describe("/GET Count Categories", () => {
    it("it should count the categories", (done) => {
      chai.request
        .execute(app)
        .get("/categories/count")
        .set("Authorization", `Bearer ${getToken("member")}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("count").that.is.a("number");
          done();
        });
    });
  });

  describe("/GET Get Categories by User", () => {
    it.skip("it should fetch categories created by a specific user", (done) => {
      const userId = "user123"; // we should replace with actual userId
      chai.request
        .execute(app)
        .get(`/categories/user/${userId}`)
        .set("Authorization", `Bearer ${getToken("member")}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("array");
          done();
        });
    });
  });

  describe("/PUT Update Category", () => {
    it("it should update a category", (done) => {
      let updatedCategoryData = {
        name: "Updated Technology",
      };

      chai.request
        .execute(app)
        .put(`/categories/update/${categoryId}`)
        .set("Authorization", `Bearer ${getToken("member")}`)
        .send(updatedCategoryData)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("name").eql("Updated Technology");
          done();
        });
    });

    it("it should return 400 for invalid category name", (done) => {
      let updatedCategoryData = {
        name: "",
      };

      chai.request
        .execute(app)
        .put(`/categories/update/${categoryId}`)
        .set("Authorization", `Bearer ${getToken("member")}`)
        .send(updatedCategoryData)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.have.property("error").eql("Invalid Category name");
          done();
        });
    });
  });

  describe("/DELETE Delete Category", () => {
    it("it should delete a category", (done) => {
      chai.request
        .execute(app)
        .delete(`/categories/delete/${categoryId}`)
        .set("Authorization", `Bearer ${getToken("member")}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have
            .property("message")
            .eql("Category and associated items deleted successfully");
          done();
        });
    });

    it("it should return 404 if category does not exist", (done) => {
      const invalidId = "60d4f2b1f1e4f9f1f1f1f1f1";
      chai.request
        .execute(app)
        .delete(`/categories/delete/${invalidId}`)
        .set("Authorization", `Bearer ${getToken("member")}`)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.have.property("error").eql("Category not exists");
          done();
        });
    });
  });

  describe("/POST Bulk Delete Categories", () => {
    it.skip("it should bulk delete categories", (done) => {
      let categoryData1 = { name: "newBooks", createdBy: "user123" };
      let categoryData2 = { name: "newClothes", createdBy: "user123" };
      let category1 = new Category(categoryData1);
      let category2 = new Category(categoryData2);

      category1.save();
      category2.save();

      chai.request
        .execute(app)
        .post("/categories/bulk-delete")
        .set("Authorization", `Bearer ${getToken("member")}`)
        .send({ ids: [category1._id, category2._id] })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have
            .property("message")
            .eql("Categories and associated items deleted successfully");
          done();
        });
    });
  });
});
