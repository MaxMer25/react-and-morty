import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <footer>
      <StyledNavigation>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/favorites"> Favorites </Link>
          </li>
          <li>
            <Link to="/random"> Random </Link>
          </li>
          <li>other</li>
        </ul>
      </StyledNavigation>
    </footer>
  );
}

const StyledNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;

  ul {
    list-style-type: none;
    display: flex;
  }
  li {
    margin-left: auto;
    margin-right: auto;
  }
`;
