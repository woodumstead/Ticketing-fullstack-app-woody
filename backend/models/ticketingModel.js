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
    name: {
        type: DataTypes.STRING,
        allowNull: false

    }
}, {
    timestamps: false
});

// exports
module.exports = Ticketing;