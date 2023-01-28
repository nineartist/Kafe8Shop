import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../Store/AddToCart";
import classes from "./MainNavigation.module.css";
import Badge from "react-bootstrap/Badge";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
//Bostrap
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container } from "react-bootstrap";

function MainNavigation() {
  const cartCtx = useContext(CartContext);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/kafe8_logo.jpg"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Kafe8 logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Our Menus
            </Nav.Link>
            <Nav.Link as={Link} to="/addMenu">
              New Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Your Cart
              <Badge bg="secondary"> {cartCtx.totalOrder}</Badge>
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">
              Your Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <header className={classes.header}>
    //   <div className={classes.logo}>Kafe8</div>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Our Menus</Link>
    //       </li>
    //       <li>
    //         <Link to="/addMenu">Add Menu</Link>
    //       </li>
    //       <li>
    //         <Link to="/cart">
    //           Cart
    //           <span className={classes.badge}>{cartCtx.totalOrder}</span>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/profile">Profile</Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  );
}

export default MainNavigation;
