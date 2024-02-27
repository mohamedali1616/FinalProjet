const Commande = require("../Models/Commande")

exports.AddCommande = async(req,res)=>{
    try {


        const newCommande = new Commande({...req.body,owner : req.user})

        await newCommande.save()

        res.status(200).send({Msg :"Commande Added",newCommande})
    } catch (error) {
        res.status(500).send('Could not add commande')
    }
}

exports.GetAllCommandes = async(req,res)=>{
    try {
        const commandes = await Commande.find().populate('owner').populate('car')

        res.status(200).send({Msg : "Commandes list",commandes})
    } catch (error) {
        res.status(500).send('Could not get commands')
    }
}

exports.GetOwnCommandes = async(req,res)=>{
    try {
        const commandes = await Commande.find({owner : req.user}).populate('owner').populate('car')

        res.status(200).send({Msg : "Commandes list",commandes})
    } catch (error) {
        res.status(500).send('Could not get commands')
    }
}

exports.DeleteCommande= async(req,res)=>{
    try {
        const {id} = req.params

        await Commande.findByIdAndDelete(id)

        res.status(200).send("Command deleted")
    } catch (error) {
        res.status(500).send('Could not delete command')
    }
}

exports.UpdateCommande = async(req,res)=>{
    try {
        const {id} = req.params

        await Commande.findByIdAndUpdate(id,{$set : req.body}) 

        res.status(200).send("Commande updated")
    } catch (error) {
        res.status(500).send('Could not update commande')
    }
    }

exports.GetOneCommande = async(req,res)=>{
    try {
        const {id} = req.params

        const commande = await Commande.findById(id)

        res.status(200).send({Msg : "Commande",commande})
    } catch (error) {
        res.status(500).send('Could not get commande')
    }
}