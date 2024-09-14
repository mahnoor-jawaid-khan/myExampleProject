import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function BasicExample() {
  return (
    <Navbar expand="lg" className=" bg-dark">
      <Container>
        <Navbar.Brand href="#home" className='text-light'>React-Bootstrap</Navbar.Brand>
        {/* <img src="" alt="" /> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='text-light'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-light'>About</Nav.Link>
            <Nav.Link href="#home" className='text-light'>Departments</Nav.Link>
            <Nav.Link href="#home" className='text-light'>Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;