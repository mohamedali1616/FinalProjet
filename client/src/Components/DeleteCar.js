import { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteCar } from "../Redux/Actions/CarAction";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";

const DeleteCar = ({car})=>{
    const dispatch = useDispatch()

    const[show,setShow]= useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow (true);
  const navigate = useNavigate()
    return (
        <>
        <Button variant="danger" onClick={handleShow}>
          Delete
        </Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"onClick={()=>{dispatch(deleteCar(car._id,navigate));handleClose()}} >
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );

}

export default DeleteCar