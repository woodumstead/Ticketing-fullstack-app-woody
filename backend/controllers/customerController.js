const customers = [
    {
        id: 1,
        seasonPassHolder: Boolean,
        name: ""
        

    },
    
]
const Customer = require("../models/customerModel") 

exports.getAllCustomers = async (req, res) => {
    await Customer.findAll() 
    .then((result) => res.json(result))
}

exports.getSingleCustomer = (req, res) => {
    let id =req.params.id;
    for(let customer of customers) {
        if (this.getSingleCustomer.id == id) {
            res.status(200);
            return res.send(customer);
        }
    }

    res.send(400);
    res.send("customer not found");
}