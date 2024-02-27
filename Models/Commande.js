const mongoose = require ('mongoose')

const commandeSchema = new mongoose.Schema(
    {
        owner : {
            type : mongoose.Types.ObjectId,
            ref : 'amine'
        },
        car : {
            type : mongoose.Types.ObjectId,
            ref : 'voiture'
        },
        status : {
            type : String,
            default : "En cours de traitement"
        }
    }
)

module.exports = mongoose.model('commande',commandeSchema)