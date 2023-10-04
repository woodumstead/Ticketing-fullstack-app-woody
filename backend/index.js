// imports/ data
const express = require('express');
const ticketingRoutes = require("./routes/ticketingRoutes");
const customerRoutes = require("./routes/customerRoutes");
const app = express();
const cors = require("cors");

// ---- port ------
const port = 3001;


// functions
app.use(express.json());
app.use(cors())
app.use("/ticketing", ticketingRoutes);
app.use("/customer", customerRoutes);
app.listen(port, () => {
    console.log(`app is listening`)
}); 