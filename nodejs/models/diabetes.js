const Sequelize = require('sequelize');

const Diabetes = (sequelize)=>{
    sequelize.define('Diabetes',{
        //Forma especifica de declarar atributos
        nombrePersona:{
            type: Sequelize.STRING,
            allowNull: true
        },
        age: Sequelize.INTEGER,
        bloodpressure: Sequelize.INTEGER,
        bmi: Sequelize.INTEGER,
        diabetespedigreefunction: Sequelize.INTEGER,
        glucose: Sequelize.INTEGER,
        insulin: Sequelize.INTEGER,
        pregnancies: Sequelize.INTEGER,
        skinthickness: Sequelize.INTEGER
    })
}

module.exports= Diabetes