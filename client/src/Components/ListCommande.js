import { useDispatch, useSelector } from "react-redux"
import { getAllCars } from "../Redux/Actions/CarAction"
import CardCar from "./CardCar"
import { useEffect } from "react"
import { getAllCommande } from "../Redux/Actions/CommandActions"
import CardCommand from "./CardCommand"

const ListCommand=()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllCommande())
    },[])

    const commands = useSelector(state=> state.CommandeReducer.commands)

    return(
        <div className="users">
            {
                commands.map((el,i,t)=> <CardCommand el={el}/>)
            }
        </div>
    )
}

export default ListCommand