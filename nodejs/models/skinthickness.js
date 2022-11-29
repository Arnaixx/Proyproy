const Sequelize = require("sequelize")
const sequelize = require("../utils/database")

const SkinThickness = (sequelize)=>{
    sequelize.define('skinthickness'),{
        skinthickness:{
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }
}

module.exports = SkinThickness