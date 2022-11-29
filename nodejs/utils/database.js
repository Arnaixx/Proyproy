//Configuración de sequelize
const Sequelize = require('sequelize');
//const {applyRelations} = require('./relations');
//objeto de conexión

//cambiar 'test' por la base de datos
const sequelize = new Sequelize('Diabetes','admin','admin1234',{
    dialect:'mysql',
    host:'database-1.c4rk4yygnjxi.us-east-1.rds.amazonaws.com',
    dialectOptions:{
        options:{
            //Características especiales de la conexión
        }
    },
    define:{
        timestamps: false,
        freezeTableName:true
    }
});

//Cargar los modelos
const modelDefiners =[
    require('../models/diabetes')
];

//Adherir los modelos al objeto de conexion
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);   
}

//Generar las relaciones entre las tablas
//applyRelations(sequelize);

//Exportar el objeto sequelize

module.exports = sequelize;