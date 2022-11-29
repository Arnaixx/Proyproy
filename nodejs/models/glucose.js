const Sequelize = require("sequelize")
const sequelize = require("../utils/database")

const Glucose = (sequelize)=>{
    sequelize.define('glucose'),{
        glucose:{
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }
}

module.exports = Glucose