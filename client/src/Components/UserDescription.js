import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneUser } from '../Redux/Actions/AuthActions';
import DeleteUser from './DeleteUser';
const UserDescription=()=>{
    const {id} = useParams()

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneUser(id))
    },[])

    const oneUser = useSelector(state => state.AuthReducer.oneUser)
    return(
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{oneUser.name}</Card.Title>
        <Card.Text>
           {oneUser.email}
        </Card.Text>
        <DeleteUser/>
      </Card.Body>
    </Card>
    )
}

export default UserDescription