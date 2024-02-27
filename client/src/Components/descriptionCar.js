import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Card from 'react-bootstrap/Card';
import { Link, useNavigate, useParams } from "react-router-dom";
import { GetOnecar } from "../Redux/Actions/CarAction";
import DeleteCar from "./DeleteCar";
import Button from "react-bootstrap/esm/Button";
import { addCommande } from "../Redux/Actions/CommandActions";


const DescriptionCar=()=>{
    const {id} = useParams()
    const dispatch = useDispatch ()

    useEffect(()=>{
        dispatch(GetOnecar(id))
    },[])
    const navigate = useNavigate()
    const car = useSelector(state=> state.CarReducer.car)
    const user = useSelector(state => state.AuthReducer.user)
    return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={car.image} />
      <Card.Body>
        <Card.Title>{car.title}</Card.Title>
        <Card.Text>
          {car.description}
          {car.categorie}
        </Card.Text>
        <Button onClick={()=>{dispatch(addCommande({car : car._id},navigate))}}>Commander</Button>
        {
          user.role == "admin"  &&
          <>
              <Card.Link as={Link} to={`/EditCar/${car._id}`}>Edit</Card.Link>
              <DeleteCar car={car}/>
          </>
        }
        
      </Card.Body>
    </Card>
    )
}

export default DescriptionCar