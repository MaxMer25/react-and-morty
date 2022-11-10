import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <h1>React and Morty!</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: hotpink;
  margin-top: -20px;
`;
