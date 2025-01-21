const express = require("express");
const router = express.Router();
const requestsController = require("../controllers/requestsController");
const authMiddleware = require("../middleware/authMiddleware");

// Route to submit a request (restricted to needers)
router.post(
  "/submit",
  authMiddleware(["needer"]),
  requestsController.submitRequest
);

// Route to get all requests (restricted to members)
router.get("/", authMiddleware(["member"]), requestsController.getRequests);

// Route to update request status to "collected" (restricted to members)
router.patch(
  "/update-status/:requestId/collect",
  authMiddleware(["member"]),
  async (req, res) => {
    req.body.status = "collected"; // Setting the status in the request body
    await requestsController.updateRequestStatus(req, res);
  }
);

// Route to get the latest 10 requests (restricted to members)
router.get(
  "/latest",
  authMiddleware(["member"]),
  requestsController.getLatestRequests
);

// Route to get all done requests (restricted to members)
router.get(
  "/done",
  authMiddleware(["member"]),
  requestsController.getDoneRequests
);

// Route to update request status to "refused" (restricted to members)
router.patch(
  "/update-status/:requestId/reject",
  authMiddleware(["member"]),
  async (req, res) => {
    req.body.status = "refused"; // Setting the status in the request body
    await requestsController.updateRequestStatus(req, res);
  }
);

// Route to delete a request (restricted to members)
router.delete(
  "/delete/:requestId",
  authMiddleware(["member"]),
  requestsController.deleteRequest
);

// Route to remove a request from the archive (restricted to members)
router.delete(
  "/archive/delete/:requestId",
  authMiddleware(["member"]),
  requestsController.removeArchiveRequests
);

module.exports = router;
