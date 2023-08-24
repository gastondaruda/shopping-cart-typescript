import {Container, Nav, Navbar} from 'react-bootstrap/'
import {NavLink} from "react-router-dom"
const NavbarComponent = () => {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="">
                    <NavLink to="/">Shopping Cart with Typescript</NavLink>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="">
                        <NavLink to="/">Home</NavLink>
                    </Nav.Link>
                    <Nav.Link href="">
                        <NavLink to="/shop">Shop</NavLink>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
    export default NavbarComponent
