const Sequelize = require("sequelize")
const sequelize = require("../utils/database")

const BloodPressure = (sequelize)=>{
    sequelize.define('bloodpressure'),{
        bloodpressure:{
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }
}

module.exports = BloodPressure