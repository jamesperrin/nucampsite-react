import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import NucampLogo from '../app/assets/img/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar dark color='primary' sticky='top' expand='md'>
      <NavbarBrand className='ms-5' href='/' title='Home'>
        <img src={NucampLogo} alt='nucamp logo' className='float-start' />
        <h1 className='mt-1'>NuCamp</h1>
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className='ms-auto' navbar>
          <NavItem>
            <NavLink className='nav-link' to='/' title='Home'>
              <i className='fa fa-home fa-lg' /> Home
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className='nav-link' to='/directory' title='Directory'>
              <i className='fa fa-list fa-lg' /> Directory
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className='nav-link' to='/about' title='About'>
              <i className='fa fa-ingo fa-lg' /> About
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className='nav-link' to='/contact' title='Contact'>
              <i className='fa fa-address-card fa-lg' /> Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
