import { useDispatch, useSelector } from "react-redux"
import { getAllCars } from "../Redux/Actions/CarAction"
import CardCar from "./CardCar"
import { useEffect } from "react"
import { getAllCommande, getOwnCommande } from "../Redux/Actions/CommandActions"
import CardCommand from "./CardCommand"

const ListOwnCommand=()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOwnCommande())
    },[])

    const ownCommands = useSelector(state=> state.CommandeReducer.ownCommands)

    return(
        <div className="users">
            {
                ownCommands.map((el,i,t)=> <CardCommand el={el}/>)
            }
        </div>
    )
}

export default ListOwnCommand