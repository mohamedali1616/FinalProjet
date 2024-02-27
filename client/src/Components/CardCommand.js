import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCommand, editCommand } from '../Redux/Actions/CommandActions';
const CardCommand=({el})=>{
    const user = useSelector(state => state.AuthReducer.user)
    const dispatch = useDispatch()
    return(
        <Card style={{ width: '18rem' }}>
      <Card.Body>
   <Card.Title>{el?.owner?.name}</Card.Title>
   <Card.Title>{el?.car?.title}</Card.Title>
   <Card.Title>{el.status}</Card.Title>
        <Card.Text>

        </Card.Text>
        {
            user.role == "admin" &&
            <div className='buut'>
            <Button variant="outline-dark" onClick={()=>dispatch(deleteCommand(el._id,user))}>Delete</Button>
            <Button variant="outline-success" onClick={()=>dispatch(editCommand(el._id,{status : 'Accepted'}))}>Accepter</Button>
            <Button  variant="outline-danger" onClick={()=>dispatch(editCommand(el._id,{status : 'Rejected'}))}>Rejeter</Button>
            </div>
        }
    

      </Card.Body>
    </Card>
    )
}

export default CardCommand