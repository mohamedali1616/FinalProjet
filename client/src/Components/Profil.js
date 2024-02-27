import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Card from 'react-bootstrap/Card';
import { current } from "../Redux/Actions/AuthActions";
import { Link } from "react-router-dom";
import DeleteUser from "./DeleteUser";
import ListCommand from "./ListCommande";
import ListOwnCommand from "./ListOwnCommande";
import Button from "react-bootstrap/esm/Button";
const Profil=()=>{

    const dispatch = useDispatch ()

    useEffect(()=>{
        dispatch(current())
    },[])
    const user = useSelector(state=> state.AuthReducer.user)

    return(
      <div className="pro">
        <div>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
           {user.email}
        </Card.Text><div className="buut">
        <Button as={Link} to='/EditUser' variant="outline-info">Edit</Button>
        {/* <Card.Link as={Link} to='/EditUser'>Edit</Card.Link> */}
        <DeleteUser/>
        </div>
      </Card.Body>
    </Card>
    </div>



    {
      user.role == "admin" ?
      <ListCommand/>
      :
      <ListOwnCommand/>

    }
    
      </div>
        
    )
}

export default Profil
﻿
