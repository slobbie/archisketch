import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavBar>
      <Link to="/">
        <Logo>archisketch</Logo>
      </Link>
    </NavBar>
  );
};

export default Nav;

const NavBar = styled.nav`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgba(235, 235, 235, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;
