import styled from "styled-components";

export default function Card() {
  return (
    <CardContainer>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        alt="Morty"
      />
      <p>Morty Smith</p>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  border: 1px solid;
  border-radius: 15px;
  width: 25vw;
  height: 25vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  margin-bottom: 2%;
  padding: 5%;
`;
