const Sequelize = require("sequelize")
const sequelize = require("../utils/database")

const Insulin = (sequelize)=>{
    sequelize.define('insulin'),{
        insulin:{
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }
}

module.exports = Insulin