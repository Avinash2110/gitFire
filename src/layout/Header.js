import React, {useState, useContext} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import {Link} from 'react-router-dom';
import {UserContext} from "../context/UserContext";


const Header = () =>{
    const context = useContext(UserContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return(
        <Navbar color="info" light expand="md">
            <NavbarBrand><Link to={process.env.PUBLIC_URL+"/"} className="text-white">GitFire App</Link>
            </NavbarBrand>
            <NavbarText className="text-white">
                {context.user?.email ? context.user.email : ""}
            </NavbarText>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                 <Nav className="ml-auto" navbar>
                     {context.user ? (
                        <NavItem>
                            <NavLink onClick={() =>{context.setUser(null)}} className="text-white">Logout</NavLink>
                        </NavItem>
                     ) : (
                         <>
                        <NavItem>
                            <NavLink tag={Link} to={process.env.PUBLIC_URL+"/Signup"} className="text-white">Signup</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={process.env.PUBLIC_URL+"/Signin"} className="text-white">Signin</NavLink>
                        </NavItem>
                        </>
                     )}
                      
                </Nav>
            </Collapse>
        </Navbar>
        
    )
}

export default Header;