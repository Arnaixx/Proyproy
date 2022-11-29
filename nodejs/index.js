const express = require("express")


const app = express()

//insertar rutas
//const ruta1 = require("path")

const sequelize = require('./utils/database')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//app.use("/",rutas)


sequelize.sync()
  .then(()=>{
    app.listen(8080,()=>{
      console.log("Applicación en línea")
    })
  })


