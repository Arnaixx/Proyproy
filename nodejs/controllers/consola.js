const path = require("path");
const { DATEONLY } = require("sequelize");
const Sequelize = require("sequelize");
const Diabetes = require("../models/diabetes");
const {rmSync} = require(fs); //no entiendo porque
//const Age = require("../utils/database").models.Age;

//CREATE
exports.postDiabetes =(req,res)=>{
    console.log(req.body)
    Diabetes.create(req,body)
    .then(result=>{
        console.log("Datos creados")
        res.json(req.body)
    })
    .catch((err)=>{
        console.log(err)
        res.json({state:"error"})
    })
}

//READ
exports.getDiabetes =(req,res)=>{
    Diabetes.findAll()
    .then(vjs=>{
        console.log(vjs)
        res.json(vjs)
    })
    .catch((err)=>{
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

//DELETE
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