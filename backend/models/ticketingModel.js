// imports and data
const{ DataTypes } = require("sequelize");
const { sequelize } = require('./conn');

// table data parameters
const Ticketing = sequelize.define("ticket", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    match: {
        type: DataTypes.STRING,
        allowNull: false

    },
    seat: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

// exports
module.exports = Ticketing;