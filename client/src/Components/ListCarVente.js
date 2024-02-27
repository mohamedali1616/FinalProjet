import { useDispatch, useSelector } from "react-redux"
import { getAllCars } from "../Redux/Actions/CarAction"
import CardCar from "./CardCar"
import { useEffect } from "react"

const ListCarVente=()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllCars())
    },[])

    const cars = useSelector(state=> state.CarReducer.cars)

    return(
        <div className="cars">
            {
                cars.filter((el,i,t)=>el.categorie == 'Vente').map((el,i,t)=> <CardCar el={el}/>)
            }
        </div>
    )
}

export default ListCarVente