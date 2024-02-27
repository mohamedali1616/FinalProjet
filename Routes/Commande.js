const express = require('express')
const { isAuth } = require('../Middlewares/isAuth')
const { AddCommande, DeleteCommande, UpdateCommande, GetAllCommandes, GetOneCommande, GetOwnCommandes } = require('../Controllers/Commande')

const commandeRouter = express.Router()

commandeRouter.post('/addCommande',isAuth,AddCommande)

commandeRouter.delete('/deleteCommande/:id',DeleteCommande)

commandeRouter.put('/updateCommande/:id',UpdateCommande )

commandeRouter.get('/getAllCommandes',GetAllCommandes) 

commandeRouter.get('/getOwnCommandes',isAuth,GetOwnCommandes) 

commandeRouter.get('/getOneCommande/:id',GetOneCommande)


module.exports = commandeRouter