import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import { current, EditCAr} from '../Redux/Actions/AuthActions';
import { GetOnecar, editCar } from '../Redux/Actions/CarAction';

const EditCar=()=>{

    const dispatch = useDispatch ()
    const {id} = useParams()
    useEffect(()=>{
        dispatch(GetOnecar(id))
    },[])
    const car = useSelector(state=> state.CarReducer.car)

    const [title,setTitle] = useState(car.title)
    const [image,setImage] = useState(car.image)
    const [description,setDescription] = useState(car.description)
    

    useEffect(()=>{
        setTitle(car.title)
        setImage(car.image)
        setDescription(car.description)

    },[car])
    const navigate = useNavigate()

    const handleEdit=(e)=>{
        e.preventDefault()
        dispatch(editCar(id,{title,image,description},navigate))
    }

    return(
        <div className='formCenter'>
        <Form style={{width:"500px"}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control value={title} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Enter title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Image</Form.Label>
                <Form.Control value={image} onChange={(e)=> setImage(e.target.value)} type="text" placeholder="Enter image" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control value={description} onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Enter description" />
            </Form.Group>

            <Button onClick={(e)=> handleEdit(e)} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div>
    )
}

export default EditCar