// imports and data
const{ DataTypes } = require("sequelize");
const { sequelize } = require('./conn');

// table data parameters
const Customer = sequelize.define("customer", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    name: {
        type: DataTypes.STRING,
        allowNull: false

    },
    season_pass_holder: {
        type: DataTypes.BOOLEAN
    }
}, {
    timestamps: false
});

// exports
module.exports = Customer;