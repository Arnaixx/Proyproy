const Sequelize = require("sequelize")
const sequelize = require("../utils/database")

const BMI = (sequelize)=>{
    sequelize.define('bmi'),{
        bmi:{
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }
}

module.exports = BMI