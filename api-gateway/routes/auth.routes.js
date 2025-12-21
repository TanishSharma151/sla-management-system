const express = require("express");
const router = express.Router();
const createTicket = require("../controllers/tickets.controller")

router.post("/create-ticket", createTicket )

module.exports = router;