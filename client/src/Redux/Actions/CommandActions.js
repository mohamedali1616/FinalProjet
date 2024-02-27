import axios from 'axios'
import { handleError } from "./ErrorAction"
import { GETALLCOMMANDS, GETOWNCOMMANS } from '../ActionTypes/CommandTypes'

export const getAllCommande=()=>async(dispatch)=>{
    try {
   const res = await  axios.get('/api/commande/getAllCommandes')

        dispatch(
          {
            type : GETALLCOMMANDS,
            payload : res.data.commandes
          }

        )


    } catch (error) {
    console.log(error)
    }
}

export const getOwnCommande=()=>async(dispatch)=>{
  try {
 const res = await  axios.get('/api/commande/getOwnCommandes',{
  headers : {
      Authorization : localStorage.getItem('token')
  }
})

      dispatch(
        {
          type : GETOWNCOMMANS,
          payload : res.data.commandes
        }

      )


  } catch (error) {
  console.log(error)
  }
}
// export const GetOnecar=(id)=>async(dispatch)=>{
//   try {
//  const res = await  axios.get(`/api/car/getOneCar/${id}`)

//       dispatch(
//         {
//           type : GETONECAR,
//           payload : res.data.car
//         }

//       )


//   } catch (error) {
//   console.log(error)
//   }
// }

export const deleteCommand = (id,user)=>async(dispatch)=>{
  try {
    await axios.delete(`/api/commande/deleteCommande/${id}`)
    if (user.role == 'admin') {
      dispatch(getAllCommande())
    } else {
      dispatch(getOwnCommande())
    }
    

    
  } catch (error) {
    console.log(error)
  }
}

export const addCommande = (commande,navigate)=>async(dispatch)=>{
  try {
    await axios.post('/api/commande/addCommande',commande,{
        headers : {
            Authorization : localStorage.getItem('token')
        }
    })

    dispatch(getAllCommande())

    navigate('/Profil')
  } catch (error) {
    console.log (error)
  }
}

export const editCommand=(id,cordComm)=>async(dispatch)=>{
  try {
    const res = await axios.put(`/api/commande/updateCommande/${id}`, cordComm)

    dispatch(getAllCommande())

  } catch (error) {
    error.response.data.errors.forEach(element => {
      dispatch(handleError(element.msg))

    });

  }
}