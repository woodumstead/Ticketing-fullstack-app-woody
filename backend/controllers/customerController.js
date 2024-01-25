const customers = [
    {
        id: 1,
        seasonPassHolder: Boolean,
        name: ""
        

    },
    
]
const Customer = require("../models/customerModel") 

// get all
exports.getAllCustomers = async (req, res) => {
    await Customer.findAll() 
    .then((result) => res.json(result))
    .catch((error) => res.send("error occurred"))
}

// get by id
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

// post
exports.addNewCustomer = async (req, res) => {
    await Customer.create({
        name: req.body.name,
        season_pass_holder: req.body.season_pass_holder
    });

    const result = await Customer.findAll();
    return res.status(201).json(result);
    
    
}

// delete
exports.deleteCustomer = async (req, res) => {
    const result = await Customer.findAll({where: {id: req.params.id}});
    if(result != null){
         await Customer.destroy({where: {id: req.params.id}});
         return res.json(result);
    }
    return res.send("Customer not found");
}
