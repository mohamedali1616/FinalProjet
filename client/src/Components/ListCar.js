import { useDispatch, useSelector } from "react-redux"
import { getAllCars } from "../Redux/Actions/CarAction"
import CardCar from "./CardCar"
import { useEffect, useState } from "react"

const ListCar=()=>{
    const dispatch = useDispatch()
    const [showMore, setShowMore] = useState(false)

    useEffect(()=>{
        dispatch(getAllCars())
    },[])

    const cars = useSelector(state=> state.CarReducer.cars)
    const displayedCars = showMore ? cars : cars.slice(0, 5)

    return(
        <div className="cars">
            {
                displayedCars.map((el,i,t)=> <CardCar el={el}/>)
            }
            {cars.length > 5 && (<><button onClick={() => setShowMore(true)}>Show More</button>{showMore && <button onClick={() => setShowMore(false)}>Show Less</button>}</> )
            }
        </div>
    )
}

export default ListCar