const express = require("express");
const router = express.Router();
const tracerouteController = require("../../controllers/traceroute/tracerouteController");

router.post('/', tracerouteController.traceroute);

module.exports = router;
