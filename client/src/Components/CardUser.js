import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const CardUser=({el})=>{
    return(
        <Card style={{ width: '18rem' }}>
      <Card.Body>
       <Link to={`/UserDescription/${el._id}`}> <Card.Title>{el.name}</Card.Title></Link>
        <Card.Text>
           {el.email}
        </Card.Text>
    
      </Card.Body>
    </Card>
    )
}

export default CardUser