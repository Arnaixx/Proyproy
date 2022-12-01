

const path = require("path");
const Diabetes = require("../utils/database").models.Diabetes;
const sequelize =require("../utils/database");
const Sequelize = require("sequelize");


// Proceso cuando se llame a la ruta
exports.getAltaDiabetes = (req,res)=>{
    //res.send('<h1>Formulario de consola</h1>')
    res.sendFile(path.join(__dirname,'..','views','formulario.html'));
}


//Crear registro POST
exports.postAltaDiabetes =(req,res)=>{
    console.log(req.body)
    Diabetes.create(req.body)
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
    console.log(req.body)
    Diabetes.findAll({
        where:{
            id : req.body.id
        }
    }).then((diabetes)=>{
        console.log("Diabetes mostrada")
        res.send(diabetes)
    }).catch(e=>{
        console.log(e)
        res.send("Error")
    })
}

//DELETE FROM Consola WHERE id=
exports.postDeleteDiabetes = (req, res)=>{
    //DELETE FROM Consola WHERE id=
    console.log(req.body)
    Diabetes.destroy({
        where:{
            id : req.body.id
        }
    }).then(()=>{
        console.log("Diabetes eliminada")
        res.send("Diabetes eliminada")
    }).catch(e=>{
        console.log(e)
        res.send("Error")
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