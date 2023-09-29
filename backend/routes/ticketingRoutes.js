// import and data
const express = require("express");
const router = express.Router();
const ticketingController = require("../controllers/ticketingController");


// get all
router.get("/", ticketingController.getAllTickets);

// get by id
router.get("/:id", ticketingController.getSingleTicket);
 
// purchase ticket
// router.post("/", ticketingController.newTicket);

// // edit ticket
// router.put("/:id", ticketingController.editTicket);

// // delete ticket
// router.delete("/:id", ticketingController.deleteTicket);


// exports
module.exports = router;