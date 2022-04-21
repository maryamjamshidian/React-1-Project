import {  Container, Navbar, NavbarBrand } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

const Header=({showSidebarToggle})=>{


return(
    <div>
    <Navbar bg="light" expand={false}>
                
    <Container fluid>
        
        <NavbarBrand href="#">
      
            <NavbarToggle eria-aria-controls="offcanvasnavbar"
                onClick={showSidebarToggle} />
        </NavbarBrand>
    </Container>
   
</Navbar>
</div>

)
}
export default Header;