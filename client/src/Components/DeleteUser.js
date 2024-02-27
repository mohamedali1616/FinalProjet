import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useLocation, useNavigate } from 'react-router-dom';
import { current, deleteUser } from '../Redux/Actions/AuthActions';
import { useDispatch, useSelector } from 'react-redux';

const DeleteUser=()=>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(current())
    },[])
    const user = useSelector(state=> state.AuthReducer.user)
    const oneUser = useSelector(state=> state.AuthReducer.oneUser)
    const navigate = useNavigate()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const location = useLocation()
    return (
      <>
        <Button variant="outline-danger" onClick={handleShow}>
          Delete user
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
            <Button variant="primary" onClick={()=>{dispatch(deleteUser(location.pathname == '/Profil'? user._id : oneUser._id,navigate,location));handleClose()}}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default DeleteUser