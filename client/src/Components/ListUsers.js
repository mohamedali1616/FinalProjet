import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllUsers } from '../Redux/Actions/AuthActions'
import CardUser from './CardUser'


const ListUsers=()=>{

    const dispatch = useDispatch() 

    useEffect(()=>{
        dispatch(getAllUsers()) 
    },[])

    const users = useSelector((state) => state.AuthReducer.users)
    return(
        <div  className="users">
            {
                users.map((el,i,t)=><CardUser el={el}/>)
            }
        </div>
    )
}


   


export default ListUsers