const Sequelize = require("sequelize")
const sequelize = require("../utils/database")

const Pregnancies = (sequelize)=>{
    sequelize.define('pregnancies'),{
        pregnancies:{
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }
}

module.exports = Pregnancies