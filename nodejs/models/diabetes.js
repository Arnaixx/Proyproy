const Sequelize = require('sequelize');

const Diabetes = (sequelize)=>{
    sequelize.define('Diabetes',{
        //Forma especifica de declarar atributos
        bloodpressure: Sequelize.FLOAT,
        bmi: Sequelize.FLOAT,
        diabetespedigreefunction: Sequelize.FLOAT,
        glucose: Sequelize.FLOAT,
        insulin: Sequelize.FLOAT,
        pregnancies: Sequelize.FLOAT,
        skinthickness: Sequelize.FLOAT,
        age: Sequelize.FLOAT
    })
}

module.exports= Diabetes