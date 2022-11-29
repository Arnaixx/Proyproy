const path = require("path");
const { DATEONLY } = require("sequelize");
const Sequelize = require("sequelize");
const {rmSync} = require(fs); //no entiendo porque
//const Age = require("../utils/database").models.Age;

//CREATE
exports.postDato =(req,res)=>{
    console.log(req.body)
    dato.create(req,body)
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
exports.getDato =(req,res)=>{
    dato.findAll()
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
exports.postUpdateDato = (req,res)=>{
    console.log(req.body)
    dato.update({
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
exports.postDeleteDato = (req, res)=>{
    console.log(req.body)
    Dato.destroy({
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