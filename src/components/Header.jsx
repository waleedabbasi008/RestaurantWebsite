import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { RiRestaurant2Fill } from 'react-icons/ri';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import '../app.scss';

function Header() {
  const foodProduct = useSelector(state => state.cart);
  return (
    <Navbar expand="md" className=" bg-dark nav" >
      <Container  >
        <Navbar.Brand href="#home" className=' logo text-light fs-1'><RiRestaurant2Fill /></Navbar.Brand>
        <Navbar.Brand href="#home" className=' logo-text  fw-bold'>Chef Waleed's food</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto fs-5 fw-bolder text-grey NavItems" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#recipee">Recipee</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

          </Nav>
          <Form className="d-flex search-container">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search-input"
              aria-label="Search"
            />
            <span className="search-icon"> <AiOutlineSearch /> </span>

      <span className="cart-icon text-light "> <AiOutlineShoppingCart /> ({foodProduct.id}) </span>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;