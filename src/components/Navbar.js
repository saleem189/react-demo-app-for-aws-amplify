import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const NavBar = () => {

    return (
    <Container fluid>
      <Navbar expand="lg" variant="light" bg="light" sticky="top">
        <Container>
          <Navbar.Brand href="#">{process.env.REACT_APP_WEBSITE_NAME}</Navbar.Brand>
        </Container>
        
        <Container>

        </Container>
       
        <Container>
            <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                <Button variant="outline-success">Search</Button>
            </Form>
        </Container>

      </Navbar>
    </Container>
  );
}
export default NavBar;