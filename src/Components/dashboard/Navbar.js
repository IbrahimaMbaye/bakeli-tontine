import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../dashboard/Navbar.css';
import Image3 from '../images/Khalil.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FaBars } from 'react-icons/fa';


const NavScrollExample =({ toggleSidebar }) => {
  return (
    <Navbar expand="lg" className=" Nav">
      <Container fluid>
      <div className="nav-icon" onClick={toggleSidebar}>
      <FaBars /> 
    </div>
        
        <Navbar.Collapse id="">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          
            
            <Nav.Link href="#" disabled>
            
            </Nav.Link>
          </Nav>
          <div class="profile-details">
          <img src={Image3} alt=" "className='monimage3' />
          </div>
            <div>
          <span class="admin_name">Ndiaga SALL</span>
          <a href="" className="my-link">
        <i className="bi bi-chevron-down"></i>
      </a>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;