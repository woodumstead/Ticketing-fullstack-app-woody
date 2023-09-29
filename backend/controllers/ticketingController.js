const ticketing = [
    {
        id: 1,
        match: "",
        date: "",
        seat: "",
        customer_id: "",
        

    },
    
]


const Ticketing = require("../models/ticketingModel")

// get all
exports.getAllTickets = async (req, res) => {
    await Ticketing.findAll() 
    .then((result) => res.json(result))
}

// get by id
exports.getSingleTicket = (req, res) => {
    let id =req.params.id;
    for(let ticket of tickets) {
        if (this.getSingleTicket.id == id) {
            res.status(200);
            return res.send(ticket);
        }
    }

    res.send(400);
    res.send("ticket not found");
}



// put
exports.addNewTicket = async (req, res) => {
    await Ticketing.create({
        seat: req.body.seat,
        match: req.body.match,
        date: req.body.date,
        customer_id: req.body.customer_id
    });

    const result = await Ticketing.findAll();
    return res.status(201).json(result);
}

// delete
exports.deleteTicket = async (req, res) => {
    const result = await Ticketing.findAll({where: {id: req.params.id}});
    if(result != null){
         await Ticketing.destroy({where: {id: req.params.id}});
         return res.json(result);
    }
    return res.send("ticket not found");
}