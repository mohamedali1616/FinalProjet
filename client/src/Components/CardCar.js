import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import DeleteCar from './DeleteCar';
import { useState } from 'react';

function CardCar({el}) {
  const [showMore, setShowMore] = useState(false);
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.image} />
      <Card.Body>
       <Link to={`/DescriptionCar/${el._id}`}><Card.Title>{el.title}</Card.Title></Link> 
        <Card.Text>
        {showMore ?  `${el.description}` : `${el.description.substring(0, 24)}`}
        <button className={showMore ? 'show false' : 'show true' } onClick={() => setShowMore(!showMore)}>{showMore ? "Show Less" : "Show more..."}</button>
        </Card.Text>
        {/* <DeleteCar el={el}/> */}
      </Card.Body>
    </Card>
   
  );
}

export default CardCar