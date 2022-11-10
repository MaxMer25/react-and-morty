import styled from "styled-components";

export default function Navigation() {
  return (
    <footer>
      <StyledNavigation>
        <ul>
          <li>
            <a href="">Homepage</a>
          </li>
          <li>
            <a href="">Favorite</a>
          </li>
          <li>
            <a href="">Random</a>
          </li>
          <li>other</li>
        </ul>
      </StyledNavigation>
    </footer>
  );
}

const StyledNavigation = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
  }
  li {
    margin-left: auto;
    margin-right: auto;
  }
`;
