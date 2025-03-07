// src/components/Navbar.js
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const NavLinkStyled = styled(NavLink)`
  color: white;
  margin: 0 10px;
  text-decoration: none;

  &.active {
    font-weight: bold;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/about">About</NavLinkStyled>
      <NavLinkStyled to="/contact">Contact</NavLinkStyled>
    </Nav>
  );
};

export default Navbar;