// --------  imports and data
const { Sequelize } = require('sequelize');


// --------  DB connection config
const sequelize = new Sequelize("ticketing", "Werk", "milesboi", {
    host: "localhost",
    dialect: "postgres"
});


// ---------  connection test
async function testConnection() {
    try{
        await sequelize.authenticate();
        console.log("connection established");
        return true;
    } catch(error) {
        console.error("connection failed", error);
        return false;
    }
};


//------------  exports
module.exports = {sequelize, testConnection};