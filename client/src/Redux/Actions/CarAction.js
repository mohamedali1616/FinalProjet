import { GETALLCARS, GETONECAR } from "../ActionTypes/CarTypes"
import axios from 'axios'
import { handleError } from "./ErrorAction"
export const getAllCars=()=>async(dispatch)=>{
    try {
   const res = await  axios.get('/api/car/getAllCars')

        dispatch(
          {
            type : GETALLCARS,
            payload : res.data.cars
          }

        )


    } catch (error) {
    console.log(error)
    }
}

export const GetOnecar=(id)=>async(dispatch)=>{
  try {
 const res = await  axios.get(`/api/car/getOneCar/${id}`)

      dispatch(
        {
          type : GETONECAR,
          payload : res.data.car
        }

      )


  } catch (error) {
  console.log(error)
  }
}

export const deleteCar = (id,navigate)=>async(dispatch)=>{
  try {
    await axios.delete(`/api/car/deleteCar/${id}`)

    dispatch(getAllCars())

    navigate('/ListCar')
  } catch (error) {
    console.log(error)
  }
}

export const addCar = (newCar,navigate)=>async(dispatch)=>{
  try {
    await axios.post('/api/car/PostCar',newCar)

    dispatch(getAllCars())

    navigate('/ListCar')
  } catch (error) {
    console.log (error)
  }
}

export const editCar=(id,cordCar,navigate)=>async(dispatch)=>{
  try {
    const res = await axios.put(`/api/car/updateCar/${id}`, cordCar)

    dispatch(GetOnecar(id))

    navigate(`/DescriptionCar/${id}`)

  } catch (error) {
    error.response.data.errors.forEach(element => {
      dispatch(handleError(element.msg))

    });

  }
}