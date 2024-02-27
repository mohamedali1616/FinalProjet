import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux'
import { login,  } from '../Redux/Actions/AuthActions';
import {useNavigate} from 'react-router-dom'
const Login=()=>{

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault()
        dispatch(login({email,password},navigate))
    }
    return(
        <div className='formCenter'>
            <div className='titr'>
            <i class="fa-solid fa-arrow-right-to-bracket fa-lg"></i>
             <span>Open Account</span>
            </div>
          
        <Form style={{width:"500px"}}>
     
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter email" />        
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Enter password" />        
            </Form.Group>
    

            <Button className='bt' onClick={(e)=>handleLogin(e)} variant="outline-dark" type="submit">
            Submit
            </Button>
        </Form>
        </div>
    )
}

export default Login