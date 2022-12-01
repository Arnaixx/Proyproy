const Sequelize = require('sequelize');

const Diabetes = (sequelize)=>{
    sequelize.define('Diabetes',{
        //Forma especifica de declarar atributos
        pregnancies: Sequelize.FLOAT,
        glucose: Sequelize.FLOAT,
        bloodpressure: Sequelize.FLOAT,
        skinthickness: Sequelize.FLOAT,
        insulin: Sequelize.FLOAT,
        bmi: Sequelize.FLOAT,
        diabetespedigreefunction: Sequelize.FLOAT,
        age: Sequelize.FLOAT,
        outcome: Sequelize.INTEGER
    })
}

module.exports= Diabetes