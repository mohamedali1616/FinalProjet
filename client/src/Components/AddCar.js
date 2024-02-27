import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCar } from "../Redux/Actions/CarAction";

const AddCar = ()=>{

    const [title,setTitle] = useState('')
    const [image,setImage] = useState('')
    const [description,setDescription] = useState('')
    const [categorie,setCategorie] = useState('Vente')
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAdd=(e)=>{
        e.preventDefault()
        dispatch(addCar({title,image,categorie,description},navigate))
    }
    return( 
        <div className='formCenter'>
        <Form style={{width:"500px"}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Enter title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Image</Form.Label>
                <Form.Control onChange={(e)=> setImage(e.target.value)} type="text" placeholder="Enter image" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Enter description" />
            </Form.Group>

            <Form.Select  onChange={(e)=>setCategorie(e.target.value)} aria-label="Default select example">
            <option value="Vente">Vente</option>
                <option value="Location">Location</option>
    </Form.Select>
        
            <Button className="bt" onClick={(e)=> handleAdd(e)} variant="outline-dark" type="submit">
                Submit
            </Button>
        </Form>
        </div>
    )

}

export default AddCar