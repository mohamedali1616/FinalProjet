import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux'
import { register } from '../Redux/Actions/AuthActions';
import {useNavigate} from 'react-router-dom'
const Register=()=>{

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister=(e)=>{
        e.preventDefault()
        dispatch(register({name,email,password},navigate))

    }
    return(
        <div className='formCenter'>
            <div className='titr'>
            <i class="fa-solid fa-user-plus fa-lg"></i>
             <span>Create Account</span>
            </div>
        <Form style={{width:"500px"}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter name" />        
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter email" />        
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Enter password" />        
            </Form.Group>
    

            <Button variant="outline-dark" className='bt' onClick={(e)=> handleRegister(e)}  type="submit">
            Submit
            </Button>
        </Form>
        </div>
    )
}

export default Register