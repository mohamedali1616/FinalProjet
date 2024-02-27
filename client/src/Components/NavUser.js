import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { current, logout } from '../Redux/Actions/AuthActions';
import { useEffect } from 'react';

const NavUser=()=>{
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(current())
  },[])
  const token = localStorage.getItem('token')
  const user = useSelector(state => state.AuthReducer.user)
  const navigate = useNavigate()
  
    return(
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>FJ MOTORS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            {
              token && user ?

              <>
                <Nav.Link as={Link} to="/Profil">Profil</Nav.Link>
                <Nav.Link as={Link} to="/ListCar">Cars</Nav.Link>
                <Nav.Link as={Link} to="/ListCarLocation">Cars Location</Nav.Link>
                <Nav.Link as={Link} to="/ListCarVente">Cars Vente</Nav.Link>
                {
                  user.role == "admin" &&
                  <>
                    <Nav.Link as={Link} to="/AddCar">Add Car</Nav.Link>
                    <Nav.Link as={Link} to="/ListUsers">Users</Nav.Link>
                  </>
                }
                <Nav.Link onClick={()=>{dispatch(logout());navigate('/')}}>Logout</Nav.Link>
              </>
              :
              <>
                <Nav.Link as={Link} to="/Register">Register</Nav.Link>
                <Nav.Link as={Link} to="/Login">Login</Nav.Link>
              </>
            }
 
 

 

            
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavUser