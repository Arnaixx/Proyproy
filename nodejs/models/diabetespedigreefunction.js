const Sequelize = require("sequelize")
const sequelize = require("../utils/database")

const DiabetesPedigreeFunction = (sequelize)=>{
    sequelize.define('diabetespedigreefunction'),{
        diabetespedigreefunction:{
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }
}

module.exports = DiabetesPedigreeFunction