const ticketing = [
    {
        id: 1,
        match: "",
        date: "",
        seat: "",
        customer_id: "",
        

    },
    
]

exports.getAllTickets = (req, res) => {
    res.json(ticketing);
}

exports.getSingleTicket = (req, res) => {
    let id =req.params.id;
    for(let ticket of tickets) {
        if (this.getSingleTicket.id == id) {
            res.status(200);
            return res.send(ticket);
        }
    }

    res.send(400);
    res.send("customer not found");
}