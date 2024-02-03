const express = require("express");
const router = express.Router();
const tracerouteController = require("../../controllers/tracerouteController");

router
  .route("/")
  .post(tracerouteController.traceroute);

module.exports = router;
