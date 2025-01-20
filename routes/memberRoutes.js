const express = require("express");
const router = express.Router();
const authorizeRole = require("../middleware/authMiddleware");
const {
  getAllNeeders,
  addNeeder,
  updateNeeder,
  deleteNeeder,
  viewNeeder,
} = require("../controllers/neederController");


  

// Routes for needer management
router.get("/", authorizeRole(["member"]), getAllNeeders);
router.get("/:id", authorizeRole(["member"]), viewNeeder);
router.post("/", authorizeRole(["member"]), addNeeder);
router.put("/:id", authorizeRole(["member"]), updateNeeder);
router.delete("/:id", authorizeRole(["member"]), deleteNeeder);

module.exports = router;