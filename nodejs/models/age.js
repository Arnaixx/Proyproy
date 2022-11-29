const Sequelize = require("sequelize")
const sequelize = require("../utils/database")

const Age = (sequelize)=>{
    sequelize.define('age'),{
        age:{
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }
}

module.exports = Age