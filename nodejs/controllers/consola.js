const path = require("path");
const { DATEONLY } = require("sequelize");
const Sequelize = require("sequelize");
const Diabetes = require("../models/diabetes");
//const {rmSync} = require(fs); //no entiendo porque
//const Age = require("../utils/database").models.Age;


// Proceso cuando se llame a la ruta
exports.getAltaDiabetes = (req,res)=>{
    //res.send('<h1>Formulario de consola</h1>')
    res.sendFile(path.join(__dirname,'..','views','formulario.html'));
}


//Crear registro POST
exports.postAltaDiabetes =(req,res)=>{
    console.log(req.body)
    Diabetes.create(req,body)
    .then(result=>{
        console.log("Datos creados")
        res.send("Registro exitoso") //Cliente
        //res.json(req.body)
    })
    .catch((err)=>{
        console.log(err)
        //res.json({state:"error"})
        res.send("Ocurrio un error")//Cliente
    })
}

//Get all registros
exports.getAllDiabetes = (req,res)=>{
    //SELECT * from Consola;
    Diabetes.findAll()
        .then(diabetes=>{
            console.log("AllDiabetes",diabetes);
            res.send(diabetes);
        })
        .catch(e=>{
            console.log(e);
            res.send("Error");
        })
}

//FALTA Consultar 1 registro
exports.getConsultaDiabetes = (req,res)=>{
    res.send('<h1>Datos de las diabetes</h1>')
}

//DELETE FROM Consola WHERE id=
exports.postDeleteDiabetes = (req, res)=>{
    console.log(req.body)
    Diabetes.destroy({
        where:{
            id: req.body.id
        }
    })
    .then(()=>{
        console.log("Deleted")
        res.json({state:"accepted"})
    })
    .catch(err =>{
        console.log(err)
        res.json({state:"error"})
    })
}


//UPDATE
exports.postUpdateDiabetes = (req,res)=>{
    console.log(req.body)
    Diabetes.update({
        age: req.body.age
        //agregar cambios faltantes
    },{
        where:{
            id: req.body.id
        }
    })
    .then(()=>{
        console.log("Updated")
        res.json({state:"accepted"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({state:"error"})
    })
}