import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

export default function Character({ apiData }) {
  let { characterId } = useParams();
  const found = apiData.find(({ id }) => id === Number(characterId));

  const [toggle, setToggle] = useState(true);

  function showAnswer() {
    setToggle(!toggle);
  }

  return (
    <CardContainer toggle={toggle}>
      <h1>{found.name} </h1>
      <img src={found.image} alt={found.name} />

      <ul>
        <li>Species: {found.species}</li>
        <li>Gender: {found.gender}</li>
        <li>Status: {found.status}</li>
      </ul>
      <button onClick={showAnswer}>Show more</button>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    ${(props) => props.toggle && "visibility: hidden"}
  }
  li {
    list-style: none;
  }
`;
