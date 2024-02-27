import { CURRENT, FAIL, GETALLUSERS, GETONEUSER, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/AuthTypes"
import axios from 'axios'
import { handleError } from "./ErrorAction"
export const register=(newUser,navigate)=>async(dispatch)=>{
    try {
        const res =  await axios.post('/api/user/SignUp',newUser)

        dispatch(
            {
                type : REGISTER,
                payload : res.data
            }
        )

        navigate('/Profil')
    } catch (error) {

        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}


export const login=(cordUser,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/user/SignIn',cordUser)

        dispatch(
            {
                type : LOGIN,
                payload : res.data
            }
        )

        navigate('/Profil')
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}

export const logout=()=>{
    return(
        {
            type : LOGOUT
        }
    )
}

export const current=()=>async(dispatch)=>{
    const config = {
        headers : {
            Authorization : localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get('/api/user/ConnectedUser',config)

        dispatch(
            {
                type : CURRENT,
                payload : res.data
            }
        )
    } catch (error) {
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            }
        )
    }
}


export const editUser=(id,cordUser,navigate)=>async(dispatch)=>{
    try {
      const res = await axios.put(`/api/user/updateUser/${id}`, cordUser)
  
      dispatch(current())
  
      navigate('/Profil')
  
    } catch (error) {
      error.response.data.errors.forEach(element => {
        dispatch(handleError(element.msg))
  
      });
  
    }
  }
  
  export const deleteUser=(id,navigate,location)=>async(dispatch)=>{
    try {

        if (location.pathname == '/Profil') {
            dispatch(logout())
  
            navigate('/')
      
            await axios.delete(`/api/user/deleteUser/${id}`)
        } else {
            await axios.delete(`/api/user/deleteUser/${id}`)

            dispatch(getAllUsers())

            navigate('/ListUsers')
        }
  
       
  
    } 
      catch (error) {
        console.log(error)    
     } }
  
     export const getAllUsers=()=>async(dispatch)=>{
        try {
            const res =  await axios.get('/api/user/getAllUser')
    
            dispatch(
                {
                    type : GETALLUSERS,
                    payload : res.data.users
                }
            )
    
        } catch (error) {
    
            error.response.data.errors.forEach(element => {
                dispatch(handleError(element.msg))
            });
        }
    }
    export const getOneUser=(id)=>async(dispatch)=>{
        try {
            const res =  await axios.get(`/api/user/getOneUser/${id}`)
    
            dispatch(
                {
                    type : GETONEUSER,
                    payload : res.data.user
                }
            )
           

        } catch (error) {
    
            error.response.data.errors.forEach(element => {
                dispatch(handleError(element.msg))
            });
        }
    }