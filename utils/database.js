//Configuración de sequelize
const Sequelize = require('sequelize');


const sequelize = new Sequelize('diabetes','admin','admin1234',{
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
    
];

//Adherir los modelos al objeto de conexion
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);   
}

//Generar las relaciones entre las tablas
//applyRelations(sequelize);

//Exportar el objeto sequelize

module.exports = sequelize;

