const express = require('express')
const { AddCar, GetOnecar, GetAllCars, UpdateCar, DeleteCar } = require('../Controllers/Car')



const carRouter = express.Router()

carRouter.post('/PostCar',AddCar)

carRouter.delete('/deleteCar/:id',DeleteCar)

carRouter.put('/updateCar/:id', UpdateCar)

carRouter.get('/getAllCars',GetAllCars) 

carRouter.get('/getOneCar/:id',GetOnecar)


module.exports = carRouter