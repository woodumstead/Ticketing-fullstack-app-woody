//imports and data
const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");


// get all
router.get("/", customerController.getAllCustomers);

// get by id
router.get("/:id", customerController.getSingleCustomer);

// new customer
router.post("/", customerController.addNewCustomer);

// edit customer
//router.put("/:id", customerController.editCustomer);

// delete customer
router.delete("/:id", customerController.deleteCustomer);


// exports
module.exports = router;